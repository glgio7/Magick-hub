import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AppContainer from "@/styles/app";
import GlobalCSS from "@/styles/globalcss";
import { GoogleFonts } from "next-google-fonts";
import { useState } from "react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);

	return (
		<>
			<GlobalCSS />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Quicksand&family=Aladin&family=Oleo+Script:wght@400;700&display=swap" />
			<Sidebar displayed={menu} toggleMenu={toggleMenu} />
			<AppContainer>
				<div className="background"></div>
				<Header toggleMenu={toggleMenu} />
				<Component {...pageProps} />
			</AppContainer>
			<Footer />
		</>
	);
}
