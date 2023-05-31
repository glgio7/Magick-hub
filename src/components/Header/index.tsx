import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import StyledHeader from "./styles";
import { HeaderProps } from "./types";

const Header = ({ toggleMenu }: HeaderProps) => {
	return (
		<StyledHeader>
			<HiMenu className="menu" onClick={toggleMenu} />
			<Link href={"/"} className="container">
				<img
					src="/assets/magick-hub-logo.png"
					alt="Magick Hub Logo"
					className="container__image"
				/>
				<h1>Magick Hub</h1>
			</Link>
			<h3>
				"Todos os mitos possuem o mesmo significado quando se trata da essência
				de suas imagens." - Carl Jung.
			</h3>
		</StyledHeader>
	);
};

export default Header;
