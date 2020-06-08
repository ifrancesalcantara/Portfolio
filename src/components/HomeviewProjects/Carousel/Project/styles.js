import styled from "styled-components"
import {technologyInfo, projectInfo, mediaImgs} from "./projectData"

const ProjectWrapper=styled.div`
    min-width:100%;
    height:100vh;
    position:relative;
    left:${({index})=>(index*-100)+"%"};
    transition: .8s ease-out .3s;
    background:${({theme, name})=>name==="portfolio"?theme.primary_transparent2:theme.projects[name].color};
    //name==="portfolio"?theme.primary_transparent:theme.projects[name].color}
    color:black;
    display:flex
`

const Title=styled.p`
    font-family:${({theme})=>theme.fonts.first};
    font-size:6vw;
    margin-top:8vh;
    width:30vw;
    line-height: 9vh;
    height: 9vh;
    span{
        font-size:3vw
    }            
`

const ImageWrapper=styled.div`
    display:flex;
    justify-content:flex-end
`

const Image=styled.div`
    background-image: url(${({name})=>projectInfo[name].img});
    background-size: contain;
    background-repeat: no-repeat;
    width: 36vw;
    margin: 4vh 0 0 13vw;
    display: inline-block;
    height: 21vw;
`

const Technologies=styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin: 2vw 0 10vw 0;
`

const Technology=styled.div`
    background-image:url(${({tech})=>technologyInfo[tech].img});
    margin-right:5vw;
    height:5vw;
    width:5vw;
    background-size: contain;
    background-repeat:no-repeat;
`

const Link=styled.a`
    font-size:1.8vw;
    border-radius:1vw;
    padding:1vw 2vw;
    background: orange;
    display:block;
    width:fit-content;
    margin:6vh 0;
    text-decoration: none;
    color:black;
`

const MainText=styled.p`
    background:${({theme})=>theme.primary_transparent};
    color:${({theme})=>theme.text};
    font-family:${({theme})=>theme.fonts.first};
    font-size:1.5vw;
    max-width:fit-content;
    white-space: pre-line;
    margin-top:4vh;
    line-height:2vw;
    padding:1.3vw;
    border-radius:1vw;
`

const MediaWrapper=styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:2vh
`

const MediaImg=styled.div`
    background-image: url(${({media})=>mediaImgs[media]});
    background-size: contain;
    background-repeat:no-repeat;
    margin-left:${({i})=>i===0?null:"2vw"};
    opacity:${({availability})=>availability?"100%":"50%"};
    width:3vw;
    height:3vw
`

export{ProjectWrapper, Title, Image, ImageWrapper, Link, Technologies, Technology, MainText, MediaWrapper, MediaImg}