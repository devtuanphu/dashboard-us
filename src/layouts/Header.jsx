import { useState, useEffect } from "react";
import { Menu, Dropdown, Input, Button, Avatar, Drawer } from "antd";
import { SettingOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import Home from "../page/Home";
import iconRight from "../assets/images/iconRight.svg";
import iconUp from "../assets/images/iconUp.svg";
import Sidebar from "./Sidebar";

const Header = ({ onSelect }) => {
  const [activeKey, setActiveKey] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelect = (component) => {
    setIsDrawerVisible(false);
    onSelect(component);
  };

  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      content: <Home />,
    },
    {
      key: "community",
      label: "Community",
      content: <div>Community Content</div>,
    },
    { key: "reports", label: "Reports", content: <div>Reports Content</div> },
  ];

  const accountMenu = (
    <Menu className="border-[1px] border-[#c8c8c8] !bg-[#3b424f]">
      <span className="ml-3 text-lg font-bold text-white">Account</span>
      <Menu.Item key="1aa">
        <span className="text-white">Info</span>
      </Menu.Item>
      <Menu.Item key="2sd">
        <span className="text-white">TOS and Privacy</span>
      </Menu.Item>
      <Menu.Item key="3xi" className="border-t border-white !rounded-none">
        <span className="text-white">Logout</span>
      </Menu.Item>
    </Menu>
  );

  const handleMenuClick = (item) => {
    setActiveKey(item.key);
    onSelect(item.content);
  };

  return (
    <div className="flex justify-between items-center px-2 py-4 mb-4 bg-[#3b424f59] text-white rounded-2xl  border-[#434343] border-[1px]">
      <div className="flex items-center gap-4">
        {isMobileView ? (
          <Button
            icon={<MenuOutlined className="font-bold" />}
            className="text-white bg-transparent border-none hover:text-gray-400"
            onClick={() => setIsDrawerVisible(true)}
          />
        ) : (
          <Button
            icon={<MenuOutlined className="font-bold" />}
            className="text-white bg-transparent border-none hover:text-gray-400"
          />
        )}

        <Drawer
          placement="left"
          closable={true}
          onClose={() => setIsDrawerVisible(false)}
          visible={isDrawerVisible}
        >
          <Sidebar onSelect={handleSelect} />
        </Drawer>

        <Input
          placeholder="Search"
          className="text-gray-300 bg-gray-800 border-[#434343] border-[1px] w-24 placeholder-white placeholder:font-medium hover:bg-transparent placeholder:underline placeholder:text-lg placeholder:text-end"
          style={{ borderRadius: "4px" }}
        />

        <div className="hidden tablet:flex gap-6 text-[#1a1a1a]">
          {menuItems.map((item) => (
            <span
              key={item.key}
              className={`cursor-pointer ${
                activeKey === item.key
                  ? "text-[#1a1a1a] underline font-bold"
                  : "hover:text-[#1a1a1a] font-semibold"
              }`}
              onClick={() => handleMenuClick(item)}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <BellOutlined className="text-xl cursor-pointer hover:text-black text-black text-[20px]" />

        <Dropdown
          overlay={accountMenu}
          trigger={["click"]}
          onOpenChange={(open) => setIsDropdownOpen(open)}
        >
          <div className="flex items-center cursor-pointer">
            <SettingOutlined className="text-xl cursor-pointer hover:text-black text-black text-[20px]" />
            <span className="mx-2 font-bold">Setting</span>
            {isDropdownOpen ? (
              <Avatar src={iconUp} size={24} className="text-black" />
            ) : (
              <Avatar src={iconRight} size={24} className="text-black" />
            )}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Header;
