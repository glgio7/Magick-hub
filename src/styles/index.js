import styled from "styled-components";

export const Container = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: rgb(255,0,0);
background: radial-gradient(circle, rgba(96,0,255,.25) 0%, rgba(0,0,0,.25) 100%);

h1{
    width: 480px;
    padding: .5rem 0;
    display: flex;
    align-items: center;
}

h3{
    font-family: 'Lobster', cursive;
    font-weight: normal;
    color: #fff;
    max-width: 90%;
    text-align: center;
}

section{
    width: 100%;
    padding: 2rem 1rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.wrapper{
    /* background: blueviolet; */
    width: 45vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-block: 2rem;
}

h2{
    width: 100%;
    cursor: pointer;
    font-family: 'Lobster', cursive;
    color: #fff;
    text-shadow: 0 3px 15px #8000ff;
    margin-block: 1rem;
    transition: all ease 300ms;
    &:hover{
        opacity: .75;
    }
}
.wrapper h3{
    cursor: pointer;
    width: 30%;
    text-shadow: 0 0 9px #8000ff;

        img{
        object-fit: cover;
        border-radius: 6px;
        aspect-ratio: 9/16;
        &:hover{
        border: 2px inset #6000ff;
    }
        }
}

.wrapper ul{
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transition: all ease 200ms;
    scrollbar-width: none;
}

.wrapper li{
    cursor: pointer;
    list-style: none;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 0 .25rem;
    aspect-ratio: 1;
    
    &:hover img{
        border: 2px inset #6000ff;
    }

    img {
        border-radius: 6px;
        object-fit: cover;
        aspect-ratio: 1;
    }
    span {
        text-shadow: 0 0 9px #8000ff;
        font-family: 'Lobster', cursive;
        color: #fff;
        font-weight: normal;
        text-align: center;
        font-size: 1rem;
        margin-block: .25rem;
    }
    
}

@media screen and (max-width: 900px){

h1{
    width: 100%;
}

section{
    padding: 1rem;
}

.wrapper{
    justify-content: center;
    width: 100vw;
}

.wrapper h2{
    text-align: center;
}

.wrapper h3 {
    width: 100%;
    
    img{
        object-fit: cover;
        object-position: top;
        border-radius: 6px;
        aspect-ratio:16/9;
    }
}

.wrapper:last-child h3 {
    img{
        object-position: center;
    }
}

.wrapper ul{
    margin-block: .5rem;
    width: 100%;
}


}
`