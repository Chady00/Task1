import React from "react";
import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "../Styles/HorizontalMenu.css";

interface IMenuItem {
  title: string;
  link: string;
}

const HorizontalMenu: React.FC = () => {
  const menuItems: IMenuItem[] = [
    { title: "Program Details", link: "/program-details" },
    { title: "Application Form", link: "/application-form" },
    { title: "Workflow", link: "/workflow" },
    { title: "Preview", link: "/preview" },
  ];

  return (
    <Menu mode="horizontal" className="horizontal-menu">
      {menuItems.map((item, index) => (
        <Menu.Item
          key={item.link}
          className={index === menuItems.length - 1 ? "last-menu-item" : ""}
        >
          <Link to={item.link}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HorizontalMenu;
