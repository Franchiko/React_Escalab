import { useState } from "react";
import s from "./style.module.css";

const MenuItems = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const activate = () => {
    setIsHover(true);
  };

  const deactivate = () => {
    setIsHover(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      className={s.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
       {props.difficulty}
    </div>
  );
};

export default MenuItems;