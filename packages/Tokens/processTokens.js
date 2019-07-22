const YAML = require("yamljs"); /* eslint-disable-line import/no-extraneous-dependencies */
const fs = require("fs");
const sass = require("node-sass"); /* eslint-disable-line import/no-extraneous-dependencies */

class DesignTokenBuilder {
  constructor() {
    this.YAML_FILE = "./src/tokens.yaml";
    this.JSON_FILE = "./src/tokens.json";
    this.JS_FILE = "./src/tokens.js";
    this.SCSS_FILE = "./src/tokens.scss";
    this.MARKDOWN_FILE = "./src/tokens.mdx";
    this.yamlObject = this.loadYamlFile();
    this.yamlVariables = [];
  }

  outputError(str) {
    const BgRed = "\x1b[41m";
    const FgBlack = "\x1b[30m";
    const resetColours = "\x1b[0m";
    console.log(BgRed + FgBlack + str + resetColours);
  }

  loadYamlFile() {
    try {
      return YAML.load(this.YAML_FILE);
    } catch (e) {
      this.outputError("Invalid YAML file.  Paste it into www.yamllint.com to see errors");
      process.exit(1);
    }
    return null;
  }

  writeToFile(filePath, string) {
    fs.writeFile(filePath, string, err => {
      if (err) {
        console.log(`Error saving [${filePath}]: ${err}`);
      }
    });
  }

  getObjectString() {
    const newObj = Object.create(null);
    Object.keys(this.yamlObject).forEach(key => {
      newObj[this.cleanUpKey(key)] = this.cleanUpObject(key, this.yamlObject[key]);
    });
    return JSON.stringify(newObj, null, 2);
  }

  getSassLine(prepend, key, value) {
    return `$${prepend}${key}: ${value};\n`;
  }

  getSassLines(prepend, key, value) {
    if (typeof value === "object") {
      let str = `\n//${key}\n`;
      Object.keys(value).forEach(key2 => {
        str += this.getSassLines(`${prepend}${key}--`, key2, value[key2]);
      });

      str += "\n";
      return str;
    }
    return this.getSassLine(prepend, key, value);
  }

  // This could possibly go into the existing method that cleans up the yaml file, as it already loops...
  convertYamlToScss() {
    console.log("...generating SCSS");

    let scssString = "";
    Object.keys(this.yamlObject).forEach(key => {
      scssString += this.getSassLines("", key, this.yamlObject[key]);
    });
    this.writeToFile(this.SCSS_FILE, scssString);
  }

  getMarkdownLine(prepend, key, value) {
    const exampleHtml = value.charAt(0) === "#" ? `<TokenSquare color="${value}" />` : "";

    return `| $${prepend}${key} | ${value} | ${exampleHtml} | \n`;
  }

  getMarkdownLines(prepend, key, value) {
    if (typeof value === "object") {
      let str = "";
      Object.keys(value).forEach(key2 => {
        str += this.getMarkdownLines(`${prepend}${key}--`, key2, value[key2]);
      });
      return str;
    }
    return this.getMarkdownLine(prepend, key, value);
  }

  convertYamlToMDX() {
    console.log("...generating documentation");
    let markdownString = `
---
name: "Tokens"
route: /tokens
---

import TokenSquare from "./TokenSquare"

# Tokens table

| Name | Value | Example
|:--|:--|:--|
    `;

    Object.keys(this.yamlObject).forEach(key => {
      markdownString += this.getMarkdownLines("", key, this.yamlObject[key]);
    });

    markdownString += "\n_Page auto-generated by paprika_";

    this.writeToFile(this.MARKDOWN_FILE, markdownString);
  }

  // Go over each variable and try to replace it with its value in yamlVariables
  replaceVariables(str) {
    const matches = str.match(/\$[\w'-]+/gi);
    if (matches) {
      matches.forEach(match => {
        const re = new RegExp(match.replace("$", "\\$"), "i");

        if (!this.yamlVariables[match]) {
          this.outputError(`The variable [${match}] was referenced in the YAML file before it was defined`);
        }
        /* eslint-disable-next-line */
        str = str.replace(re, this.yamlVariables[match]);
      });
    }
    return str;
  }

  processSassString(str) {
    let output = "";
    try {
      output = sass.renderSync({
        data: `.x {color:${str}}`,
        outputStyle: "compressed",
      });

      output = output.css.toString();
      output = output.substr(9, output.length - 11);

      // Some of the Asian characters are causing string length to be off by one, and leaving the
      // leading colon. Remove it.
      if (output.charAt(0) === ":") {
        output = output.substr(1, output.length);
      }
    } catch (e) {
      // One of the font family rules comes in here
      output = str;
    }
    return output;
  }

  processYamlObject(prepend, key, value) {
    if (typeof value === "object") {
      const tempObj = {};
      Object.keys(value).forEach(key2 => {
        tempObj[key2] = this.processYamlObject(`${prepend}${key}--`, key2, value[key2]);
      });
      return tempObj;
    }

    const processedValue = this.processSassString(this.replaceVariables(value));
    this.yamlVariables[`$${prepend}${key}`] = processedValue;
    return processedValue;
  }

  // Make it camel case, remove hyphens, remove leading `$`
  // E.g. convert `$black-lighten-10` to `blackLighten10`
  cleanUpKey(str) {
    /* eslint-disable-next-line */
    str = str.replace(/-([a-z0-9])/gi, (s, group1) => group1.toUpperCase());

    return str.charAt(0) === "$" ? str.substr(1) : str;
  }

  cleanUpObject(key, value) {
    if (typeof value === "object") {
      const tempObj = {};
      Object.keys(value).forEach(key2 => {
        tempObj[this.cleanUpKey(key2)] = this.cleanUpObject(key2, value[key2]);
      });
      return tempObj;
    }

    return value;
  }

  convertYamlToJson() {
    console.log("...generating JSON");

    this.writeToFile(this.JSON_FILE, this.getObjectString());
  }

  convertYamlToJs() {
    console.log("...generating JS");

    const declareString = "const tokens = ";
    const exportString = ";\nexport default tokens;";

    const outputString = `${declareString}${this.getObjectString()}${exportString}`;

    this.writeToFile(this.JS_FILE, outputString);
  }

  // Go over the YAML object and convert variables into strings and evaluate the sass expressions.
  processYamlFile() {
    console.log("...processing YAML");
    Object.keys(this.yamlObject).forEach(key => {
      this.yamlObject[key] = this.processYamlObject("", key, this.yamlObject[key]);
    });
  }

  run() {
    this.processYamlFile();
    this.convertYamlToJson();
    this.convertYamlToJs();
    this.convertYamlToScss();
    this.convertYamlToMDX();
  }
}

const dtb = new DesignTokenBuilder();
dtb.run();
console.log("🌈 Processing tokens...");
