import React from "react";
import { storiesOf } from "@storybook/react";
import moment from "moment";
import DatePicker from "../src/DatePicker";

storiesOf("DatePicker", module).add("DatePicker", () => <DatePicker date={moment()} format="MM/DD/YYYY" />);
