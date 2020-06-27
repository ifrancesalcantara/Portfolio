import React, {useState, useEffect} from "react";

import projectService from "../../../lib/services/project-service"

import {ProjectWrapper, CarouselWrapper} from "./styles"
import {Arrow} from "./Arrow/Arrow"
import {Project} from "./Project/Project"
import {UnfoldWrapper} from "../../Common/Common"

function Carousel(props){
  const {unfold}=props
  const [index, setIndex] = useState(0)
  const [projectsData, setProjectsData] = useState(null)
  const [names/*, sortNames*/] = useState(["portfolio","paintapop","hoodie","bombard"])
  useEffect(()=>{
    async function getProjects(){
      setProjectsData(await projectService.getProjects())
    }
    getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <UnfoldWrapper unfold={unfold} height={42}>
        <CarouselWrapper projectData={getProject(projectsData, names[index])}>
            <Arrow dir="previous" setIndex={setIndex} index={index} name={names[index]}/>
            <ProjectWrapper>
                <Project index={index} name={names[0]} projectData={getProject(projectsData, names[0])}/>
                <Project index={index} name={names[1]} projectData={getProject(projectsData, names[1])}/>
                <Project index={index} name={names[2]} projectData={getProject(projectsData, names[2])}/>
                <Project index={index} name={names[3]} projectData={getProject(projectsData, names[3])}/>
            </ProjectWrapper>
            <Arrow dir="next" setIndex={setIndex} index={index} name={names[index]}/>
        </CarouselWrapper>
    </UnfoldWrapper>
  );
}

function getProject(projectArr, name){
  if(projectArr){
    return projectArr.find(projObj=>projObj.name===name)
  } return null
}

export {Carousel};
