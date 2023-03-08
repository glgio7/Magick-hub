import styled from "styled-components";

export const Container = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: rgb(255,0,0);
background: radial-gradient(circle, rgba(96,0,255,.25) 0%, rgba(0,0,0,.25) 75%);
padding: 3rem 0;


h3{
    font-family: 'Oleo Script', cursive;
    font-weight: normal;
    color: #fff;
    max-width: 90%;
    text-align: center;
}

h2{
    font-family: 'Oleo Script', cursive;
    color: #fff;
    text-shadow: 0 1px 9px #8000ff;
    margin-block: 1rem;
    text-align: center;
}

.wrapper{
    /* background-color: aliceblue; */
    margin-block: 1rem;
    position: relative;
    width: 100vw;
    padding: 0 2vw;
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
    bottom: 25%;
    height: 30%;
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
    transition: all ease 200ms;
    scrollbar-width: none;
}

.wrapper li{
    display: flex;
    position: relative;
    margin-right: .75rem;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    height: max-content;
    cursor: pointer;
    border-radius: 6px;
    &:last-child{
        margin-right: 0;
    }
}

.wrapper img {
    aspect-ratio: 9/16;
    border-radius: 6px;
    object-fit: cover;
    width: 10vw;
    opacity: 1;
    transition: all ease 200ms;
    &:hover{
        border: 2px outset #6000ff;
    }
}

.wrapper span{
    width: 100%;
    color: #fff;
    font-weight: bold;
    /* font-size: 1rem; */
    margin-top: .5rem;
    text-shadow: 0 0 9px #8000ff;
    text-align: center;
}

article{
    /* background-color: #404040; */
    width: 100%;
    min-height: 75vh;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

article img{
    width: 300px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
}

p{
    color: #fff;
    width: 90%;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-block: .75rem;
    font-family: 'Quicksand', sans-serif;
}

@media screen and (max-width: 900px){
margin-top: 2rem;

h1{
    width: 100%;
}

.arrow{
    display: none;
}

.wrapper{
    padding: 0;
}

.wrapper li, .wrapper span{
    width: 20vw;
}

.wrapper li:first-child{
    margin-left: .5rem;
}

.wrapper img{
    width: 20vw;
}
    
}
`