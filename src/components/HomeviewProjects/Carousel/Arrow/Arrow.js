import React from "react";
import styled from "styled-components"

const arrowImage="./Images/HomeProjects/arrow.png"

//const border="solid lightgray .1vw"
//const darkerBorder="solid gray .1vw"

const ArrowWrapper=styled.div`
    width:10vw;
    display:flex;
    justify-content:center;
    align-items:center;
    background:${({theme, name})=>name==="portfolio"?theme.primary_transparent2:theme.projects[name].color};
    transition:1.1s;
`

const Image=styled.div`
    background-image:url(${arrowImage});
    background-size: contain;
    background-repeat: no-repeat;
    width:4vw;
    height:4vw;
    transform:rotate(${({dir})=>((dir==="next"?90:270)+"deg")});
`

function Arrow(props){
    const {dir, setIndex, index, name}=props
  return (
    <ArrowWrapper name={name} onClick={()=>{setIndex()}}>
        {index===0&&dir==="previous"?<div/>:index===3&&dir==="next"?<div/>:<Image dir={dir}/>}
    </ArrowWrapper>
  );
}

export {Arrow};