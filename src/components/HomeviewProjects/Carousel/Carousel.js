import React, {useState} from "react";
import {CarouselWrapper, ProjectWrapper, Project} from "./styles"
import {Arrow} from "./Arrow/Arrow"

function Carousel(){
  const [watching, setWatching] = useState(0)
  return (
    <CarouselWrapper>
        <Arrow dir={"previous"} setWatching={()=>setWatching(getWatching(watching, "prev"))} watching={watching}/>
        <ProjectWrapper>
            <Project watching={watching}>Project1</Project>
            <Project watching={watching}>Project2</Project>
            <Project watching={watching}>Project3</Project>
            <Project watching={watching}>Project4</Project>
        </ProjectWrapper>
        <Arrow dir={"next"} setWatching={()=>setWatching(getWatching(watching, "next"))} watching={watching}/>
    </CarouselWrapper>
  );
}

function getWatching(watching, dir){
    if(dir==="next"){
        if(watching+1>3){return 3}return watching+1
    } else {
        if(watching-1<0){return 0}return watching-1
    }
}

export {Carousel};
