import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Personalized Nutrition Plans
      </a>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Consultation Services
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Health Analytics
      </a>
    ),
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Child Nutrition
      </a>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Weight Loss Programs
      </a>
    ),
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Food Suppliers
      </a>
    ),
    key: "5",
  },
];
const DropdownArrow = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>Service</Space>
    </a>
  </Dropdown>
);
export default DropdownArrow;
