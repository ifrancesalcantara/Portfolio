import styled from "styled-components"
import {technologyImgs, projectInfo} from "./projectData"

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
    margin-top:8vw;
    text-align:right;
    width:30vw;
    line-height:3vw;
    height: 23vh;
    span{
        font-size:3vw
    }            
`

const ImageWrapper=styled.div`
    background-image: url(${({name})=>projectInfo[name].img});
    background-size: contain;
    background-repeat:no-repeat;
    width: 40vw;
    margin: 10vh 0 0 5vw;
    display: inline-block;
    height: 39vh;
`

const Technologies=styled.div`
    display:flex;
    justify-content:space-around;
    margin: 2vw 0 10vw 0;
`

const Technology=styled.div`
    background-image:url(${({tech})=>technologyImgs[tech]});
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
    color:black
`

const MainText=styled.p`
    background:${({theme})=>theme.primary_transparent};
    color:${({theme})=>theme.text};
    font-family:${({theme})=>theme.fonts.first};
    font-size:1.5vw;
    max-width:fit-content;
    max-height: 34vh;
    white-space: pre-line;
    text-overflow:ellipsis;
    margin-top:8vh;
    padding:1.3vw;
    border-radius:1vw;
`

export{ProjectWrapper, Title, ImageWrapper, Link, Technologies, Technology, MainText}