import { GlobalCSS } from "../styles/globalcss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { GoogleFonts } from "next-google-fonts";

export default function App({ Component, pageProps }) {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	return (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Quicksand&family=Oleo+Script:wght@400;700&display=swap" />
			<GlobalCSS />
			<Sidebar displayed={menu} toggleMenu={toggleMenu} />
			<Header toggleMenu={toggleMenu} />
			<Component {...pageProps} />
		</>
	);
}
