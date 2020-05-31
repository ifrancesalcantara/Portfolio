import React from "react";
import {HomeViewComponent, Text, Name, Position, AboutMe, LinksWrapper, Links, Logo} from "./styles"
//import Login from "../components/Login/Login";

const gitHubLink="https://github.com/ifrancesalcantara"
const linkedInLink="https://www.linkedin.com/in/ifrancesalcantara/"
const codewarsLink="https://www.codewars.com/users/ifrancesalcantara"
const codePenLink="https://codepen.io/ifrancesalcantara"
const twitterLink="https://twitter.com/ifrancesalcanta"


function HomeView(){
  return (
    <HomeViewComponent>
        <Text>
            <Name>Iván Francés</Name>
            <Position>Full Stack Developer</Position>
            <AboutMe>Más información</AboutMe>
        </Text>
        <LinksWrapper>
            <Links>
                <a href={linkedInLink}><Logo first linkedIn></Logo></a>
                <a href={gitHubLink}><Logo gitHub></Logo></a>
                <a href={codewarsLink}><Logo codewars></Logo></a>
                <a href={codePenLink}><Logo codePen></Logo></a>
                <a href={twitterLink}><Logo last twitter></Logo></a>
            </Links>
        </LinksWrapper>
    </HomeViewComponent>
  );
}

export default HomeView;
