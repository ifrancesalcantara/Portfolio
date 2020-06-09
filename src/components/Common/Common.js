import styled from "styled-components"

const ProtectiveScreen=styled.div`
    z-index:9998;
    position:absolute;
    background:rgba(0,0,0,0);
    height:${({height})=>height};
    width:100%;
`

const UnfoldWrapper=styled.div`
    background:${({theme})=>theme.primary_transparent2};
    height:${({unfold})=>unfold+"vh"};
    transition:.8s .2s;
    overflow:hidden;
`

export {ProtectiveScreen, UnfoldWrapper}