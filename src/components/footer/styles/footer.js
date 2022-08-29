import styled from "styled-components";

export const Wrapper = styled.div`
padding-top:40px;
margin-top:40px;
display:flex;
width:100%;
flex-direction:column;
`
export const Footerheader = styled.div`
display:flex;
width:100%;
flex:1;
@media (max-width:600px){
    flex-wrap:wrap;
}
`

export const FooterLeftHeader = styled.div`
flex:0.5;
padding:50px;
display:flex;
justify-content:center;
align-items:center;
background-color:#adada8;
color:white;
`

export const FooterRightHeader = styled.div`
flex:0.5;
padding:50px;
display:flex;
justify-content:center;
align-items:center;
background-color:#4db8b4;
color:white;
`

export const FooterCenter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:140px;
    background-color:#2f4545;
    color:white;
    padding:40px;

`
export const FooterBottom = styled.div`
color:white;
background-color:#2f4545;
min-height:60px;        
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
/* opacity:0.8; */

`