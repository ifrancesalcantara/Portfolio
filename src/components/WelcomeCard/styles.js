import styled from "styled-components"

const logoSize="3vw"
const gitHubDay="public/Images/Logo/Contact/gitHub/gitHubDay.png"
const gitHubNight="./Images/Logo/Contact/gitHub/gitHubNight.png"
const linkedInDay="./Images/Logo/Contact/linkedIn/linkedInDay.png"
const linkedInNight="./Images/Logo/Contact/linkedIn/linkedInNight.png"
const codewarsDay="./Images/Logo/Contact/codewars/codewarsDay.png"
const codewarsNight="./Images/Logo/Contact/codewars/codewarsNight.png"
const codePenDay="./Images/Logo/Contact/codePen/codePenDay.png"
const codePenNight="./Images/Logo/Contact/codePen/codePenNight.png"
const twitterDay="./Images/Logo/Contact/twitter/twitterDay.png"
const twitterNight="./Images/Logo/Contact/twitter/twitterNight.png"

const welcomeCardImage="./Images/welcomeCard/background.jpg"
const portraitImage="./Images/welcomeCard/portrait.png"

const WelcomeCard=styled.div`
    display:flex;
    padding-bottom:10vh;
    position:relative;
    background-image:url(${welcomeCardImage});
    background-size: cover;
    background-repeat: no-repeat;
    align-items:center;
`

const Text=styled.div`
    padding-top:30vh;
    margin-left:7vw;
    font-family: ${({theme})=>theme.fonts.first};
    font-weight: bold;
`

const Name=styled.p`
    text-shadow: 2px 2px black;
    font-size: 6.5vw;
`

const Position=styled.p`
    display: table;
    font-size:2vw;
    background:${({theme})=>theme.primary_transparent}
`

const AboutMe=styled.p`
    font-size:2vw;
    display: table;
    background:pink;
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
    margin:12vw 9.6vw 0 10vw;
    border-radius:50%;
    overflow:hidden;
`
    ///*double navbar height + (margin-left + img + list padding) + + aproximated == calc(5vw + 3vw + 1.6vw)*/

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

export {WelcomeCard, Text, Name, Position, AboutMe, LinksWrapper, Links, Logo, Portrait}