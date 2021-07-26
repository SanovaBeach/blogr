import React, { useState } from "react";
import { icons } from "react-icons/lib";
import "./mobileMenu.scss";

const MobileMenu = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMouseLeave = () => setIsOpen(false);

  return (
    <div className="MobileMenu">
      <div className="MobileMenu_item" onClick={() => setIsOpen(!isOpen)}>
        {item.title}{" "}
        <span className="MobileMenu_logo">
          {isOpen ? item.iconClose : item.iconOpen}
        </span>
      </div>
      {isOpen && (
        <ul className="MobileMenu_links" onMouseLeave={onMouseLeave}>
          {isOpen &&
            item.subnav.map((item, index) => {
              return (
                <li className="MobileMenu_listItem" key={index}>
                  {item}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
