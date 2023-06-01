import * as S from "./styles";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Loading from "@/components/Loading";
import { Myth } from "../api/types";

type CategoriesProps = {
	address: string | string[] | undefined;
};

function Categories({ address }: CategoriesProps) {
	const [list, setList] = useState<Myth[]>();
	const [card, setCard] = useState<Myth>();

	useEffect(() => {
		fetch(`/api/${address}`)
			.then((response) => response.json())
			.then((data) => {
				setList(data);
			})
			.catch((err) => console.log(err));
	}, [address]);

	const carousel = useRef<HTMLUListElement>(null);

	const handleList = (direction: string) => {
		if (carousel) {
			direction === "left"
				? (carousel.current!.scrollLeft -= carousel.current!.scrollWidth / 3)
				: (carousel.current!.scrollLeft += carousel.current!.scrollWidth / 3);
		}
	};
	if (!list) {
		return (
			<S.Category>
				<Loading />
			</S.Category>
		);
	}

	return (
		<>
			<Head>
				<title>{list && `Magick Hub | ${list[0]!.title}`}</title>
			</Head>
			<S.Category>
				<S.Wrapper onLoad={() => window.scrollTo(0, 0)}>
					<HiChevronLeft
						className="arrow left"
						onClick={() => {
							handleList("left");
						}}
					/>
					<h2>{list[0]!.title}</h2>
					<ul ref={carousel}>
						{list.map(
							(item, index) =>
								index > 0 && (
									<li key={`id_${index}}`} onClick={() => setCard(item)}>
										<img src={item.image_path} alt={item.name} />
										<span>{item.name}</span>
									</li>
								)
						)}
					</ul>
					<HiChevronRight
						className="arrow right"
						onClick={() => {
							handleList("right");
						}}
					/>
				</S.Wrapper>
				<article>
					{card ? (
						<>
							<img src={card.image_path} alt={card.name} />
							<h2>{card.name}</h2>
							{card.overview.map((value, index) => (
								<p key={`id_${index}`}>{value}</p>
							))}
						</>
					) : (
						<>
							<h2>Um pouco de história</h2>
							{list[0]!.overview.map((value, index) => (
								<p key={`id_${index}`}>{value}</p>
							))}
						</>
					)}
				</article>
			</S.Category>
		</>
	);
}

export default Categories;
