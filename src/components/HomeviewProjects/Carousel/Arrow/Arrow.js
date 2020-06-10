import React from "react";
import styled from "styled-components"

const arrowImage="./Images/HomeProjects/arrow.png"

const ArrowWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:10vw;
    position:relative;
    top:${({unfold})=>unfold-100+"vh"};
    transition: .8s ease-out .2s;
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
    const {dir, setIndex, index, name, unfold}=props
  return (
    <ArrowWrapper name={name} onClick={()=>setIndex()} unfold={unfold}>
        {index===0&&dir==="previous"?<div/>:index===3&&dir==="next"?<div/>:<Image dir={dir}/>}
    </ArrowWrapper>
  );
}

export {Arrow};