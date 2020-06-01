import React, {useState} from "react";
import {Title} from "./Title/Title.js"
import {Carousel} from "./Carousel/Carousel.js"
import styled from "styled-components"

const Wrapper=styled.div`
`

function HomeViewProjects(){
  const [unfold, setUnfold]=useState(100)
  return (
    <Wrapper unfold={unfold}>
        <Title unfold={unfold} setUnfold={setUnfold}/>
        <Carousel unfold={unfold}/>
    </Wrapper>
  );
}

export default HomeViewProjects;
