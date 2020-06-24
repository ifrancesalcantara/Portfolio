import React from "react";
import styled from "styled-components"

const arrowImage="./Images/HomeProjects/arrow2.png"

const TitleWrapper=styled.div`
    color:${({theme})=>theme.text};
    font-size:4vw;
    height:6vw;
    background:${({theme})=>theme.primary_transparent};
    display:flex;
    align-items:center;
    z-index:9998;
    border-bottom:.1vw solid gray;
`

const Image=styled.div`
    width:3vw;
    height:3vw;
    background-image:url(${arrowImage});
    background-size: contain;
    background-repeat: no-repeat;
    transform:rotate(${({unfold})=>unfold?"180deg":"90deg"});
    transition:.05s ease-in;
    margin:0 1vw;
`

const ProtectiveScreen=styled.div`
    z-index:9999;
    position:absolute;
    background:rgba(0,0,0,0);
    height:6vw;
    width:100%;
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
