import Head from "next/head";
import { useEffect, useState } from "react";
import { Myth } from "./api/types";
import ListContainer from "../components/ListContainer";
import StyledHome from "@/styles";
import Loading from "@/components/Loading";
import axios from "axios";

export default function Home() {
	const [loaded, setLoaded] = useState(false);
	const [lists, setLists] = useState<Myth[][]>([]);

	const endpoints = [
		"egypt",
		"greek",
		"celtic",
		"afro",
		"hindu",
		"japanese",
		"jung",
		"nordic",
		"roman",
	];

	const getLists = async () => {
		try {
			const response = await Promise.all(
				endpoints.map((endpoint) => axios.get(`/api/${endpoint}`))
			);

			const dataList = response.map((item) => item.data);
			setLists(dataList);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLists()
			.then(() => setLoaded(true))
			.catch((error) => {
				console.log(error);
				alert("Um erro aconteceu, atualize a página!");
			});
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
						lists.map((item: Myth[]) => (
							<ListContainer list={item} key={item[0]!.address} />
						))}
				</article>
			</StyledHome>
		</>
	);
}
