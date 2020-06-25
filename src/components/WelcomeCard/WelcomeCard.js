import React from "react";
import {WelcomeCardWrapper, Text, Name, Position, LinksWrapper, Links, Logo, Portrait,CvDownloaderWrapper,CvDownloader} from "./styles"
//import Login from "../components/Login/Login";
import {contactLinks} from "../../lib/staticData/links"

const {gitHubLink,linkedInLink,codewarsLink,codePenLink,twitterLink}=contactLinks

function WelcomeCard(){
  return (
    <WelcomeCardWrapper>
        <Text>
            <Name>Iván Francés</Name>
            <Position>Full Stack Developer</Position>
            <CvDownloaderWrapper>
              <CvDownloader href="./CV Ivan Frances.pdf" download>Download my CV</CvDownloader>
            </CvDownloaderWrapper>
        </Text>
        <Portrait/>
        <LinksWrapper>
            <Links>
                <a href={linkedInLink}><Logo first linkedIn></Logo></a>
                <a href={gitHubLink}><Logo gitHub></Logo></a>
                <a href={codewarsLink}><Logo codewars></Logo></a>
                <a href={codePenLink}><Logo codePen></Logo></a>
                <a href={twitterLink}><Logo last twitter></Logo></a>
            </Links>
        </LinksWrapper>
    </WelcomeCardWrapper>
  );
}

export {WelcomeCard};
