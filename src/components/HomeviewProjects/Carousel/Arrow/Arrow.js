import React from "react";
import styled from "styled-components"

const arrowImage="./Images/HomeProjects/arrow.png"

const ArrowWrapper=styled.div`
    width:10vw;
    display:flex;
    justify-content:center;
    align-items:center
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
    const {dir, setWatching, watching}=props
    console.log(watching, dir)
  return (
    <ArrowWrapper>
        {watching===0&&dir==="previous"?<div/>:watching===3&&dir==="next"?<div/>:<Image dir={dir} onClick={()=>{setWatching()}}/>}
    </ArrowWrapper>
  );
}

export {Arrow};