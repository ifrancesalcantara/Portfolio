import {Technology} from "./styles"
import React from "react";

export const technologyImgs={
    react:"./Images/Projects/Technologies/react.png",
    mongoose:"",
    redux:"./Images/Projects/Technologies/redux.png",
    styled:"./Images/Projects/Technologies/styled.png"
}

export const projectInfo={
    portfolio:{
        techs:["react", "redux", "styled"],
        mainText:"Portfolio under development, focused on clean code and best practices. Currently the best reference for my web development skills. Contact me for the link.\n \n       React, Redux, Styled-Components",
        img:"./Images/Projects/portfolio.png"
    },
    paintapop:{
        techs:["react"],
        mainText:"A mobile application that allows users to trade painting services. The user can browse and post cards showing thier style, connecting with the card's creator with a chat. \nDeployed version: https://paintapop.herokuapp.com/ \nBackend: https://github.com/ifrancesalcantara/Maquetepinto-backend",
        img:"./Images/Projects/paintapop.png",
        link:"https://paintapop.herokuapp.com/"
    },
    bombard:{
        techs:["react"],
        mainText:"A maze scape game based off Bomberman, where the user has to exit the town avoiding being bitten by angry dogs and making their way by destroying blocks. In the PvP mode, both players fight to death with the help of random cards. Developed with HTML canvas and Javascript.\n \nDeployed version: https://ifrancesalcantara.github.io/Bombard/",
        img:"./Images/Projects/bombard.png",
        link:"https://ifrancesalcantara.github.io/Bombard/"
    },
    hoodie:{
        techs:["react"],
        mainText:"A mobile application that allows the users to post comments on a map. These comments can be made public or private, allowing the user to interact with other user comments replying or liking them. \n \nDeployed version: https://hoodie-app.herokuapp.com/",
        img:"./Images/Projects/hoodie.png",
        link:"https://hoodie-app.herokuapp.com/"
    }
}


export function getTechnologies(list){
    return list.map(tech=><Technology tech={tech}/>)
}