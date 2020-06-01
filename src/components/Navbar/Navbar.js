import React from "react";
import {connect} from "react-redux";
import { toggleTheme } from "../../redux/actions/userActions";

import {NavbarWrapper, Logo, NavListAndNightModeWrapper, NavList, ThemeToggler} from "./styles"

function HomeView(props){
  const {toggleTheme}=props
  return (
    <NavbarWrapper>
        <a href={"/"}><Logo/></a>
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
        toggleTheme:()=>{dispatch(toggleTheme)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
