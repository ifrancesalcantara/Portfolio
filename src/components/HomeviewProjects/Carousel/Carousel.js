import React, {useState} from "react";
import {ProjectWrapper, CarouselWrapper} from "./styles"
import {Arrow} from "./Arrow/Arrow"
import {Project} from "./Project/Project"
import {UnfoldWrapper} from "../../Common/Common"

function Carousel(props){
  const {unfold}=props
  const [index, setIndex] = useState(0)
  const [names/*, sortNames*/] = useState(["portfolio","paintapop","hoodie","bombard"])
  return (
    <UnfoldWrapper unfold={unfold}>
        <CarouselWrapper unfold={unfold} name={names[index]}>
            <Arrow dir={"previous"} setIndex={()=>setIndex(getIndex(index, "prev"))} index={index} name={names[index]} unfold={unfold}/>
            <ProjectWrapper>
                <Project index={index} name={names[0]} unfold={unfold}/>
                <Project index={index} name={names[1]} unfold={unfold}/>
                <Project index={index} name={names[2]} unfold={unfold}/>
                <Project index={index} name={names[3]} unfold={unfold}/>
            </ProjectWrapper>
            <Arrow dir={"next"} setIndex={()=>setIndex(getIndex(index, "next"))} index={index} name={names[index]} unfold={unfold}/>
        </CarouselWrapper>
    </UnfoldWrapper>
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
