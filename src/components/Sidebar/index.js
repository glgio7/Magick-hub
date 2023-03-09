import { useState } from "react";
import {
	HiHome,
	HiOutlineChevronDoubleLeft,
	HiOutlineExclamationCircle,
	HiOutlineSparkles,
	HiShare,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import Aside from "./styles";

const Sidebar = ({ displayed, toggleMenu }) => {
	const closeMenu = toggleMenu;

	const [content, setContent] = useState(false);

	const shareLink = () => {
		navigator.clipboard.writeText(window.location.href);
		window.alert("Link da página copiado para compartilhar!");
	};

	const infoParagraphs = [
		"| Aviso |",
		"Se você não estiver aberto a ver o mundo sob diferentes perspectivas, a adquirir novos conhecimentos e a exercitar a tolerância às ideias alheias, pode ser que este site não seja para você.",
		"| Intro |",
		"Nesta seção, você encontrará informações sobre o propósito do MagickHub, bem como as fontes utilizadas para a criação dos artigos.",
		"Antes de tudo, gostaria de agradecer sua visita e pelo seu interesse no conteúdo apresentado aqui. Gostaria de salientar que sou responsável pelo desenvolvimento integral do site, incluindo a parte de design, funcionalidades, páginas e banco de dados.",
		"Caso tenha sugestões, correções ou simplesmente queira entrar em contato por algum outro motivo, sinta-se à vontade para me enviar um e-mail para o seguinte endereço: giovanelucas00@outlook.com",
		"| Projeto |",
		"Meu objetivo com este portal é apresentar as características de diversas figuras mitológicas, acompanhadas de um pouco de suas histórias. Essas histórias podem nos ajudar a entender nossos comportamentos, pois são baseadas em arquétipos universais, que representam padrões de comportamento e emoções comuns a todos os seres humanos.",
		"Ao longo da minha jornada pessoal, percebi que existem padrões comportamentais e de pensamento que se repetem em diferentes culturas e épocas. Estudos das áreas de psicologia e neurociência confirmam que a compreensão do sincretismo na história da humanidade pode nos ajudar a entender a nós mesmos e ao mundo ao nosso redor.",
		"Carl Jung foi um dos pioneiros na redução das figuras mitológicas a modelos arquetípicos, e esse enfoque nos ajuda a perceber como figuras de diferentes mitologias se comportam de forma semelhante. Isso pode nos ajudar a encontrar padrões em nossa própria vida e a entender as causas de nossos comportamentos.",
		"É possível que você já tenha percebido como alguns atores e atrizes conseguem se transformar em personagens diferentes, incorporando características de arquétipos distintos. O mesmo pode acontecer em nossas vidas, à medida que incorporamos esses modelos em nossa forma de agir e pensar.",
		"No MagickHub, acreditamos no poder dos arquétipos para mudar nossa história e alcançar uma vida mais satisfatória. Vale lembrar, no entanto, que nossa psique é muito mais complexa do que podemos imaginar e que possuímos um pouco de cada figura arquetípica em nós. Por isso, é importante não sermos intolerantes filosoficamente ou de qualquer outra maneira, pois estamos sempre aprendendo e evoluindo.",
	];

	return (
		<>
			<Aside displayed={displayed}>
				<div className={content ? "text-container active" : "text-container"}>
					{infoParagraphs.map((value, index) =>
						value.startsWith("|") ? (
							<h2 key={index}>{value}</h2>
						) : (
							<p key={index}>{value}</p>
						)
					)}
				</div>
				<div className={displayed ? "container active" : "container"}>
					<button
						className="close-button"
						onClick={() => {
							closeMenu();
							setContent(false);
						}}
					>
						<HiOutlineChevronDoubleLeft className="button__icon" />
					</button>
					<Link to={"/"}>
						<button
							onClick={() => {
								closeMenu();
								setContent(false);
							}}
						>
							<HiHome className="button__icon" />
							<span>Início</span>
						</button>
					</Link>
					<Link to={"/numerology"}>
						<button
							onClick={() => {
								closeMenu();
								setContent(false);
							}}
						>
							<HiOutlineSparkles className="button__icon" />
							<span>Numeros</span>
						</button>
					</Link>
					<Link>
						<button onClick={() => setContent(!content)}>
							<HiOutlineExclamationCircle className="button__icon" />
							<span>Infos</span>
						</button>
					</Link>
					<Link>
						<button onClick={shareLink}>
							<HiShare className="button__icon" />
							<span>Share</span>
						</button>
					</Link>
				</div>
			</Aside>
		</>
	);
};

export default Sidebar;
