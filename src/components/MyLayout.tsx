import React, { useState } from "react";
import { Col, Layout, Menu, Row, theme } from "antd";
import HorizontalMenu from "./HorizontalMenu";
import Cards from "./Cards";
import Avatars from "./Avatars";
import { MenuOutlined, HomeOutlined, HddOutlined } from "@ant-design/icons";

import "../Styles/MyLayout.css";

const { Sider, Content } = Layout;

const MyLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const siderWidth = 117;
  const siderHeight = 3100;

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={true}>
        <div className="demo-logo-vertical" />
        <Row gutter={[16, 16]}>
          <Col span={80}>
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={["3"]}
              style={{
                width: `${siderWidth}px`, // Apply the desired width
                height: `${siderHeight}px`, // Apply the desired height
                background: "white",
                boxShadow: "0px 4px 23px 0px rgba(0, 0, 0, 0.05)", // Fix the property name
              }}
              className="menu-vertical"
              items={[
                {
                  key: "1",
                  icon: (
                    <MenuOutlined
                      style={{
                        fontSize: "22px",
                        verticalAlign: "middle",
                      }}
                    />
                  ),
                  label: "Expand",
                  style: { marginTop: "39px", color: "black" },
                },
                {
                  key: "2",
                  icon: (
                    <HomeOutlined
                      style={{
                        fontSize: "30px",
                        verticalAlign: "middle",
                      }}
                    />
                  ),
                  label: "Home",
                  style: { marginTop: "77px", color: "black" },
                },
                {
                  key: "3",
                  icon: (
                    <HddOutlined
                      style={{
                        fontSize: "30px",
                        verticalAlign: "middle",
                      }}
                    />
                  ),
                  style: { marginTop: "40px", color: "black" },
                  label: "Details",
                },
                {
                  key: "4",
                  icon: <Avatars />,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                    marginLeft: "10px",
                    marginTop: "810px",
                  },
                },
              ]}
            />
          </Col>
        </Row>
      </Sider>
      <Layout>
        <Content
          style={{
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <HorizontalMenu />
          <Cards />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
