import React, {useEffect, useState} from "react";

import projectService from "../../../../lib/services/project-service"

import {ProjectWrapper, Title, Image, ImageWrapper, Link, Technologies, MainText, MediaWrapper, Subtitle, LoadingGif} from "./styles"
import {getTechnologies, getMediaImgs} from "./compGenerators"
import {emptyProjectData} from "../../../../lib/staticData/deconstructionDummy/emptyProjectData"


function Project(props){
    const {name, index, unfold}=props
    const [projectData, setProjectData] = useState(null)
    const {subtitle,techs,link,media,img,mainText,gitHub}=projectData?projectData:emptyProjectData
    const {frontend,backend,repository}=gitHub
    useEffect(()=>{
      async function getProject(name){
        const project=await projectService.getProject(name)
        setProjectData(project)
      }
      getProject(name)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <ProjectWrapper index={index} name={name} unfold={unfold}>
        <div>
          <Title name={name}>{formatTitle(name)}</Title>
          <Subtitle name={name}>{subtitle}</Subtitle>
          <Technologies>{techs?getTechnologies(techs):null}</Technologies>
          {gitHub?frontend?<Link href={frontend}>Frontend</Link>:null:LoadingGif}
          {gitHub?backend?<Link href={frontend}>Backend</Link>:null:LoadingGif}
          {gitHub?repository?<Link href={frontend}>Repository</Link>:null:LoadingGif}
          {!name==="portfolio"?<Link href={link}>Go to site</Link>:null}
        </div>

        <div>
          <MediaWrapper>{media?getMediaImgs(media):null}</MediaWrapper>
          <ImageWrapper>
            <Image title={"Project view under development"} src={img} name={name}/>
          </ImageWrapper>
          <MainText>{mainText}</MainText>
        </div> 
    </ProjectWrapper>
  );
}

function formatTitle(title){
  const result = title.split("");result[0]=result[0].toUpperCase();return result.join("")
}

export {Project};