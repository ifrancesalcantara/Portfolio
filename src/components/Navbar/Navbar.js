import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"
//import { toggleTheme } from "../../redux/actions/userActions";

const logoUrl="./Images/Logo/logo.png" 
const themeDay="./Images/Logo/themeDay.png" 
const themeNight="./Images/Logo/themeNight.png" 
const size=5
const themeImgSize=size/2.2+"vw"

const NavbarWrapper=styled.div`
    background:${({theme})=>theme.primary_transparent};
    display:flex; 
    align-items: center;
    justify-content:space-between;
    position: absolute;
    width: 100vw;
    z-index:9999
`

const Logo=styled.div`
    background-image:url(${logoUrl});
    background-size: contain;
    background-repeat: no-repeat;
    margin:0.5vw;
    width: ${size+"vw"};
    height: ${size+"vw"};
`

const NavListAndNightModeWrapper=styled.div`
    display:flex;
        height:${size+1+"vw"};
    align-items:center;
`

const NavList=styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    margin-right:8vw;
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
    margin-right: 5vw;
    transform: rotate(${({angle})=>angle+"deg"});
    transition-duration:.7s;
    transition-timing-function: ease-out;
`

function HomeView(props){
  const {toggleTheme, theme}=props
  console.log(theme)
  return (
    <NavbarWrapper>
        <Logo/>
        <NavListAndNightModeWrapper>
            <NavList>
                <li>Proyectos</li>
                <li>Contacto</li>
            </NavList>
            <ThemeToggler onClick={()=>toggleTheme()} angle={props.togglerAngle}></ThemeToggler>
        </NavListAndNightModeWrapper>
    </NavbarWrapper>
  );
}

function mapStateToProps(state){
    const {theme}=state
    return theme
}

function mapDispatchToProps(dispatch){
    return {
        toggleTheme:()=>{dispatch({type:"TOGGLE_THEME"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
