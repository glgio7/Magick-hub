import { useEffect, useState } from "react";
import * as S from "./styles";
import Head from "next/head";

function Numerology() {
	const [userName, setUserName] = useState<string>("");
	const [userNumber, setUserNumber] = useState<number>();

	enum ValueLetters {
		A = 1,
		B = 2,
		C = 3,
		D = 4,
		E = 5,
		F = 6,
		G = 7,
		H = 8,
		I = 9,
		J = 9,
		K = 10,
		L = 20,
		M = 30,
		N = 40,
		O = 50,
		P = 60,
		Q = 70,
		R = 80,
		S = 90,
		T = 100,
		U = 200,
		V = 200,
		W = 200,
		X = 300,
		Y = 9,
		Z = 400,
	}

	const getSum = () => {
		const number = userName
			.toUpperCase()
			.replaceAll(/[ÂÃÁ]/g, "A")
			.replaceAll(/[ÊÉ]/g, "E")
			.replaceAll(/[Í]/g, "I")
			.replaceAll(/[ÓÔ]/g, "O")
			.replaceAll(/[ÚÜ]/g, "U")
			.split("")
			.map((letter) => {
				if (letter.match(/^[0-9]$/)) {
					return letter;
				} else {
					return ValueLetters[letter as keyof typeof ValueLetters];
				}
			});

		const sum = number.reduce((acc, value) => acc + (Number(value) || 0), 0);

		setUserNumber(sum);
	};

	const getResult = () => {
		if (
			(userNumber && userNumber !== 11) ||
			(userNumber && userNumber !== 22)
		) {
			const result = userNumber
				.toString()
				.split("")
				.reduce((acc, value) => acc + (Number(value) || 0), 0);

			setUserNumber(result);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const numberDescription = {
		1: "Quem nasce sob a influência do número 1 é um líder nato, e não um mero seguidor. São pessoas determinadas, ambiciosas, pioneiras. Muito criativos, são pouco convencionais e muito originais, gostam de ter o próprio negócio ou de gerenciar pessoas, não gosta muito de receber críticas e ordens alheias. São pessoas muito honestas e que gostam de levar a vida de forma ativa, detestam a rotina e o marasmo. Precisam tomar cuidado com o egoísmo, egocentrismo e preguiça.",
		2: "São pessoas gentis, sociáveis que adora estar cercado dos amigos e dos familiares. São considerados “bonzinhos”, que ajudam a todos ao seu redor e por isso é preciso tomar cuidado para não virar “capacho”, não deixar que as pessoas se aproveitem da sua atitude de querer sempre ajudar. São pessoas muito requintadas e de bom gosto. São mais calmos e quietos, sua personalidade é tímida, mas essa é uma maneira de se proteger. Preferem ficar em casa na companhia do seu companheiro, dos amigos ou da família do que uma noite badalada. É preciso tomar cuidado com o excesso de timidez, de serventia e da depreciação de si mesmo e das suas capacidades profissionais, mais confiança é essencial.",
		3: "Quem é representado pelo número 3 tem como característica marcante a comunicação. Sabem se expressar bem em palavras (escritas ou faladas), são voltados à intelectualidade e ao otimismo. São pessoas muito criativas, versáveis e alegres. Gostam de coisas boas, refinadas, de aproveitar bem a vida e o seu lucro. Tem extrema facilidade de resolver problemas, boa clarividência faz com que eles sejam excelentes colegas de trabalho. É preciso tomar cuidado com a impaciência (pavio curto), não ligar excessivamente às críticas e deixar de lado o ciúmes e a fofoca.",
		4: "Quem nasce sob a influência do número 4 é, antes de tudo, uma pessoa digna e honesta. Gosta da verdade, da sinceridade, detesta pessoas falsas. São aqueles que assumem suas responsabilidades com muita seriedade e detesta desapontar os outros, por isso se cobram muito para honrar os seus compromissos da melhor maneira possível. Gosta de organização e regras, tanto em casa quanto no trabalho, quanto mais ordenado e organizado melhor. É preciso tomar cuidado com o autoritarismo e para não produzir muitas críticas às pessoas ao seu redor. Pare de querer tudo à sua maneira.",
		5: "Liberdade é a palavra chave para quem nasce sob a influência do número 5. São pessoas que gostam de fazer tudo ao seu tempo, ter liberdade de ir e vir quando quiser, não gosta que nada (nem ninguém) a prenda. Pode ser inclusive intransigente à leis e ordens que não concorda. Não gosta de rotina, por isso se dão melhor em trabalhos como freelancer ou donos do próprio negócio do que como um trabalhador com horário de entrada e de saída fixos. É inquieto, animado e gosta de novidades. É preciso tomar cuidado com os excessos e irresponsabilidade, principalmente em relação ao trabalho, ao álcool, a drogas e ao sexo.",
		6: "São excelentes companheiros, aquelas pessoas que sabem dizer uma palavra certa na hora incerta, com tom harmonioso, pacífico e confortável, por isso seus amigos costumam recorrer a si com muita frequência. É considerado um bom amigo, compreensivo, mediador, que promove a paz e acalma os ânimos. Quando gosta de alguém, costuma ficar cego em relação aos seus defeitos, só vê as qualidades. É preciso tomar cuidado com as energias de insensibilidade, orgulho e intromissão na vida alheia (só ajude quem lhe pede ajuda, não intrometa onde não é chamado).",
		7: "Quem nasce sob a influência do número 7 costuma ser uma pessoa reservada, equilibrada, paciente, misteriosa e intuitiva. Gostam de conhecer, estudar e analisar tudo aquilo que não conhece, qualquer dúvida que surge em sua cabeça, já corre aos livros ou à internet para pesquisar. Aprecia a leitura e o conhecimento geral, é mais focado nos conhecimentos do dia a dia do que em algum saber específico. Tem poucos amigos, pois é muito criterioso na escolha das suas amizades. É preciso ter cuidado com as energias de melancolia, isolamento e preguiça.",
		8: "São pessoas que são obcecadas pelo sucesso e sabe que precisa trabalhar e se esforçar muito para alcançá-lo, portanto não descansa até conseguir. E quando consegue, já traça novas metas e objetivos. Por seu esforço e determinação, costuma trabalhar em grandes corporações, tem orgulho em dizer-se funcionário de uma grande empresa ou ter um cargo de liderança. Ambiciona grandes vitórias materiais. É preciso tomar cuidado com o excesso de ambição, o abuso de poder e as extravagâncias materiais.",
		9: "São pessoas confiáveis. Todo mundo ao seu redor confia no seu caráter, na sua honestidade, no seu trabalho. É um ótimo conselheiro, um excelente amigo, uma pessoa compreensiva e tolerante. Você espera muito dos outros, espera que os outros tenham com você a mesma dedicação e compreensão que tem com elas e muitas vezes acaba se decepcionando. Passará por experiências intensas e reveladoras em sua vida. É preciso ter cuidado com energias de indelicadeza, vacilos e até mesmo ser levado a cometer ações antiéticas.",
		11: "O número 11 é um número mestre, que carrega as energias de dois números ao mesmo tempo. Tem a força explosiva e intensa do número 1 e o equilíbrio, calma e sabedoria do número 2 (resultante da soma do 1+1). Tem a ambição pela fortuna, poder e um grande ego, ao mesmo tempo que busca elevação espiritual, tem caráter humano e amoroso. Pode, no entanto, pender mais para um lado do que para o outro. São pessoas intuitivas, com sensibilidade desenvolvida e múltiplas habilidades, mas é preciso ter cuidado com o nervosismo, os vícios e a violência.",
		22: "O número 22 rege pessoas de espiritualidade elevada mas que têm dificuldade em lidar com os assuntos terrenos. São pessoas que gostam de transpor barreiras, se você disser a ele que algo é impossível, ele vai tentar, batalhar até conseguir te provar o contrário. São pessoas muito sábias, que acumulam conhecimentos e experiências de vidas passadas, por isso são considerados por muitos como gênios incompreendidos, apesar de terem muita facilidade em ensinar. Mas o seu lado terreno é desgovernado, é preciso ter atenção à imprudência, à ganância, à corrupção e ao uso da sua espiritualidade para fins negativos, que causem mal aos outros ou a si mesmo.",
	};

	return (
		<>
			<Head>
				<title>Magick Hub | Numerologia</title>
			</Head>
			<S.Container>
				<section>
					<h2>Numerologia Cabalística</h2>
					<div className="intro-container">
						<p>
							Para facilitar a soma dos valores, abaixo você pode consultar seu
							número com facilidade.
						</p>
						<p>
							Algumas vezes, é possível que a pessoa não se identifique com seu
							nome recebido no momento do nascimento, nesse caso, é possível
							fazer a consulta através de sua data de nascimento, para que a
							descrição do número seja mais alinhada às suas características.{" "}
							<br />
							Os números vão de 1 a 9 ou 11 e 22. .
						</p>
					</div>
					<div className="search-bar">
						<input
							type="text"
							value={userName}
							placeholder="Insira seu nome completo"
							onChange={(e) => {
								setUserName(e.target.value);
							}}
						/>
						<button
							onClick={() => {
								getSum();
							}}
						>
							Consultar
						</button>
					</div>
					{userNumber && (
						<>
							<h3>O número associado ao seu nome é:</h3>
							<h4>{userNumber}</h4>
							<button
								onClick={() => {
									getResult();
								}}
							>
								Reduzir
							</button>
							<p>
								Atenção: os números 11 e 22 não devem ser somados pois são
								números mestres.
							</p>
						</>
					)}
					<article>
						{((userNumber && userNumber < 10) ||
							userNumber === 11 ||
							userNumber === 22) && (
							<>
								<h2>Descrição</h2>
								<p>
									{
										numberDescription[
											userNumber as keyof typeof numberDescription
										]
									}
								</p>
							</>
						)}
					</article>
				</section>
			</S.Container>
		</>
	);
}

export default Numerology;
