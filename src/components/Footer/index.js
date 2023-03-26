import Link from "next/link";
import StyledFooter from "./styles";

const Footer = () => {
	return (
		<StyledFooter>
			<h4>Desenvolvido por Dev. Giovane Azevedo - @glgio7 no Github</h4>
			<div className="useful-links">
				<Link href={"/docs/api"}>GitHub Repo</Link>
				<Link href={"/docs/api"}>Api Documentation</Link>
				<Link href={"/docs/api"}>Contact me</Link>
			</div>
		</StyledFooter>
	);
};

export default Footer;
