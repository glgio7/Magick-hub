import Link from "next/link";
import StyledListContainer from "./styles";
import { Myth } from "@/pages/api/types";

type ListContainerProps = {
	list: Myth[];
	key: number;
};

const ListContainer = ({ list, key }: ListContainerProps) => {
	const isEmptyList = () => {
		if (list[0]!.overview.length < 1) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<StyledListContainer emptyList={isEmptyList()}>
			{list[0]!.overview.length < 1 && (
				<div className="coming-soon">Em Breve</div>
			)}
			<h3>
				<span>{list[1]!.name}</span>
				<img src={list[1]!.image_path} alt="" />
			</h3>
			<ul>
				<h2>{list[0]!.title}</h2>
				{list.map(
					(item, index) =>
						index > 1 &&
						index < 8 && (
							<li key={`id_${index}}`}>
								<img
									src={item.image_path}
									alt={item.name}
									className="list-image"
								/>
								<span>{item.name}</span>
							</li>
						)
				)}
				<Link
					className="see-more"
					href={`/categories/${list[0]!.address}`}
					passHref
				>
					Ver todos
				</Link>
			</ul>
		</StyledListContainer>
	);
};

export default ListContainer;
