import { Container } from "./styles";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useRef, useState } from "react";
import {
	afro,
	celtic,
	egypt,
	greek,
	hindu,
	jung,
	nordic,
} from "../../api/mythologies";
import { useParams } from "react-router-dom";

function Categories() {
	const { address } = useParams();
	const list =
		address === "egypt"
			? egypt
			: address === "celtic"
			? celtic
			: address === "greek"
			? greek
			: address === "hindu"
			? hindu
			: address === "jung"
			? jung
			: address === "afro"
			? afro
			: nordic;
	const [card, setCard] = useState(list[0]);
	const carousel = useRef();

	const handleList = (direction) => {
		direction === "left"
			? (carousel.current.scrollLeft -= carousel.current.scrollWidth / 3)
			: (carousel.current.scrollLeft += carousel.current.scrollWidth / 3);
	};

	document.title = `Magick Hub | ${list[0].title}`;

	return (
		<>
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
					{card.image_path && <img src={card.image_path} alt={card.name} />}
					<h2>{card.name ? card.name : "Um pouco de história"}</h2>
					{card.overview &&
						card.overview.map((value, index) => (
							<p key={`id_${index}`}>{value}</p>
						))}
				</article>
			</Container>
		</>
	);
}

export default Categories;
