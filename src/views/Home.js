import React from "react";

import Navbar from "../components/Navbar/Navbar"
import WelcomeCard from "../components/WelcomeCard/WelcomeCard"
import HomeviewProjects from "../components/HomeviewProjects/HomeviewProjects"
import {ThirdHomeComponent} from "../components/ThirdHomeComponent/ThirdHomeComponent"
//import Login from "../components/Login/Login";

function HomeView(){
  return (
    <div>
        <Navbar home/>
        <WelcomeCard/>
        <HomeviewProjects/>
        <ThirdHomeComponent/>
    </div>
  );
}

export default HomeView;
