import styled from "styled-components"
import {LightenDarkenColor} from "../../lib/functions/styleFunctions"

const logoSize="3vw"
const gitHubDay="./Images/Logo/Contact/gitHub/gitHubDay.png"
const gitHubNight="./Images/Logo/Contact/gitHub/gitHubNight.png"
const linkedInDay="./Images/Logo/Contact/linkedIn/linkedInDay.png"
const linkedInNight="./Images/Logo/Contact/linkedIn/linkedInNight.png"
const codewarsDay="./Images/Logo/Contact/codewars/codewarsDay.png"
const codewarsNight="./Images/Logo/Contact/codewars/codewarsNight.png"
const codePenDay="./Images/Logo/Contact/codePen/codePenDay.png"
const codePenNight="./Images/Logo/Contact/codePen/codePenNight.png"
const twitterDay="./Images/Logo/Contact/twitter/twitterDay.png"
const twitterNight="./Images/Logo/Contact/twitter/twitterNight.png"

const welcomeCardImage="./Images/WelcomeCard/background.jpg"
const portraitImage="./Images/WelcomeCard/portrait.png"

const WelcomeCardWrapper=styled.div`
    display:flex;
    padding-top:6vw;
    position:relative;
    background-image:url(${welcomeCardImage});
    background-size: cover;
    background-repeat: no-repeat;
`

const Text=styled.div`
    margin-left:7vw;
    font-weight: bold;
`

const Name=styled.p`
    text-shadow: .2vw .2vw black;
    font-size: 6.5vw;
    color:white;
    margin-top:4vw;
`

const Position=styled.p`
    display: table;
    font-size:2vw;
    padding:0 9vw;
    background:${({theme})=>theme.primary_transparent}
`

const LinksWrapper=styled.div`
    margin-top:"calc(5vw + 1vh)";
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 6vw;
`

const Links=styled.ul`
    background:${({theme})=>theme.primary_transparent};
    list-style:none;
    padding:.8vw;
    border-radius:.5vw 0 0 .5vw;
`

const Logo=styled.li`
    background-image:url(${props=>getIcon(props)});
    background-size: contain;
    background-repeat: no-repeat;
    height:${logoSize};
    width:${logoSize};
    padding-right:5vw;
    margin-top:${props=>props.first?0:"2vh"};
    transition:.5s;
`

const Portrait=styled.div`
    background-image:url(${portraitImage});
    background-size: contain;
    background-repeat: no-repeat;
    width:25vw;
    height:25vw;
    margin: 5vw 9.6vw 7vw 10vw;
    border-radius:50%;
    overflow:hidden;
`

const CvDownloader=styled.a`
    background-color: ${({theme})=>theme.buttons[0].color};
    padding: .4vw .9vw;
    font-size:1.2vw;
    border-radius:40px;
    text-decoration:none;  
    color:${({theme})=>theme.text};
    &:hover{
        background-color: ${({theme})=>LightenDarkenColor(theme.buttons[0].color, -20)}
    }
    &:active{        
        background-color: ${({theme})=>LightenDarkenColor(theme.buttons[0].color, -30)}
    }
`

const CvDownloaderWrapper=styled.div`
    display:flex;
    justify-content:center;
    margin-top:1vw;
`

function getIcon(props){
    const {linkedIn, gitHub, codewars, codePen, twitter, theme}=props
    if(theme.name==="light"){
        if(linkedIn){return linkedInDay}
        if(gitHub){return gitHubDay}
        if(codewars){return codewarsDay}
        if(codePen){return codePenDay}
        if(twitter){return twitterDay}
    } else {
        if(linkedIn){return linkedInNight}
        if(gitHub){return gitHubNight}
        if(codewars){return codewarsNight}
        if(codePen){return codePenNight}
        if(twitter){return twitterNight}
    }
}

export {WelcomeCardWrapper, Text, Name, Position, LinksWrapper, Links, Logo, Portrait,CvDownloaderWrapper,CvDownloader}