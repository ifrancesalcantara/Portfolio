import React, {useState} from "react";
import {Title} from "../Common/Title/Title.js"
import {Carousel} from "./Carousel/Carousel.js"

function HomeViewProjects(){
  const [unfold, setUnfold]=useState(100)
  return (
    <div>
        <Title title={"My Projects"} unfold={unfold} setUnfold={setUnfold}/>
        <Carousel unfold={unfold}/>
    </div>
  );
}

export default HomeViewProjects;
