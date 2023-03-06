import styled from "styled-components"

const StyledFooter = styled.footer`
width: 100vw;
display: flex;
align-items: center;
background-color: #141414;
min-height: 36px;

p{
    font-family: 'Nunito', sans-serif;
    color: #fff;
    text-align: center;
    margin: 0 auto;
}

@media screen and (max-width: 768px){
    min-height: 42px;
p{
    font-size: .8rem;
    font-weight: bold;
}
}
`

export default StyledFooter;