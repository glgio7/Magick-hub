import { NextApiRequest, NextApiResponse } from "next";

const data = [
	{
		title: "Mitologia Egípcia",
		overview: [
			"A mitologia egípcia é uma das mais fascinantes e complexas da história da humanidade, com uma riqueza de deuses, mitos e lendas que influenciaram não apenas a cultura egípcia, mas também a de muitas outras civilizações ao longo dos séculos. Os egípcios acreditavam em uma grande variedade de deuses, cada um com sua própria personalidade, história e função, desde os deuses solares até os deuses da morte e do submundo.",
			"A mitologia egípcia está intimamente ligada à religião egípcia, que era central na vida cotidiana do povo egípcio. Os egípcios acreditavam na existência de uma vida após a morte, e muitas das práticas religiosas eram focadas em garantir uma passagem segura para o outro lado. O faraó, como líder espiritual e temporal do Egito, desempenhava um papel importante na religião e na mitologia egípcias.",
			"Os mitos e lendas egípcios são repletos de simbolismo e metáfora, e muitos deles foram representados na arte egípcia, desde os hieróglifos até as estátuas e murais que adornam os templos e túmulos. Alguns dos mitos mais famosos incluem a história de Osíris e Ísis, a batalha entre Hórus e Seth, e a criação do mundo por Rá, o deus sol.",
			"A mitologia egípcia é uma fonte inesgotável de inspiração para a literatura, a arte e a cultura popular, com muitas histórias e personagens sendo reinterpretados e adaptados ao longo dos séculos. Mesmo hoje, a rica tradição mitológica do Egito continua a fascinar e intrigar, fornecendo um vislumbre fascinante de uma das civilizações mais antigas e influentes da história.",
		],
		address: "egypt",
		name: "",
		image_path: "",
	},
	{
		name: "Rá",
		image_path: "/assets/egypt/deus-ra.jpg",
		overview: [
			"Rá (do português Ré) é o Deus Egípcio do Sol sendo a principal divindade da religião egípcia. O culto ao Deus Sol foi muito próspero no Egito, sendo a principal forma de adoração e um culto oficial por cerca de vinte séculos.",
			"As divindades geralmente estão ligados a fenômenos da natureza, e, em função da luz no cultivo dos alimentos, os antigos egípcios atribuíram a Rá grande importância.",
			"Além de ser a divindade central do panteão egípcio, Rá é também um deus primordial e criador dos deuses e da ordem divina, junto de sua esposa, a Deusa Ret (cujo nome é a versão feminina do nome Ré e pode ser a mesma divindade) originaram a genealogia: Shu e Tefnut, Geb e Nut, Osíris, Seth, Ísis e Néftis.",
			"Rá, o Deus do Sol era representado comumente pelo o sol do meio-dia e possuía o obelisco como insígnia, o qual era considerado um raio do sol petrificado. Na sua forma animal, poderia transmutar-se em falcão, leão, gato, ou no pássaro Benu.",
			"Note que o Deus Sol possuía quatro fases: a primeira ao nascer do sol, a segunda ao meio-dia, a terceira ao pôr-do-sol e a quarta fase durante a noite. Contudo, a principal fase é a do meio-dia, quando ele é representado por uma ave, comumente o falcão.",
			"Rá e a Criação",
			"Segundo a mitologia egípcia, todas as formas de vida foram criadas por Rá, ao pronunciar seus nomes secretos.",
			"Outras versões também afirmam que os seres humanos foram criados a partir das lágrimas e suor de Rá, o qual ficara tão esgotado pelo trabalho da criação que lhe fora atribuído por seu pai Nun, que chorou, e de suas lágrimas brotaram o homem e a mulher.",
			"Os Sincretismos de Rá",
			'A cidade de Lunu era o centro do culto a Rá, localizada ao norte do país. Mais tarde os gregos denominaram aquela cidade como Heliópolis ("cidade do sol") e lá reinava o deus solar local, Atum, daí a fusão Atum-Rá.',
			"Vale destacar que Heliópolis foi um grande centro comercial do Baixo Egito e seus sacerdotes possuíam grande prestígio, o que levou os faraós de Tebas a adotarem Amon como deus supremo.",
			"Surge então, uma nova fusão, desta vez denominada Amon-Rá, protetor dos faraós. Assim, o deus Amon se tornou a divindade de destaque do panteão, pois a superposição Amon-Rá significa, basicamente, culto ao sol (Amon = culto e Rá = sol).",
			"Outro sincretismo muito conhecido é o de Rá e Hórus, o qual pode ser visto nas representações associadas ao falcão ou ao gavião, posto que, ao ser figurado com uma cabeça de falcão, era estabelecida uma identidade com Hórus, outro deus solar idolatrado em períodos mais remotos no Egito.",
		],
	},
	{
		name: "Anúbis",
		image_path: "/assets/egypt/deus-anubis.jpg",
		overview: [
			"Anúbis, também chamado de Anupo, é o deus egípcio protetor, guardião e guia dos mortos. Na mitologia egípcia, ele auxilia os mortos no encontro com Osíris.",
			"Para isso, é associado ao olho de Hórus e também apontado como o deus dos ritos funerários, como o processo de mumificação dos faraós.",
			"Na mitologia grega, Anúbis é associado a Hermes, o mensageiro dos deuses. Representado com a cabeça de chacal e corpo de homem, o culto a Anúbis teria começado entre os anos 3100 a.C. e 2686 a.C., na época da primeira dinastia do Egito.",
			"Na mão direita ele segura um cetro e na esquerda a chave que representa a vida e a morte. Além disso, Anúbis tem como símbolo o chicote que ele carrega junto ao seu corpo.",
			"Essa representação seria explicada porque naquele momento da história, os mortos eram enterrados em covas rasas. Assim, para evitar a ação de saqueadores, cães e chacais eram usados como protetores.",
			"História",
			"Alguns mitos indicam que Anúbis era filho de Osíris com Néftis e foi deus do submundo. O posto foi assumido depois por Osíris, e Anúbis, em respeito ao pai, não voltou a retomá-lo.",
			"Caberia a Anúbis a organização dos ritos funerários. O primeiro a ser submetido foi Osíris, cujo cadáver foi embalsamado para preservação, após ser assassinado por Set.",
			"Nessa versão, Osíris juntou-se com sua irmã Néftis e com ela teve um filho: Anúbis. Enciumado pela quantidade de terras que Osíris governava no Egito, seu irmão Set resolve matá-lo.",
			"No entanto, sua outra esposa-irmã, Ísis, o ressuscita e com a ajuda de Néftis e Anúbis embalsamam o corpo de Osíris. Após ser ressuscitado por Ísis, Osíris passa a viver no submundo. Ali, ele fica encarregado de pesar o coração dos mortos e decidir seu destino.",
			"Anúbis, por sua vez, ficou encarregado de preparar o ritual de morte e embalsamar os corpos. Além disso, ele ficou responsável por guiar a alma dos mortos. Ele possuía alguns sacerdotes que o ajudavam a embalsamar os corpos. Nesses rituais, seus auxiliares utilizavam máscaras de chacais.",
			"Depois de mumificado, o coração do morto era entregue a Anúbis, e da mesma forma que seu pai, ele pesava cada um.",
			'Reza a lenda que, nesse processo ele usava a chamada "pena da verdade". Se o órgão fosse mais pesado que o objeto, ele era levado para ser devorado por Ammit, o deus leão. Isso porque esse coração mais pesado que a pena estava cheio de maldade.',
			"Se o coração fosse mais leve, certamente ele estava repleto de bondade. Por conseguinte, ele era guiado por Anúbis até o mundo do além, onde governava seu pai, Osíris.",
			"Anúbis casou-se com a deusa do funerais, Anput e com ela teve uma filha Kebechet, associada ao líquido utilizado para embalsamar os corpos.",
		],
	},
	{
		name: "Hórus",
		image_path: "/assets/egypt/deus-horus.jpg",
		overview: [
			"O deus Hórus é o deus solar dos céus e um dos mais importantes da mitologia egípcia. A imagem de Hórus está associada ao firmamento, e portanto, ele representa a luz, o poder e a realeza.",
			"A partir de 2200 a.C., Hórus é elevado a símbolo do Egito unificado quando vence seu tio numa das batalhas, e o faraó, o rei egípcio, passa a ser tratado como sua encarnação.",
			"Esse deus adorado pelos egípcios é conhecido por vários nomes, os quais mudam conforme os locais de culto. Os mais usados são: Heru-sa-Aset, Her'ur, Hrw, Hr, Hor-Hekenu ou Ra-Hoor-Khuit.",
			"O deus Hórus possui corpo de homem e cabeça de falcão. No entanto, em algumas representações ele tem asas de gavião e, ao invés de uma coroa em forma cônica, em sua cabeça há um disco solar. Na mão esquerda, ele carrega uma chave que simboliza a vida e a morte.",
			"Hórus foi cultuado mesmo antes do período dinástico no Egito. Após o início do período dinástico, sua forma é fundida com a de um ser humano. A partir desse momento, ele passa a ser representado com o corpo de homem e a cabeça de falcão. Isso porque esse animal, adorado pelos egípcios, possui uma visão muito poderosa.",
			"História de Hórus",
			"Filho dos irmãos Ísis e Osíris, Hórus foi concebido quando seu pai já estava morto e mumificado. Porém, ele foi ressuscitado por sua mãe, que se transformou num pássaro com poderes.",
			"Seu pai era o deus da vegetação, do além e do julgamento, enquanto sua mãe, a deusa da natureza, da fertilidade e da magia. Antes de seu nascimento, seu pai foi assassinado pelo seu tio Set, deus do caos, que o invejava. Isso porque Osíris governava as terras do Egito e seu irmão, o deserto.",
			"Insatisfeito com isso, Set planeja matar Osíris, e com o sumiço do deus, sua irmã-esposa vai atrás de seu amado. Com medo de que ela encontrasse seu corpo, Set o corta em 14 pedaços e espalha-os pelo Egito.",
			"Determinada a oferecer um enterro digno a seu amado, Ísis percorre todo o Egito e junta 13 pedaços. Entretanto, não encontra o falo (pênis), que fora substituído por um caule vegetal.",
			"Após mumificarem o corpo de Osíris, Ísis se transforma num milhafre, uma ave que lhe concede poderes. Assim, ela consegue copular com seu amado e dessa união surge Hórus.",
			"Quando cresceu, Hórus jurou vingar a morte de seu pai travando diversas batalhas com seu tio que, por fim, foi destronado e morto por seu sobrinho. Após esse episódio, ele tornou-se o governante supremo do Egito sendo responsável por unir o Baixo-Egito e o Alto-Egito.",
			"Em uma das batalhas, contudo, Hórus perdeu visão de um dos olhos. Esse episódio passou a ser usado para explicar que o órgão ferido era, na verdade, a Lua.",
			"Hórus casou-se com Hathor, deusa das festas, do vinho, da alegria e guardiã das mulheres e protetora dos amantes. Ela é representada com a cabeça ou as orelhas de uma vaca.",
			"Olho de Hórus",
			"O olho de Hórus, também chamado de Udyat, é um amuleto que fora usado desde os tempos antigos. Para o egípcios, o olho era o espelho da alma e quem carregasse esse símbolo estava livre do mau olhado.",
			"O olho de Hórus, perdido numa batalha contra seu tio, simboliza o bem que venceu o mal. Por esse motivo, esse talismã representa a luz, a sorte, a prosperidade, a saúde, a força, o poder e proteção.",
			"Reza a lenda que o poder de Hórus estava distribuído nos dois olhos. Assim, o olho direito representaria o Sol, já o olho esquerdo, a Lua. Nessa perspectiva, o Sol simbolizava o poder e a essência, enquanto a Lua simbolizava a cura.",
		],
	},
	{
		name: "Osíris",
		image_path: "/assets/egypt/deus-osiris.jpg",
		overview: [
			"Osíris é o deus do julgamento, do além e da vegetação, sendo considerado um dos mais importantes e populares da mitologia egípcia.",
			"Os cultos a Osíris eram muito comuns e são registrados a partir de 2400 a.C. Por esse motivo, diversos templos foram erguidos em sua homenagem.",
			"Essas celebrações ocorriam anualmente por volta de 2000 a.C. as quais eram promovidas em festivais e marcavam todo o ciclo da vida, do nascimento, da morte, do renascimento, além da benção da fertilidade.",
			"Simbologia",
			"Também chamado de Usir ou Ausar, Osíris está relacionado com a vida no além pois à ele foi atribuído o trabalho de julgar os mortos.",
			'Para isso, o rei da ressurreição pesava o coração de cada um. Esse processo era chamado de "psicostasia" e acontecia na "sala das duas verdades". Assim, segundo o resultado obtido, ele decidia o destino das pessoas',
			"Ele também é cultuado como deus da agricultura porque esse processo também implica na morte e renascimento da vida.",
			"Após a colheita, os campos experimentam o vazio até que sejam novamente semeados para produzir novamente.",
			"Osíris, simboliza o renascimento, a ressurreição, a justiça e a fertilidade.",
			"A representação de Osíris é de um rei mumificado com barba e a cabeça adornada com uma coroa. A pele é esverdeada ou preta, como forma de indicar que está, de fato, morto.",
			"Suas figuras, datadas do Novo Reino, período entre 1539 a 1075 a.C., o revelam de braços sobre o peito e segurando em cada uma das mãos um cajado e um açoite.",
			"História",
			"Osíris era filho de Geb, deus da terra, e de Nut, deusa do céu e a mãe dos deuses. Ele tinha três irmãos: Set, deus da guerra, da violência e do caos, Néftis, deusa do morte, e Ísis, deusa do amor, da natureza e da magia.",
			"Set casou-se com sua irmã Néftis e Osíris com sua irmã Ísis. O papel de Osíris foi o de governar o império antigo, já seu irmão ficou encarregado de governar o deserto. Decerto, isso causou incômodo em Set que passa a ter muita inveja de seu irmão.",
			"Diante disso, Set prepara uma armadilha para matar Osíris. Ao conseguir prendê-lo num sarcófago, ele foi atirado ao rio Nilo.",
			"Ciente do ocorrido, Ísis fica desesperada e vai atrás do corpo do marido, para enterrá-lo com dignidade.",
			"Com receio de que sua irmã encontrasse o corpo, Set o dividiu em 14 pedaços e distribui as partes do cadáver de Osíris pelo Egito.",
			"Com a ajuda de sua irmã Néftis, a deusa Ísis desenterrou todos os pedaços, menos o falo (pênis) que fora substituído por um caule vegetal. Após o ocorrido, ele é mumificado e Ísis se transforma numa ave, que tem o poder de ressuscitar Osíris.",
			"Pela união sexual de ambos, Ísis deu vida ao filho, Hórus, deus do sol nascente, que vingou a morte de seu pai matando seu tio Set.",
			"Assim, Hórus passa a governar o Egito, e Osíris, que foi ressuscitado, passa a viver e governar o submundo. Ali, ele ficou responsável por julgar as pessoas pesando seus corações.",
		],
	},
	{
		name: "Thoth",
		image_path: "/assets/egypt/deus-thoth.jpg",
		overview: [
			"Deus Toth: a deificação da sabedoria e da escrita",
			"Representado com as formas da ave íbis ou de um babuíno, deus Toth era relacionado pelos antigos egípcios à escrita e à sabedoria. Para eles, Toth teria sido o responsável pela criação da escrita hieroglífica, da matemática, arquitetura, medicina, e todas as demais ciências das quais os egípcios faziam uso. Segundo a crença dessa civilização, essa divindade compreendia todos os mistérios da mente humana.",
			"Além disso, o deus era considerado o advogado da humanidade. Em uma das cenas mais difundidas do Livro dos Mortos, o “Tribunal de Osíris”, Toth aparece registrando o resultado do julgamento pelo qual o morto deveria passar, a fim de garantir sua vida eterna. Esse julgamento consistiria na pesagem do coração do indivíduo que havia falecido, uma vez que os egípcios acreditavam que a consciência das pessoas estava justamente em seus corações. Caso essa parte do corpo mostrasse-se mais leve do que a pena da deusa Maat, divindade relacionada à verdade, ordem e justiça, o morto teria o direito de viver por toda a eternidade junto do deus Osíris, relacionado ao mundo dos mortos. No entanto, caso o coração ficasse mais pesado que a pena de Maat, o corpo e a alma da pessoa julgada desapareceriam para sempre.",
			"A representação desse deus na forma de íbis com o bico curvado, amplamente difundida pelos egípcios, está relacionada com a Lua. Assim, eles acreditavam que a ave seria um dos representantes terrestres de Toth. Esse deus, além de ser o responsável pela sabedoria, escrita, astronomia, matemática, medição do tempo, entre outros elementos, seria também o deus da Lua. É notória a importância de Toth para os antigos egípcios, uma vez que o ciclo lunar determinava vários aspectos das atividades civil e religiosa dessa sociedade.",
			"O nome de Toth aparece nos Textos das Pirâmides, que consistem em uma coletânea de orações e hinos mortuários destinados a proteger os faraós e suas cônjuges, com o intuito de lhes assegurar a vida eterna.",
			"O principal local de culto dessa divindade era Hermópolis, situada no Médio Egito e chamada pelos egípcios de Khmunu, cujo significado era “a cidade dos oito deuses”.",
			"O desenvolvimento da escrita, matemática, arquitetura, astronomia e outras áreas pelos egípcios é notável até os dias atuais. Nesse sentido, percebe-se a importância do deus Toth e da adoração a essa divindade para essa civilização antiga.",
		],
	},
	{
		name: "Bastet",
		image_path: "/assets/egypt/deusa-bastet.jpg",
		overview: [
			"Para os antigos egípcios a religião era o modo de explicar a realidade, e os deuses agiam para favorecer a vida no Egito. Todos os dias ao amanhecer ocorria nos templos uma cerimônia dedicada as divindades que deveriam manter a Ordem criada no momento da concepção do mundo. Entre os diversos deuses do panteão egípcio está Bastet representada como uma gata ou com o corpo humano e a cabeça do animal. Era filha de Rá, e aparece entre as divindades egípcias desde o Reino Antigo.",
			"No início do período dinástico, Bastet tinha uma representação diferente da que mencionamos acima, pois era associada à leoa e, por isso, representada como tal. Era evocada para proteger o rei na batalha. Foi somente a partir do primeiro milênio antes de Cristo, período também em que o gato já havia sido domesticado pelos egípcios, que a sua representação como este animal felino tornou-se mais comum, passando também a ter atributos mais pacíficos.",
			"Essa mudança em sua representação fez com que os egípcios a identificassem com a proteção da saúde individual, dos lares e da fertilidade. Por isso, foram encontradas diversas oferendas dedicadas à deusa não só no templo da cidade em que era padroeira, Bubastis, mas também em outros locais. Essas oferendas eram sobretudo votivas, ou seja, múmias de gatos ou estátuas na forma do animal ou na sua representação antropozoomorfa (rosto de gato e corpo humano).",
			"Uma curiosidade das estátuas de bronze confeccionadas para dedicar à deusa é que nas representações antropozoomorfas ela aparece segurando na mão direta um sistro (símbolo também associado à deusa Hathor) que deveria ser tocado para acalmar e encantar a deusa, e na mão esquerda uma efígie com cabeça de leoa coroada pelo disco solar e com a serpente uraeus, demonstrando assim seus dois aspectos complementares: o pacífico e protetor, e o perigoso (associado à fúria da leoa). Acreditavam que esses acessórios eram indispensáveis para domar a deusa irritada e transformá-la em uma gata gentil. Também há imagens na qual aparece na companhia de filhotes, relacionando Bastet a proteção dos lares.",
			"Ao longo da história egípcia foi associada a outras deusas como Hathor, Sekhmet e Tefnut, demonstrando que as divindades egípcias não tinham um papel único e poderiam, ao longo do tempo, assumir funções e formas diversas. Uma prática comum na religião egípcia foi organizar os deuses em famílias, principalmente tríades, o que não ocorreu com Bastet.",
			"No período em que macedônicos e, posteriormente, romanos dominaram o Egito continuou a ser amplamente cultuada, tanto que muitos cemitérios de gatos encontrados datam desse momento da história egípcia. Isto também se deve ao fato de que os greco-romanos a relacionaram com a deusa grega Artemis, e há indícios de que seu culto pode ter sido levado para a Itália.",
			"Para nós, o fato da deusa estar associada ao gato, chama bastante atenção, fazendo com que seja uma das deusas egípcias mais populares na contemporaneidade.",
		],
	},
	{
		name: "Seth",
		image_path: "/assets/egypt/deus-seth.jpg",
		overview: [
			"Filho de Geb (a terra) e de Nut (o céu), irmão de Ísis, Osíris e Néftis, esta divindade passou a estar associada ao caos e à maldade, a partir da Época Baixa, com a popularização do culto de Osíris. A figura de Seth foi, a partir deste período, alvo de perseguições, enquanto assassino e desmembrador de Osíris, que culminaram na destruição sistemática de muitas das representações deste deus. Seth foi venerado desde tempos pré-históricos, por todo o Egito, facto comprovado por se encontrar representado em muitos objetos deste período.",
			"Seth queria assumir o trono no lugar de Osíris e por isso, o matou. Osíris por sua vez renasceu, se tornando o rei do submundo e responsável por pesar o coração de cada pessoa que falecia, para ver seus pecados.",
			"No domínio da iconografia régia, surge várias vezes lado a lado com Hórus, segurando as plantas heráldicas do Egito (o papiro do Norte e o lótus do Sul), que contornam o sema-taui, símbolo da união do país, sendo esta representação uma clara expressão da tradicional busca egípcia do equilíbrio e da harmonia. Segundo a lenda, o Baixo Egito teria sido atribuído a Hórus, por Geb, enquanto Seth teria recebido o Alto Egito. Em determinados períodos da história do Egito, as rivalidades entre as duas fações são mais acentuadas, sendo possível assistir, durante estes períodos, à adoção de título-nome Seth ou Hórus pelos monarcas, que marcam desta forma a oposição à outra fação. Do mesmo modo, em períodos de reconciliação era usado o duplo título de Hórus-Seth, assinalando a reunificação.",
			"Seth está associado diretamente as tempestades, dos raios e dos ventos. Por esses motivos ele era considerado por muitos como um deus estrangeiro, fundamentado a trazer o que existia de ruim de outras regiões do mundo por meio de seus ventos.",
			"As ações de Seth foram mal vistas por todos os outros deuses, tornando-o assim um deus mal. Uma das explicações para essa batalha entre os dois deuses é visto como uma forma dos cultos antigos tornarem o deus de outro culto, um deus maligno.",
			"Por outro lado, Seth também é responsável por enfrentar a Serpente Apófis (considerada o próprio caos). Ele fica na proa do barco solar do grande deus Rá, e junto a ele, luta todas as noites contra Apófis vencendo-a, junto de seu pai. Apófis por sua vez, quer engolir o mundo, trazendo o caos de volta.",
			"Por isso Seth é visto como um deus ambíguo, pois protege a humanidade, ao mesmo tempo que tenta roubar o trono de Osíris, que agora pertence ao seu filho Hórus.",
		],
	},
	{
		name: "Ísis",
		image_path: "/assets/egypt/deusa-isis.jpg",
		overview: [
			"A Grande Senhora da Magia",
			"Conhecida como deusa da magia, exemplo de mãe e esposa ideal, protetora do lar e das crianças, a deusa Ísis foi adorada em diversos períodos da história egípcia antiga. Com templos em locais como Quft, Behbeitel-Hagar e Ilha de Philae, sendo o último o mais conhecido, Ísis é uma das deusas mais populares da cultura egípcia. Referências a ela podem ser encontradas em diversos mitos, sendo os mais conhecidos o mito da “Criação do Mundo”, da cidade de Heliópolis, e o mito de “Isis e Rá”.",
			"Ísis seria parte do panteão principal do mito da cidade de Heliópolis, formado por nove deuses. Segundo esse mito, essa divindade teria se casado com seu irmão, o deus Osíris, deus relacionado ao mundo dos mortos e à ideia de vida após a morte. Os dois formaram, segundo a crença egípcia, o primeiro casal real. Ísis também foi a mãe do deus Hórus, divindade relacionada ao poder dos faraós.",
			"No mito de Ísis e Rá, essa deusa teve o intuito de descobrir o nome verdadeiro do deus, e assim desejava obter domínio sobre seu poder. Para isso, teria feito com que uma serpente envenenasse esse deus e, em troca de sua cura, Rá teria que lhe dizer seu verdadeiro nome. Depois, com o poder adquirido por Ísis a partir desse conhecimento, essa divindade restabeleceu as forças do deus. Esse mito é muitas vezes associado a um importante aspecto da figura de Ísis, que consiste em sua relação com a magia.",
			"Ísis é representada como uma mulher com um trono sobre sua cabeça e, como personificação desse objeto, a deusa foi uma representação importante do poder faraônico, da mesma forma que a própria figura do faraó foi associada a seu filho, o deus Hórus.",
			"Um amuleto egípcio chamado “Tyet”, comumente conhecido como “Nó de Ísis” também é relacionado a essa divindade. Esse item teria formato similar ao “Ankh”, amuleto que, para os antigos egípcios, representava a vida. No entanto, o “Tyet” teria as extremidades laterais curvadas para baixo. Segundo a crença dos antigos egípcios, esse amuleto garantiria a proteção daqueles que o utilizassem.",
			"Ísis teve inúmeros títulos ao longo de toda a história da civilização egípcia antiga, como “Rainha do Céu”, “Mãe dos Deuses”, “A mais brilhante no firmamento”, “Grande Senhora da Magia”, “Senhora das Palavras de Poder”, entre outros. Após a conquista do Egito por Alexandre, O Grande, o culto a essa divindade estendeu-se à civilização greco-romana.",
		],
	},
	{
		name: "Néftis",
		image_path: "/assets/egypt/deusa-neftis.jpg",
		overview: [
			"Embora pouco lembrada, Néftis é uma deusa da enéade da cidade de Heliópolis, e uma das principais divindades presentes no panteão dos egípcios antigos, tendo sua aparência idêntica à de sua irmã Isis. Porém, muitos de seus aspectos são misteriosos até os dias de hoje.",
			"Na mitologia desenvolvida na cidade de Heliópolis, Néftis era esposa do deus Seth, que era estéril, e para poder conceber um filho se disfarçou de Isis, que era casada com Osíris, e passou uma noite com o marido de sua irmã. Desse ato nasceu Anúbis, deus da mumificação.",
			"As principais representações iconográficas da deusa aparecem em tumbas ou sarcófagos. Podemos usar para melhor entende-la os “Textos das Pirâmides” e os “Textos dos Sarcófagos”, que são um conjunto de fórmulas mágicas, encontrados nos caixões e paredes das tumbas. Seu nome significa “Senhora da Casa” ou “Senhora do Templo”, embora ainda não se tenha encontrado nenhum centro de culto dedicado a deusa.",
			"A literatura egípcia esclarece pouco sobre o papel de Néftis, pois antes da mitologia da cidade de Heliópolis, não se conhece outro texto com citação sobre a deusa. O que sabemos é que ela está ligada com a mitologia Osiriana. Muitas vezes, Néftis aparece associada com Isis e no contexto funerário elas protegem o morto. Isis vai a frente do morto protegendo seus pés, Néftis vai atrás protegendo a cabeça. Segunda a mitologia, Néftis chorou com sua irmã pelo falecimento do deus Osíris. Dentro das tumbas a deusa aparece como protetora dos mortos e dos vasos canópicos. Muitos amuletos foram produzidos para a deusa principalmente durante as 22° e 26° dinastias egípcias, onde a produção desses objetos é muito comum. Infelizmente podemos saber apenas alguns aspectos e definições de Néfits, porém, ela foi largamente representada no Egito, desde o Reino Antigo chegando até a Baixa Época. Por mais que o papel da deusa não fique completamente definido, podemos concluir que ela foi muito importante para os egípcios, pois ela é a mãe do deus da mumificação, Anúbis, além de estar relacionada à crença da vida além-túmulo, pois auxiliava o morto em sua travessia para os campos de Osíris.",
		],
	},
	{
		name: "Hathor",
		image_path: "/assets/egypt/deusa-hathor.jpg",
		overview: [
			"Háthor em egípcio antigo ḥwt-ḥr, que significa recinto ou casa de Hórus, era uma das deusas mais cultuadas pelos antigos egípcios. Dentre suas várias representações ela aparece como sendo uma mulher com um disco solar acima de sua cabeça entre seus chifres bovinos ou com corpo de mulher e orelhas de vaca, quase sempre segurando um was, cetro com cabeça de um cervo, ou ainda o wadj, um cetro com a planta de papiro, já que para os egípcios a morada dessa deusa era nas plantações desse vegetal que localizavam-se na parte Delta do rio Nilo, onde havia também muitos rebanhos de bovinos.",
			"Entre as suas múltiplas denominações as principais aparecem como: “A Grande Vaca Selvagem”, “A Distante” ou “A Senhora do Ocidente” pois era a senhora do deserto e das terras estrangeiras, “A Senhora Turquesa” e “A Dourada” uma vez que era também a deusa dos metais e dos minérios, e “A Senhora do Submundo”, sendo ela protetora dos mortos. Seu culto no Egito faraônico remonta ao Reino Antigo (2686-2181 a.C) considerando os registros de cabeça bovina esculpidos na paleta de Narmer (3100 a.C) e os achados arqueológicos junto a fonte textual no Templo do Rei Khafra (2520-2494 a.C). Contudo, houve claramente uma veneração de deusas-vacas no Egito pré-dinástico (5500- 3100 a.C) como a deusa Bat que foi associada a Háthor posteriormente.",
			"Háthor era uma deusa muito popular na antiguidade egípcia. Por esse motivo era venerada em várias regiões do Egito, seu templo foi construído em Dendera, uma cidade localizada na margem ocidental do rio Nilo. Na mitologia egípcia Háthor possui várias faces, sua natureza é benigna, mas essa deusa possui um prisma relacionado a destruição e fúria. Háthor é filha do deus sol Rá, e a mitologia retrata a deusa como a vingadora de seu pai quando os homens se voltam contra ele, dentre suas várias manifestações, nesse momento se torna a deusa Sekhmet, um deusa leoa patrona de batalhas e da guerra. Em algumas partes a mitologia conta que Háthor carregou Hórus em seu ventre, portanto ela é considerada a mãe simbólica e divina do faraó, representante de Hórus na Terra.",
			"Essa relação materna da deusa com o governante do Egito, está retratada na estátua de Amenhotep II (1424-1398 a.C) – atuamente no Museu do Cairo – nesse artefato a deusa está amamentando o próprio faráo em seu colo. Em algumas versões mitológicas mais antigas Háthor era venerada como a deusa que deu a luz e amamentou todos os outros deuses, por isso a deusa é muitas vezes representada e associada à Isis, a deusa da maternidade. As Sete Háthors* são os sete aspectos da deusa, essas em específico são mais ligadas a fertilidade e capazes de prever o futuro de um recém nascido. Na iconografia que ilustra passagens do livro dos mortos na tumba da rainha Nefertari (1292- 1186 a.C), Háthor é representada através das sete vacas cujo papel é determinar o destino de uma criança ao nascer. Em muitas versões entre os diversos mitos presentes na religião egípcia, a deusa é a paredra do deus Hórus, ou seja, sua esposa e consorte.",
			"Tendo em vista a quantidade de faces que essa deusa possuia dentro da religiosidade egípcia, fica claro que ela tinha muitos atributos. Entre eles se destacam o amor, a beleza, a sexualidade, a dança e a alegria. Háthor era uma deusa muito ligada a festividades, pois os mitos contam que na ânsia de vingar seu pai ela promoveu uma carnificina entre os homens, e para apaziguar sua fúria, Rá a embebedou com sete mil jarros de cerveja, uma vez embriagada a deusa era associada a festas. Ela também é a deusa do amor, os gregos imediatamente associaram Háthor à Afrodite e os romanos a sua Vênus, rituais mágicos e poemas de amor são encontrados em nome da deusa em paredes de tumbas e templos. A beleza e a sensualidade eram princípios dessa deusa, mulheres utilizavam espelhos de bronze polido adornados com capiteis ou estátuas da deusa. Peles de pantera e incenso de ébano, joias de ouro, bronze e turquesa eram seus elementos.",
			"A música era um componente importante nas celebrações de adoração a deusa Háthor, seus instrumentos rituais o sistrum, “sesheshet” em egípcio, um chocalho de bronze com capetéis hathóricos, e o menat, um colar espesso de contas com um contrapeso longo de ouro ou bronze, emitiam sons atribuidos a essa divindade. Na arquitetura, os capitéis hathóricos eram construídos acima de grandes pilares de templos para representar a suntuosa deusa. Por fim, Háthor era uma divindade com um culto acessível no Egito antigo, entre as diversas representações do feminino na religião egípcia, Háthor simbolizava o comportamento feminino, em especial a relação das mulheres egípcias com o corpo e o amor.",
		],
	},
	{
		name: "Sekhmeth",
		image_path: "/assets/egypt/deusa-sekhmeth.jpg",
		overview: [
			"Sekhmet é uma das deusas mais antigas e importantes da mitologia egípcia, representando a força e a ferocidade feminina. Ela é frequentemente retratada com a cabeça de leão, simbolizando seu poder e capacidade de proteger seus seguidores. Sekhmet também é associada à cura e à proteção contra doenças, embora também possa trazer a morte e a destruição quando provocada.",
			"De acordo com a lenda, Sekhmet foi criada pela deusa Ra para punir os mortais que se rebelavam contra ele. No entanto, ela logo se tornou tão violenta que ameaçou destruir toda a humanidade. Para impedir isso, Ra a embriagou com vinho tingido de vermelho para que ela pensasse que estava bebendo sangue. Isso a acalmou e a transformou em uma deusa benéfica.",
			"Sekhmet era adorada em todo o Egito Antigo, mas seu principal centro de culto era em Memphis. Lá, ela tinha um templo dedicado a ela e seu consorte, Ptah. Os sacerdotes de Sekhmet eram considerados especialmente poderosos, pois acreditava-se que eles tinham acesso direto à deusa e podiam curar doenças e prever o futuro.",
			"Além de sua importância religiosa, Sekhmet também teve um papel na política do Egito Antigo. Ela foi muitas vezes invocada pelos faraós como uma protetora do reino, e seu símbolo era frequentemente usado em estandartes de guerra. Sekhmet também foi associada ao faraó Amenhotep III, que construiu um grande templo em seu nome.",
			"Até hoje, a imagem de Sekhmet continua a inspirar artistas e praticantes de religiões pagãs modernas. Ela é vista como uma deusa poderosa e corajosa, capaz de proteger seus seguidores e curar doenças. Sua história também é um lembrete da importância de equilibrar a ferocidade com a compaixão, e de como a transformação pode ocorrer mesmo em seres divinos.",
		],
	},
	{
		name: "Mut",
		image_path: "/assets/egypt/deusa-mut.jpg",
		overview: [
			'Mut é uma deusa da mitologia egípcia que representa a maternidade, a fertilidade e a realeza. Ela é frequentemente retratada com uma coroa de dois chifres e uma serpente em volta, simbolizando seu papel como mãe e protetora. Mut também era associada à lua e ao céu, e seu nome significa "mãe" em egípcio antigo.',
			"De acordo com a lenda, Mut era a esposa do deus Amon e a mãe do deus Khonsu. Ela era adorada em todo o Egito Antigo, mas seu principal centro de culto era em Tebas, onde ela tinha um templo grandioso chamado de Ipet Sut. O templo era famoso por suas procissões anuais, que incluíam a parada da barca sagrada de Mut.",
			"Mut também era vista como uma protetora dos faraós, e seu nome era frequentemente incluído nos títulos dos faraós como um sinal de sua legitimidade. Ela era vista como a mãe divina do faraó, que era considerado seu filho adotivo. Como tal, ela era muitas vezes associada à fertilidade e à renovação.",
			"Além de seu papel religioso, Mut também teve um papel político na história egípcia. Ela foi uma das poucas deusas a serem representadas no trono, e seu símbolo era frequentemente usado em estandartes de guerra. Mut também foi associada à rainha Hatshepsut, que se apresentava como a filha divina de Amon e Mut.",
			"Até hoje, Mut é vista como uma deusa poderosa e benéfica, capaz de proteger e nutrir seus filhos. Sua história é um lembrete da importância da maternidade e da fertilidade na cultura egípcia antiga, e de como esses temas ainda são relevantes em nossa compreensão do divino feminino.",
		],
	},
	{
		name: "Wadjet",
		image_path: "/assets/egypt/deusa-wadjet.jpg",
		overview: [
			"Wadjet é uma deusa da mitologia egípcia associada à proteção, à realeza e à cura. Ela é frequentemente retratada como uma cobra ou como uma mulher com uma cobra na cabeça. Wadjet também é conhecida como a protetora do faraó e era uma das divindades mais antigas do Egito.",
			"Wadjet era adorada em todo o Egito Antigo, mas seu principal centro de culto era na cidade de Buto, no Delta do Nilo. Lá, ela era adorada como a deusa local e como uma protetora dos reis e rainhas do Egito. Wadjet era frequentemente retratada nas coroas dos faraós como um símbolo de sua proteção divina.",
			'Além de seu papel como protetora, Wadjet era vista como uma deusa da cura. Ela era frequentemente invocada em rituais de cura e era considerada uma divindade benéfica que poderia curar as doenças. Ela também era associada à fertilidade e à renovação, e seu nome significa "a verde" em egípcio antigo, possivelmente referindo-se à renovação da natureza.',
			'Na mitologia egípcia, Wadjet era frequentemente associada à deusa Nekhbet, que era a protetora do Alto Egito e também era retratada como uma cobra. As duas deusas eram frequentemente retratadas juntas como as "Duas Senhoras", simbolizando a unificação do Alto e Baixo Egito sob a realeza. A cobra de Wadjet também era um dos símbolos da coroa do Baixo Egito.',
			"Até hoje, Wadjet é vista como uma deusa poderosa e protetora, que pode oferecer cura e renovação. Sua história é um lembrete da importância da proteção divina na cultura egípcia antiga e de como essa proteção estava intimamente ligada à realeza e à cura.",
		],
	},
	{
		name: "Maat",
		image_path: "/assets/egypt/deusa-maat.jpg",
		overview: [
			"Maat é a deusa egípcia da justiça, da verdade e da harmonia. Ela é frequentemente retratada como uma mulher com uma pena de avestruz em sua cabeça, simbolizando a balança da justiça. Maat era uma das divindades mais importantes do panteão egípcio e sua importância se estendeu por toda a história do Egito Antigo.",
			"Maat era responsável por manter a ordem e a harmonia no universo e, como tal, era considerada uma força poderosa e divina. Ela estava presente em todos os aspectos da vida egípcia, desde a política até a religião. Seu papel era tão importante que muitos faraós se consideravam seus representantes na Terra.",
			"Além de seu papel como juíza da verdade e da justiça, Maat também era associada à ideia de equilíbrio. Ela era vista como uma deusa que mantinha o equilíbrio entre os opostos, como a luz e a escuridão, o bem e o mal e a vida e a morte. Acreditava-se que, se o equilíbrio fosse perturbado, a ordem natural do universo seria ameaçada.",
			"Na mitologia egípcia, Maat era frequentemente retratada junto com o deus Thoth, o deus da sabedoria e da escrita. Juntos, eles eram responsáveis por registrar as ações dos seres humanos no julgamento final. Acredita-se que, após a morte, a alma de uma pessoa seria julgada em uma sala do tribunal e teria seu coração pesado em uma balança com a pena de Maat.",
			"Até hoje, Maat é vista como uma deusa importante na cultura egípcia e em muitas tradições espirituais modernas. Sua mensagem de justiça, verdade e equilíbrio é vista como uma inspiração para aqueles que buscam viver suas vidas em harmonia e com integridade. A história de Maat é um lembrete do poder da justiça e da verdade em nossa sociedade e de como esses valores são fundamentais para uma vida significativa.",
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
