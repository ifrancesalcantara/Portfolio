import React from "react";
import {ProjectWrapper, Title, Image, ImageWrapper, Link, Technologies, MainText, MediaWrapper} from "./styles"
import {projectInfo, getTechnologies, getMediaImgs} from "./projectData"

function Project(props){
    const {name, index, unfold}=props
  return (
    <ProjectWrapper index={index} name={name} unfold={unfold}>
        <div>
          <Title name={name}>{formatTitle(name)}</Title>
          <Technologies>
            {getTechnologies(projectInfo[name].techs)}
          </Technologies>
          <Link title={"Project view under development"}>More details</Link>
          {name==="portfolio"?null:<Link href={projectInfo[name].link}>Go to site</Link>}
        </div>
        <div>
          <MediaWrapper>{getMediaImgs(projectInfo[name].media)}</MediaWrapper>
          <ImageWrapper unfold={unfold}>
            <Image title={"Project view under development"} src={projectInfo[name].img} name={name}/>
          </ImageWrapper>
          <MainText>{projectInfo[name].mainText}</MainText>
        </div> 
    </ProjectWrapper>
  );
}

function formatTitle(title){
  const result = title.split("");result[0]=result[0].toUpperCase();return result.join("")
}

export {Project};