import Head from "next/head";
import { useEffect, useState } from "react";
import ListContainer from "../components/ListContainer";
import StyledHome from "@/styles";
import Loading from "@/components/Loading";

export default function Home() {
	const [loaded, setLoaded] = useState(false);

	const [lists, setLists] = useState<unknown[] | null>(null);

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
			.then((data) => {
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
						lists.map((item, index) => (
							<ListContainer listName={item} key={index} />
						))}
				</article>
			</StyledHome>
		</>
	);
}
