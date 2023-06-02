import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		name: "Mitologia Africana",
		overview: [
			"A mitologia africana é uma coleção rica e diversa de histórias e crenças que têm sido passadas oralmente de geração em geração. Essas histórias são originárias de diferentes regiões da África e têm muitas variações e interpretações.",
			"A mitologia africana geralmente enfatiza a conexão entre os seres humanos e a natureza, com muitas histórias girando em torno da relação entre os seres humanos, os deuses e o mundo natural. A mitologia também aborda temas universais, como a origem do mundo, a criação da humanidade, a vida após a morte e o bem e o mal.",
			"Uma característica importante da mitologia africana é a presença de um panteão de deuses e deusas. Esses deuses e deusas desempenham papéis importantes nas histórias, sendo muitas vezes responsáveis por criar o mundo e proteger a humanidade.",
			"Ao longo dos anos, a mitologia africana tem sido usada para ensinar valores morais e éticos, preservar a história e a cultura africanas, e celebrar a conexão entre os seres humanos e o mundo natural. A mitologia continua a ser uma parte importante da vida cotidiana em muitas partes da África, mantendo-se viva por meio de contadores de histórias e rituais.",
			"É importante lembrar que a mitologia africana é diversa e cada região pode ter suas próprias divindades e histórias, portanto, esta sessão não é exata, e pode variar de acordo com a regiões do mundo.",
		],
		address: "afro",
	},
	{
		name: "Exu",
		image_path: "/assets/african/orixa-exu.webp",
		overview: [
			"Exu é um Orixá muito importante na religião yorubá e é conhecido como o mensageiro dos deuses. Ele é visto como um ser astuto e brincalhão, que tem a capacidade de ajudar ou prejudicar as pessoas, dependendo de como é tratado. Sua figura é frequentemente associada a travessuras e enganos, mas também é considerado um grande protetor.",
			"Na mitologia yorubá, Exu é retratado como um ser ambíguo e multifacetado, que pode assumir muitas formas diferentes. Ele é frequentemente representado como um homem jovem, ágil e astuto, que está sempre pronto para pregar uma peça em alguém. No entanto, também é descrito como um idoso sábio, que possui grande conhecimento e sabedoria.",
			"Ele é responsável por manter o equilíbrio e a ordem no mundo, e é frequentemente invocado para ajudar em questões relacionadas ao amor, ao dinheiro e à proteção. No entanto, seu papel também inclui a punição daqueles que desrespeitam as leis divinas. Por isso, é importante tratar Exu com respeito e reverência, oferecendo-lhe oferendas e cumprindo suas demandas.",
			"Apesar de sua reputação como um ser astuto e brincalhão, Exu é um Orixá muito respeitado e adorado na religião yorubá. Sua figura é vista como um intermediário entre o mundo humano e o divino, e é frequentemente invocado em cerimônias religiosas e rituais. Muitos acreditam que a chave para se obter o favor de outros Orixás é passar pelo teste de Exu, mostrando respeito e sabedoria em suas ações.",
			"Alguns o veem como um ser maléfico e perigoso, enquanto outros o reverenciam como um protetor e benfeitor. No entanto, em todas as tradições, ele é visto como uma figura poderosa e essencial para o equilíbrio e a harmonia no mundo.",
		],
	},
	{
		name: "Oxum",
		image_path: "/assets/african/orixa-oxum.webp",
		overview: [
			"Oxum é vista como a deusa da beleza, do amor, da fertilidade e da água doce. Sua figura é frequentemente associada a rios, cachoeiras e fontes de água, e é considerada uma protetora dos seres humanos que dependem da água para sobreviver.",
			"Na mitologia yorubá, Oxum é descrita como uma mulher linda e sedutora, que é capaz de enfeitiçar qualquer um com sua beleza e graça. Ela é frequentemente representada usando um espelho, simbolizando sua vaidade e amor pela beleza. Além disso, ela é vista como uma mãe amorosa e carinhosa, que cuida dos filhos com cuidado e dedicação.",
			"Em muitas ocasiões, Oxum é invocada  na religião yorubá, incluindo casamentos, nascimentos, batismos e outras cerimônias importantes. Ela é vista como uma protetora dos casais e das famílias, e é frequentemente invocada para ajudar nas questões relacionadas ao amor e à fertilidade. Além disso, ela é vista como uma curandeira poderosa, capaz de curar doenças e aliviar a dor.",
			"Embora seja um Orixá feminino, Oxum é venerada tanto por homens quanto por mulheres na religião yorubá. Ela é vista como uma figura de força e beleza feminina, e é respeitada por sua sabedoria e bondade. Muitos acreditam que o respeito e a adoração por Oxum são essenciais para uma vida feliz e bem-sucedida.",
			"Alguns acreditam que ela é um dos Orixás mais importantes, enquanto outros a consideram uma figura menor. No entanto, em todas as tradições, ela é vista como uma figura importante e essencial para a vida e a felicidade dos seres humanos.",
		],
	},
	{
		name: "Xangô",
		image_path: "/assets/african/orixa-xango.webp",
		overview: [
			"Xangô é um dos Orixás mais populares na religião yorubá. Ele é visto como o deus do trovão, do fogo e da justiça, e é frequentemente representado como um guerreiro forte e corajoso. Sua figura é associada a raios, tempestades e o poder da natureza.",
			"Na mitologia yorubá, Xangô é descrito como um homem sábio e justo, que é capaz de controlar o fogo e o trovão com suas mãos. Ele é frequentemente representado com um machado duplo, que simboliza sua habilidade em cortar a injustiça e a desonestidade. Além disso, ele é visto como um patrono das artes e da cultura, e é frequentemente invocado em cerimônias de música e dança.",
			"Xangô é invocado em muitas ocasiões na religião yorubá, incluindo julgamentos, disputas e outras questões relacionadas à justiça. Ele é visto como um defensor dos inocentes e um castigador dos culpados. Além disso, ele é visto como um protetor dos lares e das famílias, capaz de afastar os maus espíritos e as energias negativas.",
			"Xangô é adorado tanto por homens quanto por mulheres na religião yorubá. Ele é visto como uma figura de grande força e coragem, e é respeitado por sua sabedoria e justiça. Muitos acreditam que o respeito e a adoração por Xangô são essenciais para a obtenção de proteção e sucesso na vida.",
			"Alguns o veem como um Orixá violento e implacável, enquanto outros o reverenciam como um protetor e guardião. No entanto, em todas as tradições, ele é visto como uma figura poderosa e essencial para a justiça e a proteção dos seres humanos.",
		],
	},
	{
		name: "Olorum",
		image_path: "/assets/african/orixa-olorum.webp",
		overview: [
			"Olorum é considerado o Deus Supremo no panteão da religião yorubá. Ele é descrito como um ser supremo, infinito e eterno que governa o universo inteiro. Sua presença é sentida em todas as coisas e seres vivos, e é responsável por criar e manter o equilíbrio e a harmonia em toda a criação.",
			"Na mitologia yorubá, Olorum é considerado o criador de todos os Orixás e também dos seres humanos. Ele é muitas vezes retratado como um ser distante e inacessível, e por isso é raramente cultuado diretamente pelos fiéis. Em vez disso, as pessoas geralmente se voltam para os Orixás menores, que são mais próximos dos seres humanos e podem interceder em seu nome com Olorum.",
			"Apesar de sua posição de Deus supremo, Olorum não é considerado um ser distante e inalcançável. Em vez disso, ele é visto como um ser que se importa com suas criações e está sempre disposto a ouvir as orações e súplicas de seus filhos. Embora ele seja frequentemente retratado como sendo neutro e impessoal, ele também é visto como um ser amoroso e compassivo que se preocupa com o bem-estar de seus filhos.",
			"É importante destacar que, embora Olorum seja um dos principais Orixás na religião yorubá, sua figura é vista de maneiras diferentes em diferentes tradições. Alguns acreditam que ele é o único Deus verdadeiro, enquanto outros o veem como um ser divino entre muitos. Em qualquer caso, sua posição como criador e mantenedor do universo é amplamente reconhecida e respeitada.",
		],
	},
	{
		name: "Ogum",
		image_path: "/assets/african/orixa-ogum.webp",
		overview: [
			"Ogum é uma divindade poderosa, frequentemente retratada como um guerreiro com força e coragem, empunhando tanto a espada como o escudo em batalha. Ogum representa a justiça, a protecção e a prosperidade; ele mantém a guarda sobre os seus seguidores para garantir que eles estão a salvo de danos.",
			"Em muitas histórias tradicionais sobre Ogum, diz-se que ele desceu do céu usando ferramentas de ferro que lhe foram dadas pelos deuses acima. A sua missão era proteger aqueles na Terra que tinham sido injustiçados ou oprimidos devido à sua raça ou estatuto de classe. Com o tempo, isto evoluiu para uma associação com facções beligerantes onde Ogum traria paz através da sua intervenção divina - um papel que lhe valeu um imenso respeito entre os seus adoradores ao longo da história de África até à era moderna de hoje.",
			"Devido em grande parte ao seu legado duradouro dentro da cultura africana, acredita-se que a invocação do poder de Ogum ajudará a afastar o perigo e, ao mesmo tempo, a fornecer sustento espiritual durante os tempos de dificuldade. Como tal , as ofertas são feitas todos os dias em vários santuários dedicados exclusivamente a honrar esta amada divindade - assegurando assim bênçãos contínuas a todos os que procuram a sua graça.",
		],
	},
	{
		name: "Iansã",
		image_path: "/assets/african/orixa-iansa.webp",
		overview: [
			"Iansã é uma deusa africana que se acredita existir desde os tempos mais remotos. Ela simboliza a vida, a morte e a fertilidade e tem uma forte ligação com o mundo natural. Iansa é amplamente adorada em grande parte da África, pois ela incorpora muitos aspectos da vida, desde a criação até a destruição.",
			"A forma física de Iansã varia dependendo de quem conta sua história; às vezes descrita como uma velha ou jovem, enquanto outras a descrevem como um pássaro ou até mesmo uma figura semelhante a uma cobra. Independentemente de como ela aparece visualmente, o poder de Iansa permanece forte entre aqueles que honram sua presença em suas vidas e comunidades.",
			"Diz-se que Iansã pode ser benevolente e cruel, dependendo da situação em questão; fornecendo proteção para aqueles que a procuram, mas também se vingando daqueles que cruzam seu caminho injustamente, causando infortúnio ou doença, se necessário. Apesar dessa dualidade, no entanto, a maioria acredita que, no final das contas, tudo dará certo quando eles permanecerem fiéis a honrar o nome dessa poderosa divindade.",
		],
	},
	{
		name: "Iemanjá",
		image_path: "/assets/african/orixa-iemanja.webp",
		overview: [
			"Iemanjá é uma deusa africana que tem sido adorada por séculos por muitas culturas e religiões diferentes. Ela é frequentemente chamada de “Mãe das Águas”, representando fertilidade, abundância, proteção e prosperidade. Iemanjá foi mencionada pela primeira vez na antiga mitologia iorubá, onde se dizia ser uma poderosa divindade feminina com controle sobre as marés do oceano e toda a vida dentro delas. Seu poder se estendia além de apenas controlar a água; ela também tinha domínio sobre o amor, a sorte, a saúde e a riqueza.",
			"O símbolo de Iemanjá é geralmente representado por uma figura semelhante a uma sereia vestindo vestes azuis ou roupas adornadas com pérolas ou conchas brancas; isso representa sua conexão com o mar, bem como sua beleza divina. Além disso, pode ser visto em estátuas de mulheres segurando redes de pesca cheias de oferendas para Iemanjá, como frutas ou flores, que significam abundância da generosidade da natureza concedida por sua graça. As oferendas são feitas durante as festas realizadas na véspera de Ano Novo, quando as pessoas agradecem por suas bênçãos ao longo do ano, esperando receber mais boa sorte em troca da generosidade de Iemanjá.",
			"Nos tempos modernos, houve inúmeras tentativas de reviver as crenças tradicionais sobre deusas como Iemana entre várias comunidades africanas ao redor do mundo, incluindo o Brasil, onde milhares saem todos os anos durante as celebrações do Carnaval vestidos com trajes coloridos dedicados a homenagear esta poderosa divindade feminina que permanece reverenciada mesmo hoje, apesar de ter sido amplamente esquecido até recentemente devido ao seu ressurgimento entre aqueles que olham para trás em suas raízes culturais em busca de orientação espiritual de divindades como essas que já foram tão importantes, mas agora permanecem sub-representadas fora de certos círculos que ainda os adoram com devoção hoje.",
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
