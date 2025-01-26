import { useState } from "react";
import { Avatar, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import imageLogo from "../assets/images/logo.png";
import iconRight from "../assets/images/iconRight.svg";
import iconUp from "../assets/images/iconUp.svg";
import lock from "../assets/images/lock.svg";
import BasicScanner from "../page/BasicScanner";

const { SubMenu } = Menu;

const sidebarData = [
  {
    id: 77,
    category: "Scanning",
    children: [
      {
        id: 79,
        name: "Basic Scanner",
        component: <BasicScanner />,
      },
      {
        id: 71,
        name: "Advanced Scanner",
        component: <div>Advanced Scanner Content</div>,
        security: true,
      },
    ],
  },
  {
    id: 87,
    category: "Threat Intelligence",

    children: [
      {
        id: 66,
        name: "Global Threat Map",
        component: <div>Global Threat Map Content</div>,
      },
      {
        id: 83,
        name: "Statistics and Reports",
        component: <div>Statistics and Reports Content</div>,
      },
      {
        id: 82,
        name: "Reverse Lookup Service",
        component: <div>Reverse Lookup Service Content</div>,
        security: true,
      },
      {
        id: 81,
        name: "Information Removal",
        component: <div>Information Removal Content</div>,
        security: true,
      },
    ],
  },
  {
    id: 99,
    category: "Centralized Tools",

    children: [
      {
        id: 90,
        name: "Password Strength Checker",
        component: <div>Password Strength Checker Content</div>,
      },
      {
        id: 91,
        name: "Cyber Toolkit",
        component: <div>Cyber Toolkit Content</div>,
      },
      {
        id: 92,
        name: "Threat Remediation",
        component: <div>Threat Remediation Content</div>,
        security: true,
      },
      {
        name: "Malware Sandbox",
        component: <div>Malware Sandbox Content</div>,
        security: true,
      },
    ],
  },
];

export default function Sidebar({ onSelect }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item.name);
    onSelect(item.component);
  };

  return (
    <div className="w-64 h-max min-h-full bg-[#333] text-white rounded-3xl">
      <div className="flex items-center justify-between px-4 w-full border-b border-[#fff]">
        <Avatar size={54} src={imageLogo} />
        <div className="relative min-w-[100px]">
          <p className="text-2xl font-bold mb-2 text-[#1a1a1a]">Protecly</p>
          <span className="text-[8px] text-[#959595] absolute bottom-0 left-0">
            Cybersecurity Centralized
          </span>
        </div>
      </div>
      <div className="mb-8 text-center mt-6">
        <Avatar size={128} icon={<UserOutlined />} />
        <div className="text-white text-[36px] font-bold">[username]</div>
        <div className="text-sm text-gray-500 font-bold">
          [Free/Premium] Plan
        </div>
      </div>
      <div className="h-full">
        <Menu
          mode="inline"
          selectedKeys={[activeItem]}
          className="text-white bg-transparent px-4"
          expandIcon={({ isOpen }) =>
            isOpen ? (
              <Avatar src={iconUp} size={24} />
            ) : (
              <Avatar src={iconRight} size={24} />
            )
          }
        >
          {sidebarData.map((category, index) => (
            <SubMenu
              key={index + category.id}
              title={category.category}
              style={{ color: "#fff" }}
              className="px-0 mb-6"
            >
              {category.children.map((item, idx) => (
                <Menu.Item
                  key={idx + item.id}
                  onClick={() => handleClick(item)}
                  style={{
                    backgroundColor:
                      activeItem === item.name ? "#3a3a45" : "inherit",
                    color: "#fff",
                    paddingLeft: "0px",
                    fontWeight: "bold",
                    borderRadius: "24px",
                  }}
                >
                  <div className="w-[16px] h-[16px]">
                    {item.security && <img src={lock} size={24} />}
                  </div>
                  {item.name}
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
