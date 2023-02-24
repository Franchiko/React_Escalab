import React from 'react'
import { useState } from "react";
import Display from "./components/Display/Display";
import MenuList from "./components/MenuList/MenuList";
import style from "./style.module.css";


function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");


  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };


  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "3rem", color: "white", fontSize: "3rem"}}>Elige tu mascota favorita</h1>
      <div className={style.area}>
        <MenuList 
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
        <Display difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;

