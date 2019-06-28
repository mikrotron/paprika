import React from 'react';
import PropTypes from 'prop-types';
import Heading from '@paprika/heading';
import mdxHeaderStyles from "./MdxHeader.styles";

const propTypes = {
  componentTitle: PropTypes.string,
  description: PropTypes.string,
  packageJson: PropTypes.node,
};

function MdxHeader(props) {
  return (
    <div css={mdxHeaderStyles}>
      <Heading level={1} hasUnderline>{props.componentTitle}</Heading>
      <div className="mdx-header__meta">
        <div className="mdx-header__description">
          <p>{props.description}</p>
        </div>
        <div className="mdx-header__quick-stuffs">
          <div>
            Version
            <code>{props.packageJson.version}</code>
          </div>
          <div>
            Status
            <code>Complete</code>
          </div>
        </div>
      </div>
      <div>
        <Heading level={5}>How to Install</Heading>
        <Heading level={6}>Npm</Heading>
        <code>npm install --save @paprika/button</code>
        <Heading level={6}>Yarn</Heading>
        <code>yarn install @paprika/button</code>
      </div>

      <table>
        <tr>
          <td>Source code</td>
          <td><a href={props.packageJson.repository.url}>Github</a></td>
        </tr>
      </table>
    </div>
  );
}

MdxHeader.propTypes = propTypes;
export default MdxHeader;
