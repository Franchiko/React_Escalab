import React from 'react'
import { Pets } from "./array";
import MenuItems from "../MenuItems/MenuItems";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      {Pets.map((difficulty, idx) => (
        <MenuItems
          key={idx}
          isSelected={props.difficulty === difficulty}
          onClick={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
  );
};

export default MenuList;