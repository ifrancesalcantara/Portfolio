import styled from "styled-components"

const Subtitle=styled.h1`
    margin:0
`


const AboutMeWrapper=styled.div`
    background:${({theme})=>theme.primary_transparent2};
    height:${({unfold})=>unfold+"vh"};
    transition:1s;
    display:flex;
    overflow:hidden
`

export {Subtitle, AboutMeWrapper}