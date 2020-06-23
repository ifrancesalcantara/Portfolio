import styled from "styled-components"

import {mediaData} from "../../../../lib/staticData/media"
import {techData} from "../../../../lib/staticData/techs"

const ProjectWrapper=styled.div`
    min-width:100%;
    position:relative;
    left:${({index})=>(index*-100)+"%"};
    top:${({unfold})=>unfold-100+"vh"};
    height:${({unfold})=>unfold+"vh"};
    transition: .8s ease-out .2s;
    color:black;
    display:flex
`

const Title=styled.p`
    color:${({theme,name})=>name==="paintapop"?null:name==="bombard"?null:theme.text};
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
    justify-content:center;
`

const Image=styled.img`
    width: 30vw;
    margin: 4vh 5vw;
    display: inline-block;
    height: auto;
    -webkit-box-shadow: 0px 0px 1.1vw -.5vw rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 1.1vw -.5vw rgba(0,0,0,1);
    box-shadow: 0px 0px 1.1vw -.5vw rgba(0,0,0,1);
`

const Technologies=styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin: 2vw 0 5vw 2vw;
    width:90%;
`

const Technology=styled.div`
    background-image:url(${({tech})=>techData[tech].img});
    margin:.5vw 4vw .5vw 0;
    height:4vw;
    width:4vw;
    background-size: contain;
    background-repeat:no-repeat;
    &:hover{
        transform:scale(1.5, 1.5);
        transition:.3s;
    }
`

const Link=styled.a`
    font-size:1.5vw;
    border-radius:1vw;
    padding:.5vw 1vw;
    background: orange;
    display:block;
    width:fit-content;
    margin:3vh 0;
    text-decoration: none;
    color:black;
`

const MainText=styled.p`
    background:${({theme})=>theme.primary_transparent2};
    color:${({theme})=>theme.text};
    font-size:1.5vw;
    max-width:fit-content;
    white-space: pre-line;
    margin-top:4vh;
    line-height:2vw;
    padding:1.3vw;
`

const MediaWrapper=styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:4vh;
`

const MediaImg=styled.div`
    background-image: url(${({media})=>mediaData[media]});
    background-size: contain;
    background-repeat:no-repeat;
    margin-left:${({key})=>key===0?null:"2vw"};
    opacity:${({availability})=>availability?"100%":"40%"};
    width:1.5vw;
    height:1.5vw;
`

const Subtitle=styled.h2`
    margin:2vw 0 0;
    color:${({theme,name})=>name==="paintapop"?null:name==="bombard"?null:theme.text};
`

const LoadingGif=null

export{ProjectWrapper, Title, Image, ImageWrapper, Link, Technologies, Technology, MainText, MediaWrapper, MediaImg, Subtitle,LoadingGif}