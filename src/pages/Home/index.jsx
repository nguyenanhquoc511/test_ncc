import React from "react";
import "./style.scss";
import logoNCC from "../../assets/images/logoNCC.jpg";
import htmlIcon from "../../assets/images/html-icon.jpg";
import cssIcon from "../../assets/images/css-icon.jpg";
import urlIcon from "../../assets/images/url-icon.jpg";
import { Item } from "../../components";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const itemListData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      img: cssIcon,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      img: htmlIcon,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      img: urlIcon,
    },
  ];

  const renderListItem = () => {
    let xhmtl = [];
    itemListData.forEach((element) => {
      xhmtl.push(<Item key={element.id} itemData={element} />);
    });
    return xhmtl;
  };

  return (
    <div className="home-container">
      <img className="home-container__logo" src={logoNCC} alt="logo" />
      <div className="home-container__group-1">
        <div className="home-container__group-1__bg">
          <div className="home-container__group-1__bg__title">
            Lorem ipsum dolor sit asmet?
          </div>
          <p className="home-container__group-1__bg__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
      </div>
      <div className="home-container__group-2">{renderListItem()}</div>
      <Footer />
    </div>
  );
};
