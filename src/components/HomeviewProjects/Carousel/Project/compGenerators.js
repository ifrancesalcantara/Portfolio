import React from "react";

import {Technology, MediaImg} from "./styles"

import {techData} from "../../../../lib/staticData/techs"


export function getTechnologies(list){
    return list.map((tech, techI)=><Technology tech={tech} last={techI===list.length-1} title={techData[tech].title} key={techI}/>)
}

export function getMediaImgs(availableMediaList){
    const mediaList=["pc", "tablet", "mobile"]
    return mediaList.map((media, mediaI)=><MediaImg media={media} availability={availableMediaList.includes(media)} key={mediaI}/>)
}