import React from "react";
import {Title} from "./Title/Title.js"
import {Carousel} from "./Carousel/Carousel.js"
import styled from "styled-components"

const Wrapper=styled.div`
`

function HomeViewProjects(){
  return (
    <Wrapper>
        <Title/>
        <Carousel/>
    </Wrapper>
  );
}

export default HomeViewProjects;
