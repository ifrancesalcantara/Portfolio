import styled from "styled-components"

const AboutMeWrapper=styled.div`
    display:flex;
    overflow:hidden;
    height:100%;
`
const Section=styled.div`
    height:100%;
    width:100%;
`
const SectionTitle=styled.h1`
    margin:0;
    color:${({theme})=>theme.text};
    padding:3vw 0 3vw 6vw;
`
const SectionText=styled.p`
    text-align:justify;
    padding:0 0 0 6vw
`
export {AboutMeWrapper,Section,SectionTitle,SectionText}