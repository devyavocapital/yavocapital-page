import React from "react";
import Button from "./common/Button";
import Title from "./common/Title";

const ModuleBackground = ({ title, subtitles, buttonValue, src }) => {
	const classesParagraph =
		"mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48";

	const classesTitle =
		"mb-7 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl";

	const classesButton =
		"inline-flex justify-center hover:text-white items-center mt-5 py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-orange-700 focus:ring-4 hover:border-orange-700";

	return (
		<section
			className={`${src} bg-center bg-no-repeat bg-gray-600 bg-blend-multiply sm:w-full`}
		>
			<div className="px-4 mx-auto text-center py-24 lg:py-36">
				<Title title={title} classes={classesTitle} />

				{subtitles.map((sub) => (
					<p className={classesParagraph} key={sub.id}>
						{sub.description}
					</p>
				))}

				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<Button
						value={buttonValue}
						href={"productos-financieros"}
						arrowLeft={true}
						classes={classesButton}
					/>
				</div>
			</div>
		</section>
	);
};

export default ModuleBackground;
