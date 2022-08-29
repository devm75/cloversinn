import styled from 'styled-components';

export const NavBarContainer = styled.div`
position:absolute;
top:30px;
left:0;
right:0;
z-index:30;
display:flex;
justify-content:center;
align-items:center;
gap:50px;
height:80px;
background-color:rgba(143, 114, 34,0.6);
max-width:1920px;;
margin:auto;
font-family: 'Play', sans-serif;
position:fixed;

background-color:${props=>props.backgroundColor};
@media (max-width:1000px){
    gap:20px;

}

@media (max-width:700px){
    display:none;
}
`
export const NavLogo = styled.div`
height:auto;
`
export const NavItem = styled.div`
font-size:18px;
box-sizing:border-box;
height:100%;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    border-bottom:5px solid brown;
    cursor:pointer;
    /* transform:scale(1.2); */
 
}

@media (max-width:700px){
    width:100%;
}
`
