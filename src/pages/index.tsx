import Head from "next/head";
import { useEffect, useState } from "react";
import ListContainer from "../components/ListContainer";
import StyledHome from "@/styles";
import Loading from "@/components/Loading";
import { Myth } from "./api/types";

export default function Home() {
	const [lists, setLists] = useState<Myth[][] | null>(null);

	const [loaded, setLoaded] = useState(false);
	setTimeout(() => {
		setLoaded(true);
	}, 1750);

	useEffect(() => {
		fetch("/api", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data: Myth[][]) => {
				setLists(Object.values(data).map((item) => item));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Head>
				<title>Magick Hub | Home</title>
			</Head>
			<StyledHome>
				{!loaded && <Loading />}
				<article>
					{lists &&
						lists.map((item: Myth[], index: number) => (
							<ListContainer list={item} key={index} />
						))}
				</article>
			</StyledHome>
		</>
	);
}
