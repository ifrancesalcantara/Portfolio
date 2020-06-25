import React from "react";

import {Navbar} from "../components/Navbar/Navbar"
import {WelcomeCard} from "../components/WelcomeCard/WelcomeCard"
import {HomeViewProjects} from "../components/HomeviewProjects/HomeviewProjects"
import {AboutMe} from "../components/AboutMe/AboutMe"
//import {Footer} from "../components/Footer/Footer"
//import {Login} from "../components/Login/Login";

function HomeView(){
  return (
    <div>
        <Navbar/>
        <WelcomeCard/>
        <HomeViewProjects/>
        <AboutMe/>
        {/*<Contact/>
        <Footer/>*/}
    </div>
  );
}

export default HomeView;
