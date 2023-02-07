import React from "react";
import "./style.scss";

export const Item = (props) => {
  var topLeft = {
    position: "absolute",
    top: "50px",
    left: "0",
    width: "128px",
    height: "128px",
  };
  return (
    <div className="item-container">
      <div className="item-container__title">{props.itemData.title}</div>
      <div className="item-container__inner">
        <img
          className="item-container__logo"
          src={props.itemData.img}
          alt="logo"
          style={topLeft}
        />
        {props.itemData.content}
      </div>
    </div>
  );
};
