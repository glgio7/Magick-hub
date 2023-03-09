import styled from "styled-components"

const StyledFooter = styled.footer`
width: 100vw;
min-height: 36px;

display: flex;
align-items: center;

background-color: #141414;

p{
    font-family: 'Nunito', sans-serif;
    text-align: center;
    
    color: #fff;
    
    margin: 0 auto;
}

@media screen and (max-width: 900px){
    min-height: 42px;
p{
    font-size: .8rem;
    font-weight: bold;
}
}
`

export default StyledFooter;