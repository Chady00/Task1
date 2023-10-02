import React, { useState } from "react";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import "../Styles/MyDropDown.css";
import type { Question } from "../types/type";

const items: { label: string; key: string }[] = [
  {
    label: "Paragraph",
    key: "1",
  },
  {
    label: "Short Answer",
    key: "2",
  },
  {
    label: "Yes/No",
    key: "3",
  },
  {
    label: "DropDown",
    key: "4",
  },
  {
    label: "Multiple Choice",
    key: "5",
  },
  {
    label: "Date",
    key: "6",
  },
  {
    label: "Number",
    key: "7",
  },
  {
    label: "File Upload",
    key: "8",
  },
  {
    label: "Video Question",
    key: "9",
  },
];

interface DropDownProp {
  UpdateQuestionSchema: (label: string, id: number) => void;
  id: number;
  updateType: (type: string) => void;
}

const MyDropDown: React.FC<DropDownProp> = ({
  UpdateQuestionSchema,
  id,
  updateType,
}) => {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");

    const selectedItemObject = items.find((item) => item.key === e.key);
    if (selectedItemObject) {
      setSelectedtype(selectedItemObject.label);
    }
    updateType(selectedItemObject!.label);
    UpdateQuestionSchema(selectedItemObject!.label, id);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
    className: "custom-menu-items",
  };

  // useState keep track of type
  const [Selectedtype, setSelectedtype] = useState("Paragraph");
  return (
    <Space wrap>
      <Dropdown menu={menuProps}>
        <Button className="button">
          {Selectedtype}
          <CaretDownOutlined style={{ color: "black" }} />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default MyDropDown;
