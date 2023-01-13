import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: .5rem 0;
background: linear-gradient(180deg, rgba(100,0,255, .2) 0%, rgba(0,0,0, .5) 100%);


.logo, h1{
    width: 480px;
    padding: .5rem 0;
    opacity: .9;
    transition: all ease 250ms;
    &:hover{
        opacity: 1;
    }
}

@media screen and (max-width: 768px){
    
h1{
    padding: 1rem;
    max-width: 90%;
    margin: 0 auto;
}
}
`


export default function Header() {
    return (
        <StyledHeader>
            <Link to={'/'} className="logo"><h1><img src='/assets/magickhub.png' alt='' /></h1></Link>
            
        </StyledHeader>
    )
}