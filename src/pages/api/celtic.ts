import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		name: "Mitologia Celta",
		overview: [
			"A mitologia celta é uma das mais antigas e menos conhecidas do mundo, repleta de deuses, deusas e criaturas místicas que habitavam a natureza e influenciavam a vida cotidiana das tribos celtas. A mitologia celta é caracterizada pela forte conexão com a natureza e pela valorização da sabedoria e da poesia.",
			"Os celtas acreditavam em um panteão de deuses e deusas que governavam o universo e influenciavam a vida cotidiana das pessoas. Muitos desses deuses eram associados a elementos naturais, como a terra, o ar, a água e o fogo, e tinham poderes específicos, como a cura, a fertilidade e a guerra. Além dos deuses, a mitologia celta também apresenta uma grande variedade de criaturas místicas, como os banshees, os leprechauns e os dragões.",
			"Essa mitologia é repleta de simbolismo e metáfora, com muitas histórias sendo contadas por meio da poesia e da música. Muitos dos mitos celtas foram transmitidos oralmente por gerações e só foram registrados por escrito muito depois, o que torna a mitologia celta mais difícil de estudar do que outras mitologias.",
			"A mitologia celta teve uma influência duradoura na cultura europeia, especialmente na literatura, na música e na arte. Muitos escritores e artistas se inspiraram na rica tradição mitológica celta para criar obras de arte e literatura que capturam a magia e o mistério do mundo celta. Mesmo hoje, a mitologia celta continua a fascinar e intrigar, fornecendo um vislumbre fascinante de uma das culturas mais antigas e enigmáticas da Europa.",
		],
		address: "celtic",
	},
	{
		name: "Dagda",
		image_path: "/assets/celtic/deus-dagda.webp",
		overview: [
			"Dagda é um deus associado à fertilidade, agricultura, cura e morte. Ele é frequentemente retratado como um homem idoso e poderoso, com um grande caldeirão mágico, um porrete e uma harpa mágica.",
			"Dagda é visto como um deus gentil e generoso, que tem o poder de curar os doentes e de ressuscitar os mortos. Ele também é um deus da vida e da morte, e é responsável por levar as almas dos mortos para o outro mundo.",
			"Na mitologia celta, Dagda é frequentemente associado a cerimônias religiosas e celebrações, especialmente no festival celta de Samhain, que marca o fim da colheita e o início do ano novo celta. Ele é visto como um protetor da terra e dos seus habitantes, e é frequentemente invocado para trazer fertilidade e prosperidade para as terras.",
			"Dagda é um deus sábio e poderoso, que tem o poder de controlar o tempo e o clima. Ele é frequentemente retratado como um pai amoroso, que cuida de seus filhos e guia-os através da vida.",
			"Dagda é uma figura importante da mitologia celta, e é visto como uma divindade poderosa e protetora da natureza e de seus habitantes. Ele é um símbolo da força e da sabedoria da terra, e é honrado em festivais e cerimônias religiosas em todo o mundo.",
		],
	},
	{
		name: "Cuchulainn",
		image_path: "/assets/celtic/deus-cu-chulainn.webp",
		overview: [
			"Cuchulain é um dos heróis mais famosos da mitologia celta. Ele é conhecido por sua força sobrenatural e sua habilidade na batalha, além de sua personalidade impetuosa e apaixonada.",
			"Cuchulain nasceu com o nome de Setanta, mas recebeu seu nome atual após matar o cão de guarda do líder da Irlanda, que foi substituído pelo próprio Cuchulain como guardião. Esse incidente o tornou um herói, e ele foi treinado na arte da guerra por seu tio Conchobar.",
			"Durante sua vida, Cuchulain enfrentou inúmeros desafios e batalhas, incluindo uma invasão de guerreiros estrangeiros liderados por Maeve, a rainha de Connaught. Cuchulain lutou bravamente contra eles, sozinho, e se tornou lendário por sua coragem e habilidade.",
			'Uma das histórias mais famosas envolvendo Cuchulain é a do "combate único", em que ele é desafiado para uma batalha pelo guerreiro Ferdia, seu melhor amigo e antigo companheiro de treinamento. Embora relutante, Cuchulain eventualmente mata Ferdia em uma luta épica.',
			"Cuchulain é um dos personagens mais emblemáticos da mitologia celta, simbolizando a coragem, a habilidade e a lealdade. Sua história é contada em muitas lendas e poemas, e sua imagem é frequentemente usada como um símbolo de orgulho irlandês e celta.",
		],
	},
	{
		name: "Danu",
		image_path: "/assets/celtic/deusa-danu.webp",
		overview: [
			"Danu é uma deusa da mitologia celta, frequentemente associada com a natureza, a fertilidade e a sabedoria. Ela é vista como a mãe de todos os deuses e deusas celtas, e é frequentemente retratada como uma mulher sábia e poderosa.",
			"Danu era adorada em toda a região que hoje conhecemos como Irlanda e Escócia, e muitas lendas celtas falam de sua importância na criação do mundo e dos seres humanos. Ela também era vista como uma protetora dos rios, das árvores e das plantas.",
			"Em algumas tradições celtas, Danu era vista como uma deusa da guerra e da soberania, que liderava exércitos divinos na batalha e concedia aos reis e rainhas a autoridade para governar. Ela também era considerada uma patrona das artes e da poesia.",
			"Danu era frequentemente honrada com oferendas de frutas, leite e mel, e muitas vezes era invocada em cerimônias de fertilidade e de proteção. Ela também era vista como uma protetora das mulheres grávidas e dos recém-nascidos.",
			"Embora Danu tenha sido esquecida por muitos no mundo moderno, ela ainda é lembrada e homenageada por muitos praticantes de religiões neopagãs e reconstrucionistas celtas como uma importante deusa da natureza, da fertilidade e da sabedoria.",
		],
	},
	{
		name: "Cernunnos",
		image_path: "/assets/celtic/deus-cernunnos.webp",
		overview: [
			"Cernunnos é um deus associado à natureza, fertilidade, animais e renovação. Ele é frequentemente retratado como um homem com chifres de cervo, sentado em posição de lótus e com animais ao seu redor.",
			"Cernunnos é considerado um deus da vida selvagem, e sua imagem é frequentemente encontrada em inscrições e artefatos da Idade do Ferro na Europa. Ele é visto como um protetor dos animais e das florestas, e muitas vezes é associado à caça e à agricultura.",
			"Segundo a lenda, Cernunnos é um deus antigo e sábio, que possui conhecimentos profundos sobre a natureza e seus mistérios. Ele é visto como um guia espiritual para aqueles que desejam se conectar com a natureza e encontrar equilíbrio e harmonia em suas vidas.",
			"Cernunnos é frequentemente associado a outros deuses da natureza, como o deus grego Pã e o deus romano Fauno. Sua imagem é frequentemente encontrada em altares e santuários dedicados à natureza, e é honrado em festivais e celebrações pagãs em todo o mundo.",
			"Na mitologia celta, Cernunnos é visto como um deus poderoso e misterioso, que representa a conexão entre a humanidade e a natureza. Ele é um símbolo da sabedoria e do poder da natureza, e é honrado como uma divindade importante da tradição celta.",
		],
	},
	{
		name: "Lugh",
		image_path: "/assets/celtic/deus-lugh.webp",
		overview: [
			"Lugh é um dos deuses mais importantes da mitologia celta, sendo associado à luz, à cura, à habilidade e à vitória. Ele é frequentemente descrito como um guerreiro e um artesão habilidoso, além de ser um poeta e músico talentoso.",
			'Lugh é considerado um deus solar, e é associado ao sol nascente, à primavera e ao equinócio de verão. Ele é também conhecido como Samildánach, ou "aquele que é habilidoso em muitas artes", sendo um mestre em várias atividades, como artesanato, poesia, música e estratégia militar.',
			"Segundo a lenda, Lugh liderou as Tuatha Dé Danann na batalha contra os Fomorianos, e venceu graças às suas habilidades excepcionais. Ele também foi responsável por liderar a construção da colina de Tara, um importante centro de cerimônias religiosas e políticas na Irlanda.",
			"Lugh é frequentemente associado a outros deuses solares, como o deus grego Apolo e o deus romano Júpiter, e sua imagem é frequentemente encontrada em inscrições e artefatos da Idade do Ferro na Europa.",
			"Na mitologia celta, Lugh é visto como um deus poderoso e benevolente, que representa a habilidade, a vitória e a luz. Ele é um símbolo da cultura celta e da rica tradição da Irlanda, e é honrado em festivais e celebrações em todo o mundo.",
		],
	},
	{
		name: "Brigit",
		image_path: "/assets/celtic/deusa-brigit.webp",
		overview: [
			"Brigit é uma deusa que representa a fertilidade, a cura e o fogo sagrado. Ela é considerada uma deusa tripla, representando três aspectos diferentes: a donzela, a mãe e a anciã. Como donzela, ela simboliza a juventude, a beleza e a inspiração. Como mãe, ela representa a maternidade, a proteção e a cura. E como anciã, ela personifica a sabedoria, a transformação e a renovação.",
			"Além de suas características divinas, Brigit também é lembrada por sua influência na vida cotidiana das pessoas. Ela é associada ao fogo sagrado, que era mantido aceso em sua honra nas casas e templos. Esse fogo era considerado uma fonte de proteção, iluminação e inspiração. Brigit também é reconhecida por sua habilidade em curar doenças e ferimentos, e muitas vezes é invocada em rituais de cura.",
			"Brigit é frequentemente associada à primavera e ao início do ciclo agrícola. Seu festival, Imbolc, é comemorado em 1º de fevereiro e marca o início do fim do inverno e o despertar da natureza. Nessa data, era comum fazer oferendas em sua honra, como tranças de cabelo e ramos de árvores.",
			"Além da Irlanda, onde Brigit era venerada como uma das principais divindades, sua influência se estendia por outras regiões celtas, como a Escócia e a Bretanha. Seu nome também foi associado a lugares sagrados, como poços, rios e colinas. Acredita-se que esses locais sejam portais para o mundo dos deuses e que ofereçam proteção e inspiração aos que os visitam.",
			"Apesar da influência cristã na Irlanda, Brigit continuou sendo adorada pelos celtas por séculos, e sua figura permanece como uma das mais importantes da mitologia celta. Seu legado também é lembrado por meio de histórias, poemas e canções que celebram sua beleza, sabedoria e poder divino.",
		],
	},

	{
		name: "Morrigan",
		image_path: "/assets/celtic/deusa-morrigan.webp",
		overview: [
			"Morrigan é uma das principais figuras da mitologia celta. Ela é conhecida por sua aparência sinistra, com cabelos negros e roupas escuras, e por sua habilidade em se transformar em diferentes animais.",
			"Morrigan é associada à guerra e à morte, e muitas vezes é vista como uma deusa da batalha. Ela é frequentemente retratada como uma guerreira que lidera as tropas para a vitória.",
			"Além de sua conexão com a guerra, Morrigan também é vista como uma protetora da natureza e dos animais. Ela é associada a corvos e outros pássaros de rapina, e é frequentemente retratada com esses animais.",
			"Morrigan é uma figura complexa e muitas vezes misteriosa. Ela é vista como uma deusa que pode trazer tanto a morte quanto a cura, e muitas vezes é retratada como uma figura dualista, com aspectos tanto positivos quanto negativos.",
			"Hoje em dia, Morrigan continua a ser uma figura popular na cultura celta e na espiritualidade pagã. Ela é vista como uma deusa forte e poderosa que pode ajudar na batalha e na superação de desafios difíceis.",
		],
	},
	{
		name: "Belenus",
		image_path: "/assets/celtic/deus-belenus.webp",
		overview: [
			"Belennus é uma divindade que representa o sol e a luz. Sua origem é incerta, mas é provável que tenha sido adorado pelos celtas da região da Gália. Ele é frequentemente retratado como um jovem guerreiro, vestindo uma armadura e um capacete com chifres.",
			"Acredita-se que Belennus seja uma das divindades mais importantes do panteão celta, associado a cura, purificação e proteção. Ele é frequentemente associado a águas curativas, locais sagrados e fontes termais. Seu culto se espalhou pela Europa e muitos templos foram erguidos em sua homenagem.",
			"Além de sua conexão com o sol e a luz, Belennus também é frequentemente associado à cura e à proteção. Ele é conhecido por seu poder de afastar doenças e malefícios, sendo muitas vezes invocado em rituais de cura e purificação. Alguns mitos celtas relatam que Belennus foi capaz de curar os ferimentos de outros deuses e mortais.",
			"Na mitologia celta, Belennus é frequentemente associado a rituais de fertilidade e de renovação da vida. Ele é considerado um deus benevolente e protetor, que pode trazer prosperidade e abundância às colheitas. Seu culto está intimamente ligado às celebrações de Beltane, um festival que marca o início do verão na cultura celta.",
			"Belennus é um dos deuses mais importantes da mitologia celta, associado à luz, à cura e à fertilidade. Seu culto se espalhou por toda a Europa, e muitos templos e locais sagrados foram erguidos em sua homenagem. Ainda hoje, ele é considerado uma figura importante na cultura celta e é frequentemente invocado em rituais e celebrações.",
		],
	},
	{
		name: "Taranis",
		image_path: "/assets/celtic/deus-taranis.webp",
		overview: [
			"Taranis era o deus celta do trovão e do relâmpago. Ele era frequentemente retratado como um homem de barba e cabelos longos segurando um raio em uma das mãos e um martelo na outra.",
			"Taranis era uma das divindades mais importantes da mitologia celta, frequentemente associado com a realeza, a guerra e a justiça. Ele era adorado em toda a região que hoje conhecemos como França, Bélgica, Luxemburgo e partes da Alemanha e Suíça.",
			"Em algumas tradições celtas, Taranis era associado com a roda, que representava a rotação do universo e a passagem do tempo. Ele era frequentemente chamado de 'Senhor da Roda' e era considerado um protetor dos viajantes e dos viajantes. Ele também era visto como um mediador entre os deuses e os mortais, capaz de trazer justiça e equilíbrio ao mundo.",
			"Os celtas costumavam oferecer sacrifícios a Taranis, geralmente animais como bois ou cavalos. Acredita-se que esses sacrifícios foram feitos para apaziguar sua ira e garantir que ele não lançasse tempestades violentas ou raios mortais sobre a terra.",
			"Embora Taranis não seja tão conhecido quanto outras divindades celtas como Cernunnos ou Morrigan, ele ainda é lembrado e homenageado por muitos pagãos modernos e praticantes da bruxaria como um símbolo do poder divino da natureza e do universo.",
		],
	},
	{
		name: "Arawn",
		image_path: "/assets/celtic/deus-arawn.webp",
		overview: [
			"Arawn é um deus da mitologia celta, associado com a vida após a morte e o submundo. Ele é frequentemente retratado como um homem com uma aparência sombria e assustadora, vestido com peles de animais e segurando um cajado.",
			"Arawn era uma das divindades mais importantes para os celtas da região que hoje conhecemos como País de Gales. Ele era visto como um governante benevolente do reino subterrâneo conhecido como Annwn, que era o destino final para as almas dos mortos.",
			"Em algumas tradições celtas, Arawn era associado com a caça selvagem, que consistia em um grupo de cães fantasmagóricos liderados pelo próprio deus. Acredita-se que a caça selvagem aparecesse no céu noturno e que seu uivo sinistro fosse um prenúncio de morte iminente.",
			"Arawn era frequentemente honrado com oferendas de animais, alimentos e bebidas alcoólicas, feitas por aqueles que buscavam sua proteção e bênção. Ele era especialmente importante para os caçadores, que frequentemente faziam oferendas a ele antes de sair em busca de presas.",
			"Embora Arawn seja um deus menos conhecido do que outros na mitologia celta, ele ainda é lembrado e homenageado por muitos pagãos modernos e praticantes da bruxaria como um protetor dos mortos e um guia para o submundo.",
		],
	},
	{
		name: "Epona",
		image_path: "/assets/celtic/deusa-epona.webp",
		overview: [
			"Epona é uma deusa da mitologia celta, frequentemente associada com os cavalos, a fertilidade e a proteção. Ela é vista como a protetora dos cavalos, dos cavaleiros e dos animais em geral, e é frequentemente retratada como uma mulher montada em um cavalo.",
			"Era adorada em toda a região que hoje conhecemos como França, Bélgica, Alemanha e partes da Itália e Suíça. Ela era vista como uma protetora dos viajantes e dos comerciantes, e muitos acreditavam que ela poderia trazer riqueza e boa sorte.",
			"Em algumas tradições celtas, Epona era vista como uma deusa guerreira, que liderava exércitos de cavaleiros divinos em batalha. Ela também era considerada uma protetora das artes e da poesia, e muitas histórias celtas falam de seu papel como patrona dos bardos e dos músicos.",
			"Epona era frequentemente honrada com oferendas de grãos, frutas e mel, e muitas vezes era invocada em cerimônias de fertilidade e de proteção. Ela também era vista como uma protetora das mulheres grávidas e dos recém-nascidos.",
			"Embora ela tenha sido esquecida por muitos no mundo moderno, ela ainda é lembrada e homenageada por muitos praticantes de religiões neopagãs e reconstrucionistas celtas como uma importante deusa da fertilidade, da proteção e dos cavalos.",
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
