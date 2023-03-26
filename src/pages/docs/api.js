// import Container from "../../styles/index";
import { StyledSection } from "./styles";

function Documentation() {
	return (
		<>
			<StyledSection>
				<h2>Documentação</h2>

				<article>
					<h4>Visão Geral</h4>
					<p>
						A API do Magickhub fornece informações sobre figuras mitológicas de
						diferentes culturas ao redor do mundo. Os usuários podem acessar
						informações sobre as culturas egípcia, grega, celta, hindu, nórdica,
						afro, japonesa, romana e a mitologia na visao de Jung.
					</p>
					<h4>Autenticação</h4>
					<p>Essa API não requer autenticação.</p>
					<h4>Base URL</h4>
					<p>https://magickhub.vercel.app/api</p>
					<h4>Endpoints</h4>
					<p>
						Para conferir os endpoints da nossa API você pode consultá-los no
						console ao efetuar a requisição por meio de{" "}
						{`console.log(Object.values(data)) ou console.log(Object.keys(data))`}{" "}
						e assim, manipular os dados como desejar.
					</p>
					<p>
						Retorna uma lista de figuras mitológicas gregas, incluindo seus
						nomes, descrições e imagens.
					</p>
					<p className="code">
						{`import axios from "axios";
axios.get("https://magickhub.vercel.app/api/")
  
.then((response) => response.json())
.then((data) => {
	console.log(Object.values(data));
})
.catch((err) => console.log(err));}`}
					</p>
				</article>
			</StyledSection>
		</>
	);
}

export default Documentation;
