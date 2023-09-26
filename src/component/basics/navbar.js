import React from "react";
import Menu from "./menuApi";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <div>
      <div className="nav">
        <div className="nav-item">
          {menuList.map((curEle) => {
            return (
              <button
                className="nav-bttn"
                onClick={() => filterItem(curEle)}
              >
                {curEle}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar; //this nav bar first letter should always be capital to recognise it as react component
