import { useState } from "react";
import Container from "./styles";

function Numerology() {
	const [userName, setUserName] = useState("");
	const [userNumber, setUserNumber] = useState("");

	const getSum = () => {
		if (userName.length > 0) {
			const number = userName
				.toUpperCase()
				.replaceAll("A", "1,")
				.replaceAll("Â", "1,")
				.replaceAll("Ã", "1,")
				.replaceAll("Á", "1,")
				.replaceAll("B", "2,")
				.replaceAll("C", "3,")
				.replaceAll("Ç", "3,")
				.replaceAll("D", "4,")
				.replaceAll("E", "5,")
				.replaceAll("Ê", "5,")
				.replaceAll("É", "5,")
				.replaceAll("F", "6,")
				.replaceAll("G", "7,")
				.replaceAll("H", "8,")
				.replaceAll("I", "9,")
				.replaceAll("Í", "9,")
				.replaceAll("J", "9,")
				.replaceAll("K", "10,")
				.replaceAll("L", "20,")
				.replaceAll("M", "30,")
				.replaceAll("N", "40,")
				.replaceAll("O", "50,")
				.replaceAll("Ó", "50,")
				.replaceAll("Ô", "50,")
				.replaceAll("Ô", "50,")
				.replaceAll("P", "60,")
				.replaceAll("Q", "70,")
				.replaceAll("R", "80,")
				.replaceAll("S", "90,")
				.replaceAll("T", "100,")
				.replaceAll("U", "200,")
				.replaceAll("Ú", "200,")
				.replaceAll("Ü", "200,")
				.replaceAll("V", "200,")
				.replaceAll("W", "200,")
				.replaceAll("X", "300,")
				.replaceAll("Y", "9,")
				.replaceAll("Z", "400,")
				.split(",")
				.filter((value) => value !== "");

			for (let i = 0; i < number.length; i++) {
				number[i] = Number(number[i]);
			}
			let result = number
				.reduce((total, value) => total + value)
				.toString()
				.split("");

			for (let i = 0; i < result.length; i++) {
				result[i] = Number(result[i]);
			}
			setUserNumber(result.reduce((total, value) => total + value));
			setUserName("");
		}
	};

	return (
		<>
			<Container onLoad={() => window.scrollTo(0, 0)}>
				<section>
					<h2>Numerologia Cabalística</h2>
					<p>
						Os resultados da Numerologia Cabalística são baseados na soma dos
						números correspondentes à cada letra do nome da pessoa. Os valores
						são:
					</p>
					<p>
						A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=9, K=10, L=20, M=30,
						N=40, O=50, P=60, Q=70, R=80, S=90, T=100, U=200, V=200, W=200,
						X=300, Y=9, Z=400.
					</p>
					<p>
						Para facilitar a soma dos valores, abaixo você pode consultar seu
						número com facilidade.
					</p>
					<p>
						<p>
							Algumas vezes, é possível que a pessoa não se identifique com seu
							nome recebido no momento do nascimento, nesse caso, é possível
							fazer a consulta através de sua data de nascimento ( sem hífen ou
							/ ), para que a descrição do número seja mais afim de suas
							características.
						</p>
						Os números vão de 1 a 9 ou 11 e 22 ( Exemplo: se seu número for 25
						deve-se somar 2+5 sendo na verdade, 7. ) .
						<br />
						Atenção: os números 11 e 22 não devem ser somados pois são números
						mestres.
					</p>
					<div className="search-bar">
						<input
							type="text"
							value={userName}
							placeholder="Insira seu nome completo"
							onChange={(e) => setUserName(e.target.value)}
						/>
						<button onClick={getSum}>Consultar</button>
					</div>
					{userNumber && (
						<>
							<p>O número associado ao seu nome é:</p>
							<h2>{userNumber}</h2>
						</>
					)}
					<article>
						<h2> Descrição dos números</h2>
						<h3>1</h3>
						<p>
							Quem nasce sob a influência do número 1 é um líder nato, e não um
							mero seguidor. São pessoas determinadas, ambiciosas, pioneiras.
							Muito criativos, são pouco convencionais e muito originais, gostam
							de ter o próprio negócio ou de gerenciar pessoas, não gosta muito
							de receber críticas e ordens alheias. São pessoas muito honestas e
							que gostam de levar a vida de forma ativa, detestam a rotina e o
							marasmo. Precisam tomar cuidado com o egoísmo, egocentrismo e
							preguiça.
						</p>
						<h3>2</h3>
						<p>
							São pessoas gentis, sociáveis que adora estar cercado dos amigos e
							dos familiares. São considerados “bonzinhos”, que ajudam a todos
							ao seu redor e por isso é preciso tomar cuidado para não virar
							“capacho”, não deixar que as pessoas se aproveitem da sua atitude
							de querer sempre ajudar. São pessoas muito requintadas e de bom
							gosto. São mais calmos e quietos, sua personalidade é tímida, mas
							essa é uma maneira de se proteger. Preferem ficar em casa na
							companhia do seu companheiro, dos amigos ou da família do que uma
							noite badalada. É preciso tomar cuidado com o excesso de timidez,
							de serventia e da depreciação de si mesmo e das suas capacidades
							profissionais, mais confiança é essencial.
						</p>
						<h3>3</h3>
						<p>
							Quem é representado pelo número 3 tem como característica marcante
							a comunicação. Sabem se expressar bem em palavras (escritas ou
							faladas), são voltados à intelectualidade e ao otimismo. São
							pessoas muito criativas, versáveis e alegres. Gostam de coisas
							boas, refinadas, de aproveitar bem a vida e o seu lucro. Tem
							extrema facilidade de resolver problemas, boa clarividência faz
							com que eles sejam excelentes colegas de trabalho. É preciso tomar
							cuidado com a impaciência (pavio curto), não ligar excessivamente
							às críticas e deixar de lado o ciúmes e a fofoca.
						</p>

						<h3>4</h3>
						<p>
							Quem nasce sob a influência do número 4 é, antes de tudo, uma
							pessoa digna e honesta. Gosta da verdade, da sinceridade, detesta
							pessoas falsas. São aqueles que assumem suas responsabilidades com
							muita seriedade e detesta desapontar os outros, por isso se cobram
							muito para honrar os seus compromissos da melhor maneira possível.
							Gosta de organização e regras, tanto em casa quanto no trabalho,
							quanto mais ordenado e organizado melhor. É preciso tomar cuidado
							com o autoritarismo e para não produzir muitas críticas às pessoas
							ao seu redor. Pare de querer tudo à sua maneira.
						</p>

						<h3>5</h3>
						<p>
							Liberdade é a palavra chave para quem nasce sob a influência do
							número 5. São pessoas que gostam de fazer tudo ao seu tempo, ter
							liberdade de ir e vir quando quiser, não gosta que nada (nem
							ninguém) a prenda. Pode ser inclusive intransigente à leis e
							ordens que não concorda. Não gosta de rotina, por isso se dão
							melhor em trabalhos como freelancer ou donos do próprio negócio do
							que como um trabalhador com horário de entrada e de saída fixos. É
							inquieto, animado e gosta de novidades. É preciso tomar cuidado
							com os excessos e irresponsabilidade, principalmente em relação ao
							trabalho, ao álcool, a drogas e ao sexo.
						</p>

						<h3>6</h3>
						<p>
							São excelentes companheiros, aquelas pessoas que sabem dizer uma
							palavra certa na hora incerta, com tom harmonioso, pacífico e
							confortável, por isso seus amigos costumam recorrer a si com muita
							frequência. É considerado um bom amigo, compreensivo, mediador,
							que promove a paz e acalma os ânimos. Quando gosta de alguém,
							costuma ficar cego em relação aos seus defeitos, só vê as
							qualidades. É preciso tomar cuidado com as energias de
							insensibilidade, orgulho e intromissão na vida alheia (só ajude
							quem lhe pede ajuda, não intrometa onde não é chamado).
						</p>

						<h3>7</h3>
						<p>
							Quem nasce sob a influência do número 7 costuma ser uma pessoa
							reservada, equilibrada, paciente, misteriosa e intuitiva. Gostam
							de conhecer, estudar e analisar tudo aquilo que não conhece,
							qualquer dúvida que surge em sua cabeça, já corre aos livros ou à
							internet para pesquisar. Aprecia a leitura e o conhecimento geral,
							é mais focado nos conhecimentos do dia a dia do que em algum saber
							específico. Tem poucos amigos, pois é muito criterioso na escolha
							das suas amizades. É preciso ter cuidado com as energias de
							melancolia, isolamento e preguiça.
						</p>

						<h3>8</h3>
						<p>
							São pessoas que são obcecadas pelo sucesso e sabe que precisa
							trabalhar e se esforçar muito para alcançá-lo, portanto não
							descansa até conseguir. E quando consegue, já traça novas metas e
							objetivos. Por seu esforço e determinação, costuma trabalhar em
							grandes corporações, tem orgulho em dizer-se funcionário de uma
							grande empresa ou ter um cargo de liderança. Ambiciona grandes
							vitórias materiais. É preciso tomar cuidado com o excesso de
							ambição, o abuso de poder e as extravagâncias materiais
						</p>

						<h3>9</h3>
						<p>
							São pessoas confiáveis. Todo mundo ao seu redor confia no seu
							caráter, na sua honestidade, no seu trabalho. É um ótimo
							conselheiro, um excelente amigo, uma pessoa compreensiva e
							tolerante. Você espera muito dos outros, espera que os outros
							tenham com você a mesma dedicação e compreensão que tem com elas e
							muitas vezes acaba se decepcionando. Passará por experiências
							intensas e reveladoras em sua vida. É preciso ter cuidado com
							energias de indelicadeza, vacilos e até mesmo ser levado a cometer
							ações antiéticas.
						</p>

						<h3>11</h3>
						<p>
							O número 11 é um número mestre, que carrega as energias de dois
							números ao mesmo tempo. Tem a força explosiva e intensa do número
							1 e o equilíbrio, calma e sabedoria do número 2 (resultante da
							soma do 1+1). Tem a ambição pela fortura, poder e um grande ego,
							ao mesmo tempo que busca elevação espiritual, tem caráter humano e
							amoroso. Pode, no entanto, pender mais para um lado do que para o
							outro. São pessoas intuitivas, com sensibilidade desenvolvida e
							múltiplas habilidades, mas é preciso ter cuidado com o nervosismo,
							os vícios e a violência.
						</p>

						<h3>22</h3>
						<p>
							O número 22 rege pessoas de espiritualidade elevada mas que tem
							dificuldade em lidar com os assuntos terrenos. São pessoas que
							gostam de transpor barreiras, se você disser a ele que algo é
							impossível, ele vai tentar, batalhar até conseguir te provar o
							contrário. São pessoas muito sábias, que acumulam conhecimentos e
							experiências de vidas passadas, por isso são considerados por
							muitos como gênios incompreendidos, apesar de terem muita
							facilidade em ensinar. Mas o seu lado terreno é desgovernado, é
							preciso ter atenção à imprudência, à ganância, à corrupção e ao
							uso da sua espiritualidade para fins negativos, que causem mal aos
							outros ou a si mesmo.
						</p>
					</article>
				</section>
			</Container>
		</>
	);
}

export default Numerology;
