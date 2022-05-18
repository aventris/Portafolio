import React, { useState, useEffect, useRef } from "react";
import { BsFillCollectionFill, BsGrid1X2Fill } from "react-icons/bs";
import { FaReact, FaBook } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import "@styles/Demo.scss";

const aux = ["Web design", "Card design", "Login form"];

const SidebarSubMenu = ({ items, name, icon, large }) => {
  const [subMenu, setSubmenu] = useState(false);
  const toggleSubMenu = () => {
    setSubmenu(!subMenu);
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSubmenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <li onClick={toggleSubMenu} ref={ref}>
      <div className="icon_link">
        <a>
          <i>{icon}</i>
          {large && <span className="link_name">{name}</span>}
        </a>
        {large && (
          <i className={`arrow-icon ${subMenu ? "open" : ""}`}>
            <BiChevronDown />
          </i>
        )}
      </div>
      <ul className={`sub-menu ${subMenu ? " visible" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>
            <a className="link_name">{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const SidebarItem = ({ icon, name, large }) => {
  return (
    <li>
      <a>
        <i>{icon}</i>
        {large && <span className="link_name">{name}</span>}
      </a>
    </li>
  );
};

const Demo = () => {
  /* Open shrink and expand sidebar handler */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="demo">
      <div className={`sidebar ${!sidebarOpen ? "close" : ""}`}>
        <div className="logo-details" onClick={toggleSidebar}>
          <i>
            <FaReact />
          </i>
          <span>Demo Sidebar</span>
        </div>
        <hr />
        <ul className="nav-links">
          <SidebarItem
            name={"Dashboard"}
            icon={<BsGrid1X2Fill />}
            large={sidebarOpen}
          />
          <SidebarSubMenu
            name={"Category"}
            items={["Web design", "Card design", "Login form"]}
            icon={<BsFillCollectionFill />}
            large={sidebarOpen}
          />
          <SidebarSubMenu
            items={["Uno", "Dos", "Tres"]}
            name="Test"
            icon={<FaBook />}
            large={sidebarOpen}
          />
        </ul>
      </div>
    </div>
  );
};

export default Demo;
