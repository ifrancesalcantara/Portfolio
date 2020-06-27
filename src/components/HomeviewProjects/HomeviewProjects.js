import React, {useState} from "react";
import {Title} from "../Common/Title/Title.js"
import {Carousel} from "./Carousel/Carousel.js"
import styled from "styled-components"

const HomeSectionWrapper=styled.div`
`

function HomeViewProjects(){
  const [unfold, setUnfold]=useState(100)
  return (
    <HomeSectionWrapper unfold={unfold} id="projectsSection">
        <Title title="My Projects" unfold={unfold} setUnfold={setUnfold}/>
        <Carousel unfold={unfold}/>
    </HomeSectionWrapper>
  );
}

export {HomeViewProjects};
