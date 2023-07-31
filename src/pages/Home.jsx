import { Helmet } from "react-helmet";
import ModuleBackground from "../components/modules/ModuleBackground";
import ModuleCard from "../components/modules/ModuleCard";
import ModuleNews from "../components/modules/ModuleNews";
import ModuleOthers from "../components/modules/ModuleOthers";
import useLanguage from "../hooks/useLanguage";
import { home } from "../utils/texts";

const Home = () => {
	const { language } = useLanguage();

	return (
		<>
			<Helmet>
				<title>Yavo Capital</title>
				<meta
					name="description"
					content={language ? home.en.subtitles : home.es.subtitles}
				/>
				<link rel="canonical" href="https://www.yavocapital.com" />
			</Helmet>
			<ModuleBackground
				key={language ? home.en.title : home.es.title}
				title={language ? home.en.title : home.es.title}
				subtitles={language ? home.en.subtitles : home.es.subtitles}
				buttonValue={
					language ? "Learn more about us" : "Descubre más de Nosotros"
				}
				src={"bg-[url('/home-bg.jpg')]"}
				href={"productos-financieros"}
			/>

			<ModuleCard
				language={language}
				cards={language ? home.en.cards : home.es.cards}
				buttonValue={language ? "More information" : "Más información"}
			/>

			<ModuleNews
				buttonValue={language ? "See the news" : "Ver nota completa"}
			/>

			<ModuleOthers />
		</>
	);
};

export default Home;
