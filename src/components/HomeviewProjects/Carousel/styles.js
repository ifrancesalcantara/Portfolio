import styled from "styled-components"

const CarouselWrapper=styled.div`
    display:flex;
    height:${({unfold})=>-unfold}vh;
    position:relative;
    //doubt these two
    //top:${({unfold})=>unfold+"vh"};
    overflow:hidden;
`

const ProjectWrapper=styled.div`
    width:80vw;
    display:flex;
    overflow:hidden;
`

export {CarouselWrapper, ProjectWrapper}