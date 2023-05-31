import Link from "next/link";
import * as S from "./styles";

const Footer = () => {
	return (
		<S.Footer>
			<h4>Desenvolvido por Dev. Giovane Azevedo - @glgio7 no Github</h4>
			<div className="useful-links">
				<Link href={"/docs/api"}>GitHub Repo</Link>
				<Link href={"/docs/api"}>Api Documentation</Link>
				<Link href={"/docs/api"}>Contact me</Link>
			</div>
		</S.Footer>
	);
};

export default Footer;
