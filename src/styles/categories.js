import styled from "styled-components";

export const Container = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: rgb(255,0,0);
background: radial-gradient(circle, rgba(96,0,255,.25) 0%, rgba(0,0,0,.25) 100%);
min-height: 100vh;


h3{
    font-family: 'Lobster', cursive;
    font-weight: normal;
    color: #fff;
    max-width: 90%;
    text-align: center;
}

.wrapper{
    margin-block: 1rem;
    position: relative;
    width: 100vw;
    padding: 0 2vw;
}

.wrapper h2{
    font-family: 'Lobster', cursive;
    color: #fff;
    text-shadow: 0 3px 15px #8000ff;
    margin-block: 1rem;
    margin-left: .5rem;
}
.wrapper:hover .arrow{
    width: 48px;
    &:hover{
        scale: 0.9;
    }
}
.arrow{
    cursor: pointer;
    overflow: hidden;
    z-index: 9;
    color: #fff;
    background-color: rgba(0,0,0,.1);
    box-shadow: 0px 0px 15px #000;
    position: absolute;
    top: 25%;
    height: 50%;
    width: 0px;
    font-size: 2rem;
    transition: all ease 300ms;
}

.left{
    left: 0;
}

.right{
    right: 0;
}

.wrapper ul{
    padding: .5rem;
    list-style: none;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    transition: all ease 200ms;
    scrollbar-width: none;
}

.wrapper li{
    display: flex;
    position: relative;
    margin-right: 1rem;
    flex-direction: column;
    align-items: center;
    width: 15vw;
    height: max-content;
    cursor: pointer;
    transition: all ease 300ms;
    border-radius: 6px;
    &:hover{
        scale: 1.025;
    }
    &:last-child{
        margin-right: 0;
    }
}

.list-image{
    aspect-ratio: 9/16;
    border-radius: 6px;
    object-fit: cover;
    width: 15vw;
    opacity: 1;
    transition: all ease 200ms;
    &:hover{
        border: 2px inset #6000ff;
    }
}

.wrapper span{
    width: 100%;
    color: #fff;
    font-weight: bold;
    font-size: .9rem;
    font-family: 'Nunito', sans-serif;
    margin-top: .5rem;
    text-shadow: 0 0 9px #8000ff;
    text-align: center;
}
@media screen and (max-width: 768px){

h1{
    width: 100%;
}

.wrapper h2{
    margin-left: 1rem;
}

.wrapper li, .wrapper span{
    width: 40vw;
}

.wrapper li:first-child{
    margin-left: .5rem;
}

.arrow{
    display: none;
}

.list-image{
    width: 40vw;
}
    
}
`