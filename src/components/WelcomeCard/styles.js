import styled from "styled-components"

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

const welcomeCardImage="./Images/welcomeCard.jpg"

const HomeViewComponent=styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:10vh;
    position:relative;
    background-image:url(${welcomeCardImage});
    background-size: cover;
    background-repeat: no-repeat;
`

const Text=styled.div`
    padding-top:30vh;
    margin-left:7vw;
`

const Name=styled.p`
    font-size: 6.5vw
`

const Position=styled.p`
    font-size:2vw;
    display: table
`

const AboutMe=styled.p`
    font-size:2vw;
    background:pink;
    display: table
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
    padding:.8vw
`

const Logo=styled.li`
    background-image:url(${({linkedIn, gitHub, codewars, codePen, twitter})=>{return linkedIn?linkedInNight:gitHub?gitHubNight:codewars?codewarsNight:codePen?codePenNight:twitter?twitterNight:null}});
    background-size: contain;
    background-repeat: no-repeat;
    height:${logoSize};
    width:${logoSize};
    padding-right:5vw;
    margin-top:${props=>props.first?0:"2vh"};
`

export {HomeViewComponent, Text, Name, Position, AboutMe, LinksWrapper, Links, Logo}