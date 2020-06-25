import styled from "styled-components"
import {logoImg, themeImgs} from "../../lib/staticData/imgURI"

const {themeDay,themeNight}=themeImgs
const size=5
const themeImgSize=size/2.2+"vw"

const NavbarWrapper=styled.div`
    background:${({theme})=>theme.primary_transparent};
    display:flex; 
    align-items: center;
    justify-content:space-between;
    position: absolute;
    width: -webkit-fill-available;
    z-index:9999
`

const Logo=styled.div`
    background-image:url(${logoImg});
    background-size: contain;
    background-repeat: no-repeat;
    margin:0.5vw;
    width: ${size+"vw"};
    height: ${size+"vw"};
`

const NavListAndNightModeWrapper=styled.div`
    display:flex;
    align-items:center;
`

const NavList=styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    li{
        display:inline-block;
        font-weight:bold;
        color:${({theme})=>theme.name==="light"?"black":"lightgray"};
        padding:1.85vw 1.5vw;
        font-size: 1.7vw;
        &:hover{
            background: linear-gradient(180deg, ${({theme})=>(theme.primary_transparent)}, ${({theme})=>(theme.button.hover)}, ${({theme})=>(theme.primary_transparent)});
        }
        &:active{
            color:white;
            background: linear-gradient(180deg, ${({theme})=>(theme.primary_transparent)}, ${({theme})=>(theme.button.click)}, ${({theme})=>(theme.primary_transparent)});
        }
    }
`

const ThemeToggler=styled.div`
    background-image:url(${({theme})=>theme.name==="dark"?themeDay:themeNight});
    background-size: contain;
    background-repeat: no-repeat;
    width: ${themeImgSize};
    height: ${themeImgSize};
    margin: 0 2vw;
    transform: rotate(${({angle})=>angle+"deg"});
    transition-duration:.7s;
    transition-timing-function: ease-out;
`

export {NavbarWrapper, Logo, NavListAndNightModeWrapper, NavList, ThemeToggler}