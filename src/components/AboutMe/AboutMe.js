import React, {useState} from "react";
import {Subtitle} from "./styles"
import {Title} from "../Common/Title/Title.js"
import {UnfoldWrapper} from "../Common/Common"

export function AboutMe(){
  const [unfold, setUnfold]=useState(100)
  return (
    <div>
        <Title title={"About Me"} unfold={unfold} setUnfold={setUnfold}/>
        <UnfoldWrapper unfold={unfold}>
          <Subtitle>Background</Subtitle>
        </UnfoldWrapper>
    </div>
  );
}
