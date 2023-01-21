import { useState } from "react";
import { HiHome, HiOutlineChevronDoubleLeft, HiOutlineExclamationCircle, HiOutlineSparkles, HiShare } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Aside = styled.aside`
position: absolute;
pointer-events: none;
top: 0;
width: 100%;
height: 100vh;

.container{
    pointer-events: all;
    width: 0vw;
    position: fixed;
    border-radius: 0 12px 12px 0;
    top: 00%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    background-color: #151515;
    z-index: 99;
    opacity: .98;
    transition: all 300ms;
}

.container.active{
    width: 15vw;
}

.content-box{
    background-color: #000;
    position: fixed;
    top: 00%;
    height: 100%;
    width: 0vw;
    left: 15vw;
    padding: 2rem 1rem;
    transform: translateX(-115vw);
    transition: all ease 750ms;
}
.content-box.active{
    transform: translateX(0);
    width: 85vw;
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

.close-icon{
    cursor: pointer;
    font-size: 1.25rem;
    color: #ffa900;
    width: 100%;
    transition: all 250ms;
    &:hover{
        scale: .9;
    }
}

.options-icon{
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

button:hover .options-icon{
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
    .container.active{
        top: 0;
        height: 100%;
        width: 25vw;
    }
    
    .content-box{
        overflow-y: auto;
        top: 0;
        height: 100%;
        left: 25vw;
    }

    .content-box.active{
        width: 75vw;
    }
    
span{
    font-size: .6rem;
}
}
`



export function Sidebar({ displayed, toggleMenu }) {
    const closeMenu = toggleMenu;

        
    const about = [
        'Nessa sessão você entenderá o propósito desse site e, também encontrará as fontes dos artigos aqui escritos.',
        'Primeiramente gostaria de agradecer sua visita, e dizer que estou realmente feliz que tenha se interessado pelo assunto abordado aqui no MagickHub.',
        'No momento desenvolvo-o sozinho, toda a parte de design, funcionalidades, páginas e banco de dados.',
        'Caso você tenha alguma sugestão, correção ou apenas queira entrar em contato por algum outro motivo, mande me um e-mail no endereço: giovanelucas00@outlook.com.',
        'Aproximadamente a 6 anos atrás, o desenvolvedor desse site passou por experiências de vida que o levou a níveis extremos de estresse. Apesar de negativas, essas experiências aconteceram no momento em que a adolescência dele terminava, e o seu córtex pré-frontal começava a desenvolver uma maturidade minimamente suficiente para uma vida equilibrada.',
        'A partir daí, ele começou a questionar a motivação de seus atos e das pessoas que convivia. Depois de um bom tempo, percebeu que essas respostas talvez não sejam tão exatas, mas que podem ser exploradas a partir de alguma estrutura lógica.',
        'Ele sempre teve facilidade em reconhecer padrões, e em determinado momento, começou a sincretizar arquétipos psicológicos e figuras mitológicas, pois era nítido que algumas atitudes embora não tivessem suas causas totalmente rastreáveis, aconteciam pois o indivíduo em questão agia como uma figura arquetípica.',
        'Me chamo Giovane Lucas, e sou o desenvolvedor citado na história. Meu propósito aqui é apresentar as características de diversas figuras mitológicas, para que você saiba qual comportamento deve ter conforme a situação que a vida lhe dá, e ter mais controle sobre seus atos. Lembre-se, a sua liberdade termina quando a do próximo começa.',
        'Não seja intolerante filosóficamente ou de qualquer outra maneira, o conhecimento ilumina!',
        'Fontes',
        'Arquétipos de Jung - Autor: José Roberto Marques',
        'Mitologia Egípcia - TodaMatéria e QueroBolsa',
        'Descrição dos números na cabala - WeMystic'
    ]

    const [content, setContent] = useState(false);
    const showContent = () => setContent(true);

    const shareLink = () => {
        navigator.clipboard.writeText(window.location.href);
        window.alert('Link da página copiado para compartilhar!')
    }


    return (
        <>
            <Aside displayed={displayed}>
                <div className={displayed ? 'container active' : 'container'}>
                    <button onClick={() => { closeMenu(); setContent(false) }} >
                        <HiOutlineChevronDoubleLeft className="close-icon" />
                    </button>
                    <Link to={'/'}>
                        <button onClick={() => { closeMenu(); setContent(false) }} >
                            <HiHome className="options-icon" />
                            <span>Início</span>
                        </button>
                    </Link>
                    <Link to={'/numerology'}>
                        <button onClick={() => { closeMenu(); setContent(false) }} >
                            <HiOutlineSparkles className="options-icon" />
                            <span>Numerologia</span>
                        </button>
                    </Link>
                    
                    <button onClick={() => showContent()} >
                        <HiOutlineExclamationCircle className="options-icon" />
                        <span>Informações</span>
                    </button>
                    <button onClick={shareLink} >
                        <HiShare className="options-icon" />
                        <span>Compartilhar</span>
                    </button>
                    <div className={content ? "content-box active" : "content-box"}>
                        {about.map((value, index) => (<p key={index}>{value}</p>))}
                    </div>
                </div>
            </Aside>
        </>
    )
}