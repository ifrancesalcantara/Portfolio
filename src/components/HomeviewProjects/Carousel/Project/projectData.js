import {Technology, MediaImg} from "./styles"
import React from "react";

export const technologyInfo={
    react:{
        title:"React",
        img:"./Images/Projects/Technologies/react.png"
    },
    mongo:{
        title:"MongoDB",
        img:"./Images/Projects/Technologies/mongo.png"
    },
    redux:{
        title:"Redux",
        img:"./Images/Projects/Technologies/redux.png"
    },
    styled:{
        title:"Styled Components",
        img:"./Images/Projects/Technologies/styled.png"
    },
    css3:{
        title:"CSS3",
        img:"./Images/Projects/Technologies/css3.png"
    },
    sass:{
        title:"SASS",
        img:"./Images/Projects/Technologies/sass.png"
    },
    nodejs:{
        title:"NodeJS",
        img:"./Images/Projects/Technologies/nodejs.png"
    },
    handlebar:{
        title:"Handlebar",
        img:"./Images/Projects/Technologies/handlebar.png"
    },
    html5:{
        title:"HTML5",
        img:"./Images/Projects/Technologies/html5.png"
    },
    gmaps:{
        title:"Google Maps API",
        img:"./Images/Projects/Technologies/gmaps.png"
    },
    express:{
        title:"Express",
        img:"./Images/Projects/Technologies/express.png"
    },
    javascript:{
        title:"JavaScript",
        img:"./Images/Projects/Technologies/javascript.png"
    }
}

export const projectInfo={
    portfolio:{
        subtitle:"My presentation card",
        techs:["react", "redux", "styled", "nodejs"],
        mainText:"Portfolio under development, focused on clean code and best practices. Currently the best reference for my web development skills. Contact me for the link.\n \n       React, Redux, Styled-Components",
        img:"./Images/Projects/portfolio.png",
        media:["pc"],
        gitHub:{
            frontend:"https://github.com/ifrancesalcantara/Portfolio",
            backend:"",
            repository:""
        }
    },
    paintapop:{
        subtitle:"Get some cool looking figures",
        techs:["react", "mongo", "css3", "nodejs"],
        mainText:"A mobile application that allows users to trade painting services. The user can browse and post cards showing thier style, connecting with the card's creator with a chat.",
        img:"./Images/Projects/paintapop.png",
        link:"https://paintapop.herokuapp.com/",
        media:["mobile", "tablet"],
        gitHub:{
            frontend:"https://github.com/ifrancesalcantara/Project-3-frontend",
            backend:"https://github.com/ifrancesalcantara/Maquetepinto-backend",
            repository:""
        }
    },
    bombard:{
        subtitle:"Scape from your audience",
        techs:["javascript", "css3", "html5", "express"],
        mainText:"A maze scape game based off Bomberman, where the user has to exit the town avoiding being bitten by angry dogs and making their way by destroying blocks. In the PvP mode, both players fight to death with the help of random cards. Developed with HTML canvas and Javascript.",
        img:"./Images/Projects/bombard.png",
        link:"https://ifrancesalcantara.github.io/Bombard/",
        media:["pc"],
        gitHub:{
            frontend:"",
            backend:"",
            //WHEN COMBINED
            repository:"https://github.com/ifrancesalcantara/Bombard"
        }
    },
    hoodie:{
        subtitle:"Map-based notepad",
        techs:["css3", "sass", "nodejs", "handlebar", "gmaps", "express"],
        mainText:"A mobile application that allows the users to post comments on a map. These comments can be made public or private, allowing the user to interact with other user comments replying or liking them.",
        img:"./Images/Projects/hoodie.png",
        link:"https://hoodie-app.herokuapp.com/",
        media:["mobile"],
        gitHub:{
            frontend:"",
            backend:"",
            //WHEN COMBINED
            repository:"https://github.com/ifrancesalcantara/Project2"
        }
    }
}


export function getTechnologies(list){
    return list.map((tech, techI)=><Technology tech={tech} last={techI===list.length-1} title={technologyInfo[tech].title}/>)
}

export const mediaImgs={
    pc:"./Images/Projects/Media/pc.png",
    tablet:"./Images/Projects/Media/tablet.png",
    mobile:"./Images/Projects/Media/mobile.png"
}

export function getMediaImgs(availableMediaList){
    console.log({availableMediaList})
    const mediaList=["pc", "tablet", "mobile"]
    return mediaList.map((media, mediaI)=><MediaImg media={media} availability={availableMediaList.includes(media)} i={mediaI}/>)
}