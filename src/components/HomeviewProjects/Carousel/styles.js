import styled from "styled-components"

const CarouselWrapper=styled.div`
    display:flex;
    transition:2s;
    background:${({projectData, theme})=>projectData&&theme.projects[projectData.name]?theme.projects[projectData.name].color:null};
`

const ProjectWrapper=styled.div`
    width:80vw;
    display:flex;
    overflow:hidden;
`

export {CarouselWrapper, ProjectWrapper}