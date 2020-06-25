import React, {useState} from "react";
import {AboutMeWrapper,Section,SectionTitle,SectionText} from "./styles"
import {aboutMeData} from "./aboutMeData"
import {Title} from "../Common/Title/Title.js"
import {UnfoldWrapper} from "../Common/Common"

const {whoAmI,skills,values}=aboutMeData

export function AboutMe(){
  const [unfold, setUnfold]=useState(100)
  return (
    <div id="aboutMeSection">
        <Title title={"About Me"} unfold={unfold} setUnfold={setUnfold}/>
        <UnfoldWrapper unfold={unfold} height={44}>
          <AboutMeWrapper>
            <Section>
              <SectionTitle>Who Am I</SectionTitle>
              <SectionText>{whoAmI}</SectionText>
            </Section>
            <Section>
              <SectionTitle>Skills</SectionTitle>
              <SectionText>{skills}</SectionText>
            </Section>
            <Section>
              <SectionTitle>Values</SectionTitle>
              <SectionText>{values}</SectionText>
            </Section>
            {/*<SubSection>
              
            </Section>*/}
          </AboutMeWrapper>
        </UnfoldWrapper>
    </div>
  );
}
