import React from "react";
import { Helmet } from "react-helmet";
import ModuleBackground from "../components/modules/ModuleBackground";
import ModuleDescription from "../components/modules/ModuleDescription";
import ModuleOpinions from "../components/modules/ModuleOpinions";
import useLanguage from "../hooks/useLanguage";
import { meetUs } from "../utils/texts";

const MeetUs = () => {
	const { language } = useLanguage();

	return (
		<>
			<Helmet>
				<title>{language ? meetUs.en.title : meetUs.es.title}</title>
			</Helmet>
			<ModuleBackground
				buttonValue={
					language
						? "Check our financial products"
						: "Conoce nuestros productos financieros"
				}
				title={language ? meetUs.en.title : meetUs.es.title}
				subtitles={language ? meetUs.en.subtitles : meetUs.es.subtitles}
				src={"bg-[url('/backgroundUs.jpg')]"}
			/>

			<ModuleOpinions language={language} />

			<ModuleDescription language={language} />
		</>
	);
};

export default MeetUs;
