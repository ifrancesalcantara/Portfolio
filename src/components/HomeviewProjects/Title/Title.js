import React from "react";
import styled from "styled-components"

const TitleWrapper=styled.div`
    color:black;
    font-size:8vw;
    font-family:${({theme})=>theme.fonts.first};
    height:20vh;
`

function Title(){
  return (
    <TitleWrapper>
        <p>> My Projects</p>
    </TitleWrapper>
  );
}

export {Title};
