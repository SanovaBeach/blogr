import React, { useState } from "react";
import "./submenu.scss";

const Submenu = ({ item }) => {
  const [dropDown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(!dropDown);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className="Submenu" onClick={onMouseEnter}>
      <li className="Navbar_item">
        {item.title}
        {item.subnav && dropDown ? item.iconClose : item.iconOpen}
      </li>
      {dropDown && (
        <div className="Submenu_container" onMouseLeave={onMouseLeave}>
          {dropDown &&
            item.subnav.map((item, index) => {
              return (
                <li className="Submenu_subItem" key={index}>
                  {item}
                </li>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Submenu;
