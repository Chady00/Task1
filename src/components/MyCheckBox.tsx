import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "../Styles/MySwitch.css";
import React from "react";

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const MyCheckBox: React.FC = ({ checkText }) => (
  <Checkbox
    onChange={onChange}
    className="label-tag"
    style={{ fontSize: "16px", color: "black" }}
  >
    {checkText === undefined ? "Internal" : checkText}
  </Checkbox>
);

export default MyCheckBox;
