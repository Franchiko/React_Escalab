import s from "./style.module.css";

const Display = (props) => {
  const { difficulty } = props;
  console.log(props);
  return (
    <div className={s.container}>
      {props.difficulty
        ? `Mi mascota es: ${difficulty}`
        : "No he elegido ninguna"}
    </div>
  );
};

export default Display;