import styled from "styled-components";

export const ImageWrapper = styled.div`
height:450px;
width:100%;
position:relative;
padding-bottom:40px;
height:${props=>props.height};
`
export const HotelInfo = styled.div`
margin-top:40px;
display:flex;
flex:1;
gap:40px;
margin-bottom:80px;
@media (max-width:700px){
    flex-direction:column;
}
    
`
export const LeftContainer = styled.div`
flex:0.5;
display:flex;
flex-direction:column;
padding:40px;
border-right:2px solid black;
/* justify-content:flex-end; */
/* align-items:center; */

@media (max-width:700px){
    padding:0px;
}
`;

export const RightContainer = styled.div`
padding:40px;
flex:0.5;
display:flex;
flex-direction:column;
/* justify-content:flex-start; */

@media (max-width:700px){
    padding:10px 30px;
}
`;
export const StarsContainer = styled.div`
padding:40px;
/* height:100px; */
width:100%;
display:flex;
justify-content:center;
align-items:center;

`
export const LargeImageContainers = styled.div`
display:flex;
/* height:700px; */
flex:1;

@media (max-width:700px){
    flex-direction:column;
    /* height:500px; */
    gap:20px;
}

`
export const LeftImageContainer = styled.div`
flex:0.5;
display:flex;
`;

export const RightImageContainer = styled.div`
flex:0.5;
display:flex;
`;

export const PreFooter = styled.div`
padding:40px 20px;
display:flex;
flex-direction:column;
/* justify-content:center; */
`