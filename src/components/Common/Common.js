import styled from "styled-components"

const UnfoldWrapper=styled.div`
    position:relative;
    background:${({theme})=>theme.primary};
    max-height:${({unfold,height})=>unfold?height+"vw":0};
    transition:.6s ease-out;
    overflow:hidden;
`

export {UnfoldWrapper}