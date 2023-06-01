import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		title: "Mitologia Hinduísta",
		overview: [
			"A mitologia hindu é uma das mais antigas e ricas do mundo. O hinduísmo é uma das principais religiões do subcontinente indiano e é a terceira maior religião do mundo em termos de número de seguidores. Ela é baseada em uma ampla variedade de textos sagrados, incluindo o Vedas, os Puranas e o Mahabharata. Esses textos descrevem uma ampla variedade de deuses, deusas e personagens míticos que são reverenciados pelos hindus.",
			"Alguns dos principais deuses da mitologia hindu incluem Brahma, Vishnu e Shiva, que são conhecidos como a Trindade Hindu. Cada um desses deuses tem uma função específica na criação, preservação e destruição do universo. Outros deuses e deusas importantes incluem Lakshmi, a deusa da riqueza e da prosperidade, Saraswati, a deusa da sabedoria e da música, e Ganesha, o removedor de obstáculos.",
			"A mitologia hindu também inclui uma ampla variedade de histórias e lendas que descrevem as aventuras de deuses, heróis e monstros míticos. Essas histórias são freqüentemente contadas por meio de poesia, música e dança, e são uma parte importante da cultura indiana.",
			"A tradição é rica em simbolismo, e muitos dos deuses e deusas são representados por símbolos específicos, como o tridente de Shiva ou o disco de Vishnu. A mitologia hindu também inclui muitos rituais e práticas religiosas, como pujas (cerimônias de adoração) e yagnas (rituais de fogo).",
			"Até os dias de hoje, a mitologia hindu desempenha um papel significativo na vida e na cultura indiana até hoje, influenciando tudo, desde a arte e a literatura até as práticas religiosas e sociais. A mitologia também é uma fonte de inspiração para muitos estudiosos, artistas e escritores em todo o mundo, que foram influenciados por suas histórias e personagens míticos.",
		],
		address: "hindu",
	},
	{
		name: "Brahma",
		image_path: "/assets/hindu/brahma.jpg",
		overview: [
			"Brahma é um dos deuses mais importantes do panteão hindu, responsável pela criação do universo.",
			"Ele é frequentemente retratado com quatro cabeças e quatro braços, simbolizando a sua onipotência.",
			"Brahma é considerado o deus da sabedoria e é frequentemente retratado segurando um livro, simbolizando o conhecimento.",
			"Apesar de ser um dos deuses mais importantes do hinduísmo, Brahma é raramente adorado e não possui muitos templos dedicados a ele.",
			"Segundo a mitologia hindu, Brahma nasceu de um ovo cósmico e é o pai de todos os seres vivos.",
		],
	},
	{
		name: "Vishnu",
		image_path: "/assets/hindu/vishnu.jpg",
		overview: [
			"Vishnu é um dos principais deuses do panteão hindu, responsável pela preservação do universo.",
			"Ele é frequentemente retratado segurando uma concha, uma roda, uma maça e um lótus, simbolizando suas diversas qualidades e poderes.",
			"Vishnu é frequentemente adorado como o deus supremo pelos seguidores do Vaishnavismo, uma das principais tradições do hinduísmo.",
			"Na mitologia hindu, Vishnu é considerado o protetor e preservador do universo, e é frequentemente invocado em momentos de crise e dificuldade.",
			"Além disso, Vishnu é associado a diversas encarnações, ou avatares, incluindo Rama, Krishna e Buddha, que são adorados por muitos hindus como formas de divindade.",
		],
	},
	{
		name: "Shiva",
		image_path: "/assets/hindu/shiva.jpg",
		overview: [
			"Shiva é um dos principais deuses do panteão hindu, responsável pela destruição e transformação do universo.",
			"Ele é frequentemente representado em meditação profunda com o cabelo emaranhado, uma cobra enrolada em seu pescoço e a lua crescente na testa.",
			"Shiva é frequentemente adorado como o deus supremo pelos seguidores do Shaivismo, uma das principais tradições do hinduísmo.",
			"Na mitologia hindu, Shiva é considerado o deus dos yogis, que busca alcançar a união com o divino através da meditação e da ascetismo.",
			"Além disso, Shiva também é associado à fertilidade e é frequentemente retratado dançando a Tandava, a dança cósmica da criação, manutenção e destruição do universo.",
		],
	},
	{
		name: "Ganesha",
		image_path: "/assets/hindu/ganesha.jpg",
		overview: [
			"Ganesha é um dos deuses mais populares e amplamente adorados do panteão hindu, conhecido como o removedor de obstáculos e o senhor da sabedoria.",
			"Ele é frequentemente retratado com a cabeça de elefante, um corpo humano e várias mãos, cada uma segurando um objeto simbólico.",
			"Ganesha é frequentemente invocado antes de qualquer empreendimento importante ou cerimônia, como casamentos, inaugurações e exames.",
			"Na mitologia hindu, Ganesha é considerado o filho de Shiva e Parvati, e é frequentemente retratado com sua montaria, um rato.",
			"Ele é adorado em todo o mundo como uma divindade da sabedoria, da inteligência, da aprendizagem e do sucesso.",
		],
	},
	{
		name: "Saraswati",
		image_path: "/assets/hindu/saraswati.jpg",
		overview: [
			"Saraswati é a deusa hindu da sabedoria, do conhecimento, da música e da arte.",
			"Ela é frequentemente retratada sentada em um lótus branco com um livro nas mãos, um instrumento musical e um cisne a seus pés.",
			"Saraswati é frequentemente adorada pelos estudantes e artistas como uma fonte de inspiração e criatividade.",
			"Ela é considerada a esposa de Brahma, o deus hindu da criação, e é venerada em muitos templos hindus em todo o mundo.",
			"Na mitologia hindu, Saraswati é considerada a mãe dos Vedas, os textos sagrados mais antigos do hinduísmo.",
		],
	},
	{
		name: "Krishna",
		image_path: "/assets/hindu/krishna.jpg",
		overview: [
			"Krishna é um dos deuses mais populares e amados do panteão hindu, frequentemente retratado como um jovem pastor com pele azul escura.",
			"Ele é considerado uma das encarnações de Vishnu, e é frequentemente adorado como uma divindade da beleza, amor e alegria.",
			"Krishna é conhecido por suas histórias de infância, que incluem suas travessuras com seus amigos e suas brincadeiras com as gopis, as pastoras locais.",
			"Ele também é conhecido por seu papel na batalha de Kurukshetra, descrito no épico hindu Mahabharata.",
			"Krishna é frequentemente invocado pelos hindus como uma fonte de inspiração, orientação e proteção.",
		],
	},
	{
		name: "Lakshmi",
		image_path: "/assets/hindu/lakshmi.jpg",
		overview: [
			"Lakshmi é a deusa da riqueza, prosperidade e fortuna. Ela é frequentemente retratada sentada ou de pé em uma flor de lótus dourada.",
			"Além de ser associada à riqueza material, Lakshmi também representa a beleza, a felicidade e a boa sorte.",
			"Na mitologia hindu, Lakshmi é a esposa do deus Vishnu e é considerada uma das divindades mais importantes do panteão hindu.",
			"Lakshmi é frequentemente venerada por hindus em ocasiões como o Diwali, o festival das luzes.",
			"Os devotos de Lakshmi acreditam que a deusa pode ajudá-los a alcançar prosperidade material, bem como iluminação espiritual.",
		],
	},
];

const list = (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.status(200).json(data);
};

export default list;
