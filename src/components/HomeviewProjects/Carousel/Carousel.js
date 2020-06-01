import React, {useState} from "react";
import {CarouselWrapper, ProjectWrapper} from "./styles"
import {Arrow} from "./Arrow/Arrow"
import {Project} from "./Project/Project"

function Carousel(props){
  const {unfold}=props
  const [index, setIndex] = useState(0)
  const [names/*, sortNames*/] = useState(["portfolio","paintapop","hoodie","bombard"])
  return (
    <CarouselWrapper unfold={unfold}>
        <Arrow dir={"previous"} setIndex={()=>setIndex(getIndex(index, "prev"))} index={index} name={names[index]}/>
        <ProjectWrapper>
            <Project index={index} name={names[0]}/>
            <Project index={index} name={names[1]}/>
            <Project index={index} name={names[2]}/>
            <Project index={index} name={names[3]}/>
        </ProjectWrapper>
        <Arrow dir={"next"} setIndex={()=>setIndex(getIndex(index, "next"))} index={index} name={names[index]}/>
    </CarouselWrapper>
  );
}

function getIndex(index, dir){
    if(dir==="next"){
        if(index+1>3){return 3}return index+1
    } else {
        if(index-1<0){return 0}return index-1
    }
}

export {Carousel};
