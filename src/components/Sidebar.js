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
    overflow-y: auto;
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
        'Disclaimer: se você não está disposto a ver o mundo de uma forma diferente, a se abrir a novos conhecimentos ou a praticar a tolerância de idéias, sugiro que não continue.',
        'Nessa sessão você entenderá o propósito desse site e, também encontrará as fontes dos artigos aqui escritos.',
        'Primeiramente, gostaria de agradecer a sua visita, e dizer que estou realmente feliz que tenha se interessado pelo assunto abordado aqui no MagickHub.',
        'No momento desenvolvo-o sozinho, toda a parte de design, funcionalidades, páginas e banco de dados.',
        'Caso você tenha alguma sugestão, correção ou apenas queira entrar em contato por algum outro motivo, mande me um e-mail no endereço: giovanelucas00@outlook.com.',
        'Meu propósito aqui é apresentar as características de diversas figuras mitológicas e um pouco de suas respectivas histórias.',
        'Para explicar um pouco mais sobre a idéia dessa aplicação irei conceituá-los um pouco sobre nossos comportamentos arquetípicos.' ,
        'Estudos das áreas de psicologia e neurociência relatam que aproximadamente até os 5 anos de idade nós, seres humanos, não temos noção de individualidade, nos enxergamos como parte de um todo. Logo após o termino dessa fase, comecei a perceber padrões dos mais diversos tipos e alguns lapsos de abstrações comportamentais começaram a se fazer presentes em minha realidade, como qualia e consciência, questionamentos sobre a motivação de meus atos e das pessoas que convivia. Durante a adolescência isso diminuiu, porém, após essa fase, passei anos estudando de maneira psiconauta, e percebi que respostas para esses tipos de questões (que acredito que todo mundo já se fez em algum momento da vida) talvez não sejam tão exatas quanto imaginei, mas que podem ser exploradas a partir de alguma estrutura lógica.',
        'Compreender o sincretismo que existe na história da humanidade pode nos ajudar a entender nossos comportamentos. Carl Jung conseguiu reduzir as figuras mitológicas (não de forma pejorativa) a alguns modelos arquetípicos, e você pode mesmo pode perceber como alguns deuses de diferentes mitologias se comportam de forma bem parecida. Ainda falando de comportamento, você já percebeu como alguns atores/atrizes são extremamente realistas em seus papéis de atuação? As vezes você até percebe qual figura arquetípica ele está assumindo, e com o decorrer da história entende as causas de seu comportamento. O mesmo acontece em nossas vidas, embora seja difícil admitir.',
        'De acordo com o arquétipo de cada personagem, uma história individual se desenvolve. Então por quê não trazer o poder os arquétipos e da atuação para sua vida e mudar a sua história? Não se trata de fantasia, mas sim de ter satisfação na história em que se vive. Trazer um pouco de história e ajudá-lo nesse caminho é o propósito do MagickHub.',
        'Vale lembrar que nossa psique é muito mais complexa do que imaginamos, e seria frívolo demais assumir que somos um arquétipo ou outro, isso ou aquilo. No geral, possuímos um pouco de cada figura arquetípica.',
        'Não seja intolerante filosóficamente ou de qualquer outra maneira, pois estamos sempre aprendendo.',
        'Fontes',
        'Arquétipos de Jung - Autor: José Roberto Marques',
        'Mitologia Egípcia - TodaMatéria e Museu Egípcio e Rosacruz',
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