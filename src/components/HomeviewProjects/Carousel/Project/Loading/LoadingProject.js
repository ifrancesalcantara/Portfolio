import React, {useState, useEffect} from "react";
import {LoadingProjectWrapper, LoadingText} from "./styles"

function LoadingProject(){
  const [dots, setDots]=useState({value:"",interval:null})
  useEffect(()=>{
    const interval=setInterval(() => {
      let {value}=dots
      switch (value) {
        case ".":
          setDots({...dots,value:".."})
          break;
        case "..":
          setDots({...dots,value:"..."})
          break;
        default:
          setDots({...dots,value:"."});
      }
    }, 1000);

    return ()=>{console.log("clearing Interval");clearInterval(interval)}
  },[dots])
  return (
    <LoadingProjectWrapper>
        <LoadingText>Loading Project{dots.value}</LoadingText>   
    </LoadingProjectWrapper>
  );
}
export {LoadingProject};