import React from "react";
import {ProjectWrapper, Title, Image, ImageWrapper, Link, Technologies, MainText, MediaWrapper, Subtitle} from "./styles"
import {projectInfo, getTechnologies, getMediaImgs} from "./projectData"

function Project(props){
    const {name, index, unfold}=props
    const {subtitle, techs, link,media,img,mainText,gitHub}=projectInfo[name]
  return (
    <ProjectWrapper index={index} name={name} unfold={unfold}>
        <div>
          <Title name={name}>{formatTitle(name)}</Title>
          <Subtitle name={name}>{subtitle}</Subtitle>
          <Technologies>
            {getTechnologies(techs)}
          </Technologies>
          {/*<Link title={"Project view under development"}>More details</Link>*/}
          {gitHub.frontend?<Link href={gitHub.frontend}>Frontend</Link>:null}
          {gitHub.backend?<Link href={gitHub.frontend}>Backend</Link>:null}
          {gitHub.repository?<Link href={gitHub.frontend}>Repository</Link>:null}
          {name==="portfolio"?null:<Link href={link}>Go to site</Link>}
        </div>
        <div>
          <MediaWrapper>{getMediaImgs(media)}</MediaWrapper>
          <ImageWrapper unfold={unfold}>
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