import styled from "styled-components";

export const SightContainer = styled.div`
gap:20px;
margin-top:40px;
display:flex;
justify-content:center;
align-items:center;
flex:1;

@media (max-width:700px){
flex-direction:${props=>props.flexDirection};
}
`;

export const ImageContainer = styled.div`
flex:0.3;
padding:10px;
@media (max-width:700px){
    flex:0.5;
}

`
export const SightDescription = styled.div`
flex:0.3;
padding:10px;

@media (min-width:1000px) and (max-width:1350px){
    flex:0.5;
}

@media (min-width:700px) and (max-width:1000px){
    flex:0.7
}
@media (max-width:700px){
    max-width:390px;
}
@media (max-width:450px){
    max-width:320px;
}
`