import { Link } from "react-router-dom";
import ListContainer from "./styles";

const List = ({ listName }) => {
	const isEmptyList = () => {
		if (listName[0].overview.length < 1) {
			return true;
		} else {
			return;
		}
	};

	return (
		<ListContainer emptyList={isEmptyList()}>
			{listName[0].overview.length < 1 && (
				<div className="coming-soon">Em Breve</div>
			)}
			<h3>
				<span>{listName[1].name}</span>
				<img src={listName[1].image_path} alt="" />
			</h3>
			<ul>
				<h2>{listName[0].title}</h2>
				{listName.map(
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
				<Link to={`/categories/${listName[0].address}`} className="see-more">
					<p>Ver todos</p>
				</Link>
			</ul>
		</ListContainer>
	);
};

export default List;
