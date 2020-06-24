import React from "react";
import {WelcomeCard, Text, Name, Position, LinksWrapper, Links, Logo, Portrait,cvDownloader} from "./styles"
//import Login from "../components/Login/Login";
import {contactLinks} from "../../lib/staticData/links"

const {gitHubLink,linkedInLink,codewarsLink,codePenLink,twitterLink}=contactLinks

function HomeView(){
  return (
    <WelcomeCard>
        <Text>
            <Name>Iván Francés</Name>
            <Position>Full Stack Developer</Position>
            <cvDownloader>A</cvDownloader>
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
    </WelcomeCard>
  );
}

export default HomeView;
