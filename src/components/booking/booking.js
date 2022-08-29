import styled from "styled-components";
export const BookingHeader = styled.div`
height:400px;
width:100%;
`
export const TextOverImage = styled.h1`
text-align:center;
position:absolute;
top:20%;
left:0;
right:0;
color:white;
font-size:52px;

`
export const Wrapper = styled.div`
padding:40px;
display:flex;
@media (max-width:1000px){
    flex-direction:column;
    padding:15px;
}

`
export const LeftContainer = styled.div`
display:flex;
/* align-items:flex-end; */
flex-direction:column;
padding: 0px 40px;
border-right:2px solid black;
flex:0.5;

@media (max-width:1000px){
    border:none;
    border-bottom:2px solid black;
    padding:20px;
}
`

export const RightContainer = styled.div`
display:flex;
flex-direction:column;
flex:0.5;
`