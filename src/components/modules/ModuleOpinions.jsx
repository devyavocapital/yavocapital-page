import { Fragment } from "react";
import { meetUs } from "../../utils/texts";
import Button from "./common/Button";
import Image from "./common/Image";

const ModuleOpinions = ({ language }) => {
	const classesButton =
		"inline-flex justify-center hover:text-white items-center mx-auto z-[2px] mt-2 md:mt-5 py-1 px-5 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-orange-700 focus:ring-4 hover:border-orange-700 mb-3";

	const imgClasses =
		"rounded-[50%] w-[300px] h-[300px] object-cover mx-auto p-5 md:col-start-2 lg:w-[400px] lg:h-[400px]";

	const opinionTitle =
		"text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-5 uppercase font-bold lg:w-11/12 lg:mx-auto";

	return (
		<div className="relative my-10 w-full bg-[url('/forbes-mexico-logo.webp')] bg-center bg-repeat bg-gray-200 grid">
			{language
				? meetUs.en.opinions.map(
						({ id, title, img, subtitle, description, href }) => (
							<Fragment key={id}>
								<h3 className={opinionTitle}>{title}</h3>
								<div className="grid md:grid-flow-col lg:w-10/12 lg:mx-auto">
									<Image src={img} name={title} key={id} classes={imgClasses} />
									<div className="grid">
										<p className="text-center text-lg font-bold md:text-2xl lg:text-3xl">
											{subtitle}
										</p>
										<p className="text-center italic md:text-lg lg:text-2xl">
											{description}
										</p>
										<Button
											classes={classesButton}
											value={language ? "See news" : "Ver la nota completa"}
											href={href}
										/>
									</div>
								</div>
							</Fragment>
						),
				  )
				: meetUs.es.opinions.map(
						({ id, title, img, subtitle, description, href }) => (
							<Fragment key={id}>
								<h3 className={opinionTitle}>{title}</h3>
								<div className="grid md:grid-flow-col lg:w-10/12 lg:mx-auto">
									<Image src={img} name={title} key={id} classes={imgClasses} />
									<div className="grid">
										<p className="text-center text-lg font-bold md:text-2xl lg:text-3xl">
											{subtitle}
										</p>
										<p className="text-center italic md:text-lg lg:text-2xl">
											{description}
										</p>
										<Button
											classes={classesButton}
											value={language ? "See news" : "Ver la nota completa"}
											href={href}
										/>
									</div>
								</div>
							</Fragment>
						),
				  )}
		</div>
	);
};

export default ModuleOpinions;
