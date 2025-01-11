import React, { useState } from "react";

export const MenuActionItem = ({ icon, active = false }) => {
  const [x, y, activeX, activeY] = icon;
  const [menuActionActive, setMenuActionActive] = useState(active);
  const handleMenuClick = () => {
    setMenuActionActive(!menuActionActive);
  };
  return (
    <div
      className={active ? "menuActionItem active" : "menuActionItem"}
      onClick={handleMenuClick}
    >
      {x && y ? (
        menuActionActive == false ? (
          <div className="menuActionItem-icon">
            <svg viewBox={[x, y, 40, 40]} width="30">
              <image href="./public/icons-big.svg"></image>
            </svg>
          </div>
        ) : null
      ) : null}

      {activeX && activeY ? (
        menuActionActive == true ? (
          <div className="menuActionItem-icon">
            <svg viewBox={[activeX, activeY, 40, 40]} width="30">
              <image href="./public/icons-big.svg"></image>
            </svg>
          </div>
        ) : null
      ) : null}
    </div>
  );
};
