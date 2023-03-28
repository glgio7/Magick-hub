import StyledCategory, { Wrapper } from "./styles";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Loading from "@/components/Loading";

function Categories() {
	const router = useRouter();
	const { address } = router.query;

	const [listApi, setListApi] = useState();
	const [list, setList] = useState();
	const [card, setCard] = useState();

	useEffect(() => {
		fetch("/api")
			.then((response) => response.json())
			.then((data) => {
				setList(data[address]);
			})
			.catch((err) => console.log(err));
	}, [address]);

	const carousel = useRef();

	const handleList = (direction) => {
		direction === "left"
			? (carousel.current.scrollLeft -= carousel.current.scrollWidth / 3)
			: (carousel.current.scrollLeft += carousel.current.scrollWidth / 3);
	};
	if (!list) {
		return <Loading />;
	}

	return (
		<>
			<Head>
				<title>{`Magick Hub | ${list[0].title}`}</title>
			</Head>
			<StyledCategory>
				<Wrapper onLoad={() => window.scrollTo(0, 0)}>
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
				</Wrapper>
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
			</StyledCategory>
		</>
	);
}

export default Categories;
