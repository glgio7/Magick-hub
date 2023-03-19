import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Head from "next/head";
import Container from "./styles";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { dataList } from "../api";

function Categories() {
	const router = useRouter();
	const { address } = router.query;
	const list = dataList[address];

	const [card, setCard] = useState();
	const carousel = useRef();

	const handleList = (direction) => {
		direction === "left"
			? (carousel.current.scrollLeft -= carousel.current.scrollWidth / 3)
			: (carousel.current.scrollLeft += carousel.current.scrollWidth / 3);
	};
	if (list.length === 0) {
		return (
			<div className="loading">
				<img src="/assets/loading.jpg" alt="Loading..." />
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>{`Magick Hub | ${list[0].title}`}</title>
			</Head>
			<Container>
				<div className="wrapper" onLoad={() => window.scrollTo(0, 0)}>
					<HiChevronLeft
						className="arrow left"
						onClick={() => {
							handleList("left");
						}}
					/>
					<h2>{list[0].title}</h2>
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
				</div>
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
							{list[0].overview.map((value, index) => (
								<p key={`id_${index}`}>{value}</p>
							))}
						</>
					)}
				</article>
			</Container>
		</>
	);
}

export default Categories;
