import { Container } from "./styles";
import {
	afro,
	celtic,
	egypt,
	greek,
	hindu,
	jung,
	nordic,
	japanese,
	roman,
} from "../../api/mythologies";
import { useState } from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";

function Home() {
	const [loaded, setLoaded] = useState(false);

	setTimeout(() => {
		setLoaded(true);
	}, 1500);

	document.title = "Magick Hub | Home";

	return (
		<>
			<Container>
				{!loaded && (
					<div className="loading">
						<img src="/assets/loading.jpg" alt="Loading..." />
					</div>
				)}
				<section>
					<List listName={egypt} />
					<List listName={greek} />
					<List listName={celtic} />
					<List listName={jung} />
					<List listName={afro} />
					<List listName={hindu} />
					<List listName={roman} />
					<List listName={japanese} />
					<List listName={nordic} />
				</section>

				<Footer />
			</Container>
		</>
	);
}

export default Home;
