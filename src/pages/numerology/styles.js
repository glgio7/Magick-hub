import styled from "styled-components";

export const Container = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: rgb(255,0,0);
background: radial-gradient(circle, rgba(96,0,255,.25) 0%, rgba(0,0,0,.25) 50%);


h3{
    font-family: 'Lobster', cursive;
    font-weight: normal;
    color: #fff;
    max-width: 90%;
    text-align: center;
}

h2{
    font-family: 'Lobster', cursive;
    color: #fff;
    text-shadow: 0 1px 9px #8000ff;
    margin-block: 1rem;
    text-align: center;
}

section{
    margin-block: 1rem;
    position: relative;
    width: 100vw;
    padding: 0 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search-bar{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input{
    font-family: 'Nunito', sans-serif;
    border-radius: 3px;
    height: 30px;
    border: none;
    outline: none;
    width: 50%;
    padding: 0 1rem;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    background-color: #303030;
}
input:focus{
    outline: thin solid #ffa900;
}

button{
    cursor: pointer;
    background-color: rgba(10,10,10, 1);
    color: #fff;
    font-family: 'Nunito', sans-serif;
    border-radius: 3px;
    margin-block: 1rem;
    border: none;
    height: 30px;
    width: 10%;
    transition: all 250ms;
    &:hover{
        background-color: rgba(10,10,10, .75);
    }
}

article{
    width: 100%;
    min-height: 75vh;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

p{
    color: #fff;
    margin-block: 1rem;
    text-align: center;
    max-width: 90%;
}


@media screen and (max-width: 768px){

h1{
    width: 100%;
}

section{
    padding: 0;
}
.search-bar{
    flex-direction: column;
}

input, button{
    border-radius: 0;
    margin-block: 1px;
    width: 70%;
}

}
`