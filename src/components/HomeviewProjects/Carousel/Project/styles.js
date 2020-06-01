import styled from "styled-components"

export const projectStyles={
    portfolio:{
        title:`
            font-size:6vw;
            padding-top:4vw;
            text-align:right;
            width:30vw;
            font-family:${({theme})=>theme.fonts.first};
            line-height:3vw;
            span{
                font-size:3vw
            }
            `,
        image:"./Images/Projects/Portfolio.png",
        href:null
    },paintapop:{
        title:`
            `
    },hoodie:{
        title:`
            `
    },bombard:{
        title:`
            `
    }
}

const ProjectWrapper=styled.div`
    min-width:100%;
    height:100vh;
    position:relative;
    left:${({index})=>(index*-100)+"%"};
    transition: .8s ease-out .3s;
    background:${({theme, name})=>name==="portfolio"?theme.primary_transparent2:theme.projects[name].color};
    //name==="portfolio"?theme.primary_transparent:theme.projects[name].color}
    color:black;
    display:flex
`

const Title=styled.p`
    ${({name, theme})=>theme.projectStyles[name].title}
`

const ImageWrapper=styled.div`
    width: 66vw;
    margin: 4vh 0 0 3vw;
    background-size: contain;
    background-image: url(./Images/Projects/Portfolio.png);
    background-repeat:no-repeat;
    display: inline-block;
    height: 39vh;
`

const Link=styled.a`

`

export{ProjectWrapper, Title, ImageWrapper, Link}