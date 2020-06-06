import React from "react";
import {ProjectWrapper, Title, ImageWrapper, Link, Technologies, MainText} from "./styles"
import {projectInfo, getTechnologies} from "./projectData"

function Project(props){
    const {name, index}=props
  return (
    <ProjectWrapper index={index} name={name}>
        <div>
          <Title name={name}>{formatTitle(name)}</Title>
          <Technologies>
            {getTechnologies(projectInfo[name].techs)}
          </Technologies>
          {/*{name==="portfolio"?null:<Link href={projectInfo[name].link}>Go to site</Link>}*/}
          <Link>More details</Link>
          <Link href={projectInfo[name].link}>Go to site</Link>
        </div>
        <div>
          <ImageWrapper name={name}/>
          <MainText>{projectInfo[name].mainText}</MainText>
        </div> 
    </ProjectWrapper>
  );
}

function formatTitle(title){
  const result = title.split("");result[0]=result[0].toUpperCase();return result.join("")
}

export {Project};