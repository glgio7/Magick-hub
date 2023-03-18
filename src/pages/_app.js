import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import GlobalCSS from "@/styles/globalcss";
import { GoogleFonts } from "next-google-fonts";
import { useState } from "react";

export default function App({ Component, pageProps }) {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	return (
		<>
			<GlobalCSS />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Quicksand&family=Oleo+Script:wght@400;700&display=swap" />
			<Sidebar displayed={menu} toggleMenu={toggleMenu} />
			<Header toggleMenu={toggleMenu} />
			<Component {...pageProps} />
		</>
	);
}
