import styled from "styled-components";

export const Container = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: rgb(255,0,0);
background: radial-gradient(circle, rgba(96,0,255,.25) 0%, rgba(0,0,0,.25) 75%);

h3{
    font-family: 'Lobster', sans-serif;
    font-weight: normal;
    color: #fff;
    max-width: 90%;
    text-align: center;
}

section{
    width: 100%;
    padding: 0rem 1rem;
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
    margin-block: 3rem;
}

h2{
    width: 100%;
    font-family: 'Lobster', sans-serif;
    color: #fff;
    text-shadow: 0 1px 9px #8000ff;
    margin-block: .5rem;
    font-size: 1.25rem;
    text-align: center;
}

.wrapper h3{
    font-weight: bold;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    text-shadow: 0 0 9px #8000ff;

    span{
        margin-block: .25rem;
        font-size: 1.5rem;
    }

    img{
        object-fit: cover;
        border-radius: 6px;
        aspect-ratio: 9/16;
    }
}

.wrapper ul{
    width: 65%;
    display: flex;
    justify-content: center;
    align-content: space-between;
    flex-wrap: wrap;
    transition: all ease 200ms;
    scrollbar-width: none;
}

.wrapper li{
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
        font-family: 'Lobster', sans-serif;
        color: #fff;
        font-weight: normal;
        text-align: center;
        font-size: 1rem;
        margin-block: .25rem;
    }
    
}

.see-more{
    cursor: pointer;
    font-family: 'Lobster', sans-serif;
    font-weight: normal;
    color: #fff;
    width: 95%;
    text-align: center;
    padding: .5rem 0;
    border-radius: 0 0 6px 6px;
    background: rgba(0,0,0,.25);
    transition: all ease 300ms;
    &:hover{
        background: rgba(255,255,255,.75);
    }

    &:hover p{
        color: #000;
    }
    p{
        width: 100%;
        font-size: 1rem;
        text-shadow: none;
    }
}

@media screen and (max-width: 768px){

h2{
    margin-left: 0;
}

section{
    padding: 0 1rem;
    padding-bottom: 1rem;
}

.wrapper{
    justify-content: center;
    width: 100vw;
    margin-block: 1rem;
}

.wrapper h2{
    text-align: center;
}

.wrapper h3 {
    width: 100%;
    margin-block: 1rem;
    
    img{
        border-radius: 6px;
        object-fit: cover;
        object-position: top;
        aspect-ratio:16/9;
    }
}

.wrapper:last-child h3 {
    img{
        object-position: center;
    }
}

.wrapper ul{
    width: 100%;
}

.wrapper li span{
    margin-block: .5rem;
}

.see-more{
    width: 90%;
    background: rgba(0,0,0,.5);
    border-radius: 6px;

        p{
            color: #fff;
        }
}
}
`