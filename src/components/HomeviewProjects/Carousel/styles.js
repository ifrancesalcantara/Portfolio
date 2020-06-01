import styled from "styled-components"

const CarouselWrapper=styled.div`
    background:red;
    display:flex;
    height:100vh;
    position:relative;
`

const ProjectWrapper=styled.div`
    width:80vw;
    display:flex;
    overflow:hidden;
`

const Project=styled.div`
    min-width:100%;
    height:100vh;
    position:relative;
    left:${({watching})=>(watching*-100)+"%"};
    transition: .8s ease-out .2s;

`

export {CarouselWrapper, ProjectWrapper, Project}