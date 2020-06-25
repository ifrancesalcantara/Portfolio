import React, {useState} from "react";
import {AboutMeWrapper,Section,SectionTitle,SectionText} from "./styles"
import {aboutMeData} from "./aboutMeData"
import {Title} from "../Common/Title/Title.js"
import {UnfoldWrapper} from "../Common/Common"

export function AboutMe(){
  const [unfold, setUnfold]=useState(100)

  return (
    <div>
        <Title title={"About Me"} unfold={unfold} setUnfold={setUnfold} id="aboutMeSection"/>
        <UnfoldWrapper unfold={unfold} height={44}>
          <AboutMeWrapper>
            <Section>
              <SectionTitle>Background</SectionTitle>
              <SectionText>{aboutMeData.background.text}</SectionText>
            </Section>
            <Section>
              <SectionTitle>Experience</SectionTitle>
              <SectionText>{aboutMeData.experience.text}</SectionText>
            </Section>
            <Section>
              
            </Section>
          </AboutMeWrapper>
        </UnfoldWrapper>
    </div>
  );
}
