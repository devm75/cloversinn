import styled from "styled-components";

export const TextOverImage = styled.h1`
font-size:50px;
position:absolute;
top:70%;
left:0;
right:0;
text-align:center;
color:white;

@media ( max-width:700px){
    top:70%;
    font-size:34px;
}
`

export const ImagesContainer = styled.div`
padding:50px;
display:flex;
justify-content:center;
align-items:center;
gap:20px;
background-color:#f7f5be;
position:relative;
flex-wrap:wrap;
@media (max-width:700px){
flex-direction: $column;
}
`
export const ImagesDescription = styled.p`
text-align:center;
margin:1.2rem;
`
export const TextUnderline = styled.div`
height:2px;
width: 30%;
margin:auto;
background:black;

@media (max-width:700px){
    width:80%;
}
`

export const ImageContainer = styled.div`
flex:${props => props.flex};

@media (max-width:700px){
    display:flex;
    justify-content:center;
    flex-direction:${props => props.flexDirection};
}

`
export const Wrapper = styled.div`
min-height:${props => props.minHeight};
display:flex;
justify-content:center;
align-items:center;
/* gap:20px; */
flex-direction:${props => props.flexDirection};
flex:1;
padding:${props => props.padding};
@media (max-width:700px){
    flex-direction: ${props => props.localizations ? "column" : ""} ;
    gap:${props => props.gap};
    padding:${props=>props.decreasePadding?props.decreasedPadding:props.padding}
    
}

`
export const LeftContainer = styled.div`
display:flex;
padding:70px;
flex-direction:column;
justify-content:flex-end;
align-items:top;
flex:0.3;
border-right:3px solid black; 
border-right:${props => props.borderRight};
flex-direction:${props => props.flexDirection};
flex:${props => props.flex};
@media (max-width:1000px){
    flex:0.5;
};
@media (max-width:700px){
    border-right:none;
    padding:${props => props.decreasePadding ? props.decreasedPadding : "0"};
     margin-top:${props => props.marginTop};
}
`
export const RightContainer = styled.div`
padding:30px;
display:flex;
flex-direction:column;
/* justify-content:flex-start; */
/* align-items:top; */
flex:0.5;
flex-direction:${props => props.flexDirection};
flex:${props => props.flex};
@media (max-width:1000px){
    flex:0.5;
}

@media (max-width:700px){
    padding:${props => props.decreasePadding ? props.decreasedPadding : "30px"};
   
}
`