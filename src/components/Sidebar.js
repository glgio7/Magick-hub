import { HiAtSymbol, HiOutlineChevronDoubleLeft, HiOutlineExclamationCircle, HiShare } from "react-icons/hi";
import styled from "styled-components";


const Aside = styled.aside`
div{
width: 0vw;
position: fixed;
top: 25%;
padding: 2rem 0;
background-color: #151515;
z-index: 99;
opacity: .95;
transition: all 300ms;
}

div.active{
    width: 5vw;
}


.close-icon{
    cursor: pointer;
    font-size: 1.25rem;
    color: #ffa900;
    width: 100%;
    margin-block: 2rem;
    transition: all 250ms;
    &:hover{
        scale: .9;
    }
}

.options-icon{
    cursor: pointer;
    font-size: 1.75rem;
    color: #fff;
    width: 100%;
    margin-block: 1rem;
    opacity: .75;
    transition: all 250ms;
    &:hover{
        opacity: 1;
        scale: 1.1;
        color: #ffa900;
    }

}
@media screen and (max-width: 768px){
    div.active{
        width: 15vw;
    }
    
}
`

export function Sidebar({ displayed, toggleMenu }) {

    return (
        <>
            <Aside>
                <div className={displayed ? 'active' : ''}>
                    <HiOutlineChevronDoubleLeft className="close-icon" onClick={toggleMenu} />
                    <HiAtSymbol className="options-icon" />
                    <HiOutlineExclamationCircle className="options-icon" />
                    <HiShare className="options-icon" />
                </div>
            </Aside>
        </>
    )
}