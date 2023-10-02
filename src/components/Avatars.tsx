import React from "react";
import { Avatar, Space } from "antd";

const Avatars: React.FC = (props) => (
  <Space direction="vertical" size={16}>
    <Avatar
      size={48}
      style={{
        backgroundColor: "blue",
        verticalAlign: "middle",
      }}
    >
      NT
    </Avatar>
  </Space>
);

export default Avatars;
