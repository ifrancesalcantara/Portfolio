import React from "react";
import styled from "styled-components"

const arrowImage="./Images/HomeProjects/arrow2.png"

const TitleWrapper=styled.div`
    color:black;
    font-size:8vw;
    font-family:${({theme})=>theme.fonts.first};
    height:11vw;
    background:white;
    display:flex;
    align-items:center;
`

const ProtectiveScreen=styled.div`
    z-index:9998;
    position:absolute;
    background:rgba(0,0,0,0);
    height:11vw;
    width:100%;
`

const Image=styled.div`
    width:6vw;
    height:6vw;
    background-image:url(${arrowImage});
    background-size: contain;
    background-repeat: no-repeat;
    transform:rotate(${({unfold})=>unfold?"180deg":"90deg"});
    transition:.05s ease-in;
    margin-left:2vw;
`

function Title(props){
  const {unfold, setUnfold}=props  
  return (
    <TitleWrapper onClick={()=>setUnfold(fullToggle(unfold))}>
        <ProtectiveScreen/>
        <Image unfold={unfold}/>
        <p> My Projects</p>
    </TitleWrapper>
  );
}

function fullToggle(unfold){
    if(unfold)return 0; return 100
}

export {Title};
