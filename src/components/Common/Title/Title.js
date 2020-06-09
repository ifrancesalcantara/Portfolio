import React from "react";
import styled from "styled-components"
import {ProtectiveScreen} from "../Common"

const arrowImage="./Images/HomeProjects/arrow2.png"

const TitleWrapper=styled.div`
    color:${({theme})=>theme.text};
    font-size:8vw;
    height:11vw;
    background:${({theme})=>theme.primary_transparent};
    display:flex;
    align-items:center;
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
  const {unfold, setUnfold, title}=props  
  return (
    <TitleWrapper onClick={()=>setUnfold(fullToggle(unfold))}>
        <ProtectiveScreen height={"11vh"}/>
        <Image unfold={unfold}/>
        <p> {title}</p>
    </TitleWrapper>
  );
}

function fullToggle(unfold){
    if(unfold)return 0; return 100
}

export {Title};
