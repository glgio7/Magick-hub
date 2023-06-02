import Link from "next/link";
import * as S from "./styles";
import { ListContainerProps } from "./types";

const ListContainer = ({ list }: ListContainerProps) => {
	const isEmptyList = (list && list[0]!.overview.length) > 1 ? false : true;

	return (
		<S.ListContainer emptyList={isEmptyList}>
			{isEmptyList && <div className="coming-soon">Em Breve</div>}
			{list && (
				<>
					<h3>
						<span>{list[1]!.name}</span>
						<img src={list[1]!.image_path} alt="" />
					</h3>
					<ul>
						<h2>{list[0]!.name}</h2>
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
				</>
			)}
		</S.ListContainer>
	);
};

export default ListContainer;
