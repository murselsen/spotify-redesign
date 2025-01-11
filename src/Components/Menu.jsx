import React from "react";
import "./Menu.css";
import "./MenuItem.css";
import { MenuItem } from "./MenuItem";
import { MenuActionItem } from "./MenuActionItem";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-left">
        <div className="menu-list">
          <MenuItem
            icon={[434, 262, 491, 262]}
            title="Home"
            active={false}
            width={262}
          />
          <MenuItem icon={[434, 262, 491, 262]} title="Home" active={false} />
          <MenuItem icon={[434, 262, 491, 262]} title="Home" active={false} />
          <MenuItem icon={[434, 262, 491, 262]} title="Home" active={false} />
        </div>
      </div>
      <div className="menu-right">
        <div className="menu-list">
          <MenuActionItem icon={[542, 205, 491, 262]} />
          <MenuActionItem icon={[90, 548, 148, 548]} />
          <MenuActionItem icon={[434, 205, 491, 205]} />
          <MenuActionItem icon={[542, 205, 491, 262]} />
        </div>
      </div>
    </div>
  );
};

export { Menu };
