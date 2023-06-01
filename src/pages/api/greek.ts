import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		title: "Mitologia Grega",
		overview: [
			"A mitologia grega é uma das mais famosas e influentes do mundo, repleta de deuses, heróis e monstros que cativaram a imaginação das pessoas por milhares de anos. A mitologia grega apresenta uma rica variedade de histórias e personagens, que descrevem a origem do mundo e da humanidade, bem como as aventuras e desventuras dos deuses e heróis gregos.",
			"Caracterizada pela complexidade e ambiguidade dos personagens, que muitas vezes são retratados como heróis imperfeitos e falíveis, com qualidades e defeitos humanos. Os deuses gregos são retratados como seres poderosos, capazes de interferir na vida dos mortais, mas também sujeitos a conflitos e disputas entre si.",
			"Muitos dos mitos gregos foram representados na arte, na literatura e no teatro ao longo dos séculos, fornecendo uma fonte inesgotável de inspiração para artistas e escritores de todo o mundo. Alguns dos mitos mais famosos incluem a história de Prometeu e o fogo, a lenda de Orfeu e Eurídice, a saga de Ulisses e sua viagem de volta para casa após a Guerra de Troia e a luta de Perseu contra a Medusa.",
			"A mitologia grega teve uma influência duradoura na cultura ocidental, moldando a literatura, a arte, a filosofia e a política por séculos. Ainda hoje, a rica tradição mitológica da Grécia continua a fascinar e inspirar, fornecendo uma janela para a rica história e cultura de uma das civilizações mais importantes do mundo antigo.",
		],
		address: "greek",
	},
	{
		name: "Zeus",
		image_path: "/assets/greek/deus-zeus.jpg",
		overview: [
			"Zeus é o rei dos deuses do Olimpo e é conhecido como o senhor do céu e do trovão.",
			"Ele é considerado um dos deuses mais poderosos da mitologia grega e é o deus da lei, da ordem e da justiça.",
			"Apesar de ser casado com Hera, Zeus é conhecido por suas muitas aventuras amorosas com outras deusas e mortais.",
		],
	},
	{
		name: "Poseidon",
		image_path: "/assets/greek/deus-poseidon.jpg",
		overview: [
			"Poseidon é o deus do mar e dos terremotos e irmão de Zeus e Hades.",
			"Ele é frequentemente retratado segurando um tridente, que lhe dá controle sobre as águas, e é conhecido por sua ira e seu temperamento.",
			"Além de controlar o mar, ele também é o protetor dos cavalos e é frequentemente retratado montando um deles.",
		],
	},
	{
		name: "Atena",
		image_path: "/assets/greek/deusa-atena.jpg",
		overview: [
			"Atena é a deusa da sabedoria, da estratégia e da guerra e é filha de Zeus.",
			"Ela é frequentemente retratada segurando uma lança e um escudo, e é conhecida por sua astúcia e inteligência.",
			"Além de ser uma deusa guerreira, Atena é também a padroeira da cidade de Atenas e é associada à justiça e à civilização.",
		],
	},
	{
		name: "Ártemis",
		image_path: "/assets/greek/deusa-artemis.jpg",
		overview: [
			"Artemis é a deusa da caça, da natureza selvagem e da lua.",
			"Ela é conhecida por sua habilidade em caçar animais selvagens e proteger a natureza.",
			"Além de ser a deusa da caça, Artemis também é a protetora das mulheres e das crianças.",
		],
	},
	{
		name: "Apolo",
		image_path: "/assets/greek/deus-apolo.jpg",
		overview: [
			"Apolo é o deus da música, da poesia e do sol.",
			"Ele é conhecido por sua habilidade em inspirar os artistas e poetas.",
			"Além de ser o deus da música, Apolo também é o protetor das artes e da medicina.",
		],
	},
	{
		name: "Demeter",
		overview: [
			"Deméter é a deusa da agricultura, da colheita e da fertilidade.",
			"Ela é conhecida por sua habilidade em garantir a fertilidade da terra e proteger as plantações.",
			"Além de ser a deusa da agricultura, Deméter é a mãe de Perséfone, a rainha do submundo.",
		],
		image_path: "/assets/greek/deusa-demeter.jpg",
	},
	{
		name: "Ares",
		overview: [
			"Ares é o deus da guerra, da violência e do conflito.",
			"Ele é conhecido por sua habilidade em liderar os exércitos e causar destruição.",
			"Além de ser o deus da guerra, Ares também é o protetor dos guerreiros e dos soldados.",
		],
		image_path: "/assets/greek/deus-ares.jpg",
	},
	{
		name: "Hera",
		overview: [
			"Hera é a deusa do casamento, da família e do lar.",
			"Ela é conhecida por sua habilidade em proteger o casamento e a união familiar.",
			"Além de ser a deusa do casamento, Hera também é a rainha dos deuses e a protetora das mulheres casadas.",
		],
		image_path: "/assets/greek/deusa-hera.jpg",
	},
	{
		name: "Afrodite",
		overview: [
			"Afrodite é a deusa do amor, beleza e sexualidade na mitologia grega.",
			"Ela é frequentemente representada como uma jovem e bela mulher, adornada com jóias e vestida com roupas elegantes.",
			"Afrodite é conhecida por seu charme e sedução, e é capaz de influenciar os corações e mentes das pessoas.",
		],
		image_path: "/assets/greek/deusa-afrodite.jpg",
	},
	{
		name: "Hefesto",
		overview: [
			"Hefesto é o deus do fogo, da metalurgia e dos ferreiros.",
			"Ele é frequentemente retratado como um homem idoso e feio, com um pé coxo e um rosto deformado.",
			"No entanto, ele é extremamente habilidoso em sua arte e é capaz de criar as mais belas obras de metalurgia.",
		],
		image_path: "/assets/greek/deus-hefesto.jpg",
	},
	{
		name: "Dionísio",
		overview: [
			"Dionísio é o deus do vinho, da fertilidade e da celebração.",
			"Ele é conhecido por sua habilidade em trazer alegria e êxtase aos mortais.",
			"Dionísio também é o deus da fertilidade, e é responsável por garantir o crescimento das plantas e a prosperidade das colheitas.",
		],
		image_path: "/assets/greek/deus-dionisio.jpg",
	},
	{
		name: "Hermes",
		image_path: "/assets/greek/deus-hermes.jpg",
		overview: [
			"Hermes é o deus da comunicação, do comércio e dos viajantes.",
			"Ele é conhecido por sua habilidade em proteger os viajantes e facilitar a comunicação entre os mortais e os deuses.",
			"Hermes também é o mensageiro dos deuses, e é responsável por levar as mensagens divinas aos mortais.",
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
