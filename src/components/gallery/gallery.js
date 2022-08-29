import styled from "styled-components";

export const ImagesContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:20px;
/* max-width:1920px; */
margin-top:150px;
/* padding:auto; */

`
export const ImageContainer = styled.div`
height:240px;
width:400px;
@media (max-width:1000px){
    width:290px;
    height:160px;
}

@media (max-width:700px){
    width:200px;
    height:120px;
}

&:hover{
    cursor:pointer;
}
`

