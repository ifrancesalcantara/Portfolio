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
    <UnfoldWrapper unfold={unfold} height={42}>
        <CarouselWrapper name={names[index]}>
            <Arrow dir={"previous"} setIndex={setIndex} index={index} name={names[index]}/>
            <ProjectWrapper>
                <Project index={index} name={names[0]}/>
                <Project index={index} name={names[1]}/>
                <Project index={index} name={names[2]}/>
                <Project index={index} name={names[3]}/>
            </ProjectWrapper>
            <Arrow dir={"next"} setIndex={setIndex} index={index} name={names[index]}/>
        </CarouselWrapper>
    </UnfoldWrapper>
  );
}

export {Carousel};
