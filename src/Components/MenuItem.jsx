import React, { useState } from "react";

export const MenuItem = ({ icon, title, active = false }) => {
  const [x, y, activeX, activeY] = icon;
  const [menuActive, setMenuActive] = useState(active);
  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div
      className={active ? "menuItem active" : "menuItem"}
      onClick={handleMenuClick}
    >
      {x && y ? (
        menuActive == false ? (
          <div className="menuItem-icon">
            <svg viewBox={[x, y, 40, 40]} width="30">
              <image href="./public/icons-big.svg"></image>
            </svg>
          </div>
        ) : null
      ) : null}

      {activeX && activeY ? (
        menuActive == true ? (
          <div className="menuItem-icon">
            <svg viewBox={[activeX, activeY, 40, 40]} width="30">
              <image href="./public/icons-big.svg"></image>
            </svg>
          </div>
        ) : null
      ) : null}
      <div className="menuItem-title">{title}</div>
    </div>
  );
};
