import React, {useState, useEffect} from "react";
import {LoadingProjectWrapper, LoadingText} from "./styles"

function LoadingProject(){
  const [dots, setDots]=useState(".")

  useEffect(()=>{
    const interval=setInterval(() => {
      switch (dots) {
        case ".":
          setDots("..")
          break;
        case "..":
          setDots("...")
          break;
        default:
          setDots(".");
      }
    }, 1000);
    return ()=>{clearInterval(interval)}
  },[dots])

  return (
    <LoadingProjectWrapper>
        <LoadingText>Loading Project{dots}</LoadingText>   
    </LoadingProjectWrapper>
  );
}
export {LoadingProject};