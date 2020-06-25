import styled from "styled-components"

const AboutMeWrapper=styled.div`
    display:flex;
    justify-content:space-around;
    padding:3vw;
`
const Section=styled.div`
    height:100%;
    max-width:25vw;
`
const SectionTitle=styled.h1`
    color:${({theme})=>theme.text};
    padding:2vw 0;    
    font-size:3vw;
`
const SectionText=styled.p`
    text-align:justify;
    font-size: 1.3vw;
`
export {AboutMeWrapper,Section,SectionTitle,SectionText}