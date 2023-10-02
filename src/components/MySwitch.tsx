import { Row, Switch, Col } from "antd";
import React from "react";

import "../Styles/MySwitch.css";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const MySwitch: React.FC = () => (
  <>
    <Row>
      <Col span={12}>
        <Switch onChange={onChange} className="my-switch" />
      </Col>
      <Col>
        <p className="label-tag">Hide</p>
      </Col>
    </Row>
  </>
);

export default MySwitch;
