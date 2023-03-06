import styled from "styled-components";


const Aside = styled.aside`
position: absolute;
pointer-events: none;
top: 0;
width: 100vw;
height: 100vh;

.container{
    pointer-events: all;
    width: 0vw;
    position: fixed;
    border-radius: 0 12px 12px 0;
    top: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    background-color: rgba(15,15,15, .99);
    z-index: 99;
    transition: all 300ms;
}

.container.active{
    width: 15vw;
}

.content-box{
    z-index: 99;
    background-color: #000;
    overflow-y: auto;
    position: fixed;
    top: 0;
    height: 100%;
    left: 15vw;
    padding: 2rem 1rem;
    width: 85vw;
    pointer-events: none;
    transition: all 500ms;
    opacity: 0;
}
.content-box.active{
    pointer-events: all;
    opacity: 1;
}

p{
    color: #fff;
    margin: 0 auto;
    margin-block: .5rem;
    line-height: 1.75rem;
    width: 90%;
    text-align: center;

    &:first-child{
        font-weight: bold;
    }
}

.icon{
    font-size: 1.5rem;
    color: #fff;
    width: 100%;
    opacity: .75;
    transition: all 250ms;
}

button{
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    border: none;
    transition: all 300ms;
    opacity: ${({ displayed }) => displayed ? '1' : '0'};
    pointer-events: ${({ displayed }) => displayed ? 'all' : 'none'};
}

button:hover .icon{
        opacity: 1;
        scale: 1.1;
        color: #ffa900;

}
span{
    font-size: .75rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #fff;
    margin: 0 auto;
}
@media screen and (max-width: 768px){

    button{
        width: 20vw;
        opacity: 1;
        pointer-events: all;
    }

    button:hover .icon{
        opacity: 1;
        scale: 1;
        color: #ffa900;

    }

    .close{
        display: none;
    }

    .container, .container.active{
        border-radius: 0;
        bottom: 0;
        top: initial;
        flex-direction: row;
        justify-content: space-around;
        height: 48px;
        width: 100vw;
    }
    
    .content-box{
        top: 0;
        height: 100%;
        left: 0;
        width:100vw;
    }
    
    .content-box.active{
        width:100vw;
    }

    .icon{
        font-size: 1rem;
    }

    span{
        font-size: .55rem;
    }
}
`

export default Aside;