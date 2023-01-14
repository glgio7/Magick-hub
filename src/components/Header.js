import { Link } from "react-router-dom"
import styled from "styled-components"
import { HiMenu } from "react-icons/hi";

const StyledHeader = styled.header`
width: 100vw;
display: flex;
position: relative;
align-items: center;
justify-content: center;
padding: .5rem 0;
background: linear-gradient(180deg, rgba(100,0,255, .2) 0%, rgba(0,0,0, 1) 75%);

.menu{
    position: absolute;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    left: 1.5rem;
    z-index: 9;
    top: calc(50% 2rem);
    transition: all 250ms;
    &:hover{
        scale: 0.95;
    }
}

.logo, h1{
    margin: 0 auto;
    width: 480px;
    padding: .5rem 0;
    opacity: .95;
    transition: all ease 250ms;
    &:hover{
        opacity: 1;
    }
}

@media screen and (max-width: 768px){
.menu{
    left: .5rem;
}    
h1{
    padding: 1rem;
    width: 90%;
    margin: 0 auto;
}
}
`


export default function Header({ toggleMenu }) {
    return (
        <StyledHeader>
            <HiMenu className="menu" onClick={toggleMenu}/>
            <Link to={'/'} className="logo"><h1><img src='/assets/magickhub.png' alt='' /></h1></Link>
        </StyledHeader>
    )
}