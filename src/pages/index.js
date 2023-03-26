import Head from "next/head";
import { useEffect, useState } from "react";
import ListContainer from "../components/ListContainer";
import StyledHome from "@/styles";

export default function Home() {
	const [loaded, setLoaded] = useState(false);

	const [lists, setLists] = useState();

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
				console.log(Object.keys(data));
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
				{!loaded && (
					<div className="loading">
						<img src="/assets/loading.jpg" alt="Loading..." />
					</div>
				)}
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
