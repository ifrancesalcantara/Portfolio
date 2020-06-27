import React from "react";

import {ProjectWrapper, ProjectCard, Title, Image, ImageWrapper, Link, Technologies, MainText, MediaWrapper, Subtitle} from "./styles"
import {LoadingProject} from "./Loading/LoadingProject"
import {getTechnologies, getMediaImgs} from "./compGenerators"
import {emptyProjectData} from "../../../../lib/staticData/deconstructionDummy/emptyProjectData"


function Project(props){
    const {name, index, unfold, projectData}=props
    const {subtitle,techs,link,media,img,mainText,gitHub}=projectData?projectData:emptyProjectData
    const {frontend,backend,repository}=gitHub
  return (
    <ProjectWrapper index={index} name={name} unfold={unfold}>
      {
        !projectData?<LoadingProject/>:
        <ProjectCard>
          <div>
            <Title name={name}>{formatTitle(name)}</Title>
            <Subtitle name={name}>{subtitle}</Subtitle>
            <Technologies>{techs?getTechnologies(techs):null}</Technologies>
            {frontend?<Link href={frontend}>Frontend</Link>:null}
            {backend?<Link href={frontend}>Backend</Link>:null}
            {repository?<Link href={frontend}>Repository</Link>:null}
            {!(name==="portfolio")?<Link href={link}>Deploy</Link>:null}
          </div>

          <div>
            <MediaWrapper>{media?getMediaImgs(media):null}</MediaWrapper>
            <ImageWrapper>
              <Image title="Project view under development" src={img} name={name}/>
            </ImageWrapper>
            <MainText>{mainText}</MainText>
          </div> 
        </ProjectCard>
      }
    </ProjectWrapper>
  );
}

function formatTitle(title){
  const result = title.split("");result[0]=result[0].toUpperCase();return result.join("")
}

export {Project};