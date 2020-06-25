import React from "react";
import {connect} from "react-redux";
import { toggleTheme } from "../../redux/actions/userActions";
import { Link } from "react-scroll";

import {NavbarWrapper, Logo, NavListAndNightModeWrapper, NavList, ThemeToggler} from "./styles"

function HomeView(props){
  const {toggleTheme}=props
  return (
    <NavbarWrapper>
        <a href={"/"}><Logo/></a>
        <NavListAndNightModeWrapper>
            <NavList>
                <li>
                    <Link to="projectsSection" smooth={true} duration={400}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link 
                        className="navLink"
                        activeClass="projectsSection"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-105}
                        duration= {400}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="contactSection" smooth={true} duration={400}>
                        Contact
                    </Link>
                </li>
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
        toggleTheme:()=>{dispatch(toggleTheme)}
    }
}

const connectedNabvar = connect(mapStateToProps, mapDispatchToProps)(HomeView)

export {connectedNabvar as Navbar};
