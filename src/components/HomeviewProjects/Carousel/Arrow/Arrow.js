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
    function getIndex(index, dir){
      if(dir==="next"){
          if(index+1>3){return 3}return index+1
      } else {
          if(index-1<0){return 0}return index-1
      }
    }
  return (
    <ArrowWrapper name={name} onClick={()=>setIndex(getIndex(index,dir))} unfold={unfold}>
        {(index===0&&dir==="previous")||(index===3&&dir==="next")?null:
          <Image dir={dir}/>
        }
    </ArrowWrapper>
  );
}

export {Arrow};