import React from "react";
import {ProjectWrapper, Title, ImageWrapper, Link, Technologies, MainText} from "./styles"
import {projectInfo, getTechnologies} from "./projectData"

function Project(props){
    const {name, index}=props
  return (
    <ProjectWrapper index={index} name={name}>
        <div>
          <Title name={name}>{formatTitle(name)}{name==="portfolio"?<span>{"{"}<br/>{"this.website ="}<br/>{"}"}</span>:null}</Title>
          <Technologies>
            {getTechnologies(projectInfo[name].techs)}
          </Technologies>
          {/*{name==="portfolio"?null:<Link href={projectLinks[name]}>Go to site</Link>}*/}
          <Link>More details</Link>
          <Link href={projectLinks[name]}>Go to site</Link>
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

const projectLinks={
  portfolio:null,
  hoodie:"https://hoodie-app.herokuapp.com/",
  bombard:"https://bombard.herokuapp.com/",
  paintapop:"https://paintapop.herokuapp.com/",
}

export {Project};