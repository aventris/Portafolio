import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faCircleInfo,
  faFolder,
  faBars,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import "@styles/Sidebar.scss";

const SidebarSubMenu = ({ items, name, icon, large }) => {
  const [subMenu, setSubmenu] = useState(false);
  const ref = useRef(null);

  const toggleSubMenu = () => {
    setSubmenu(!subMenu);
  };

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
      <div className={`icon_link ${subMenu ? "active" : ""}`}>
        <a>
          <i>{icon}</i>
          {large && <span className="link_name">{name}</span>}
        </a>
        {large && (
          <i className={`arrow-icon ${subMenu ? "open" : ""}`}>
            <FontAwesomeIcon icon={faAngleDown} />
          </i>
        )}
      </div>
      <ul className={`sub-menu ${subMenu ? " visible" : ""}`}>
        {!large && (
          <li>
            <span>Projects</span>
          </li>
        )}
        {items.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`} className="link_name">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const SidebarItem = ({ icon, name, large }) => {
  return (
    <li>
      <a href={`#${name.toLowerCase()}`}>
        <i>{icon}</i>
        <span className="link_name">{name}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches && sidebarOpen === true) {
      toggleSidebar();
    }
  }, [pathname]);

  return (
    <div className={`sidebar ${!sidebarOpen ? "closed" : ""}`}>
      <div className="sidebar-title" onClick={toggleSidebar}>
        <i>
          <FontAwesomeIcon icon={faBars} />
        </i>
        {sidebarOpen && <span>Portfolio</span>}
      </div>
      <hr />
      <ul className="nav-links">
        <SidebarItem
          name={"Home"}
          icon={<FontAwesomeIcon icon={faHouse} />}
          large={sidebarOpen}
        />
        <SidebarItem
          name={"About"}
          icon={<FontAwesomeIcon icon={faCircleInfo} />}
          large={sidebarOpen}
        />
        <SidebarSubMenu
          name={"Projects"}
          icon={<FontAwesomeIcon icon={faFolder} />}
          items={["React", "Angular"]}
          large={sidebarOpen}
        />

        <SidebarItem
          name="Contact"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          large={sidebarOpen}
        />
      </ul>
      <div className="sidebar-footer">
        <span>© 2023 Ismael Pérez Ortega</span>
        <br />
        {sidebarOpen && <span>www.ismael-po.com</span>}
      </div>
    </div>
  );
};

export default Sidebar;
