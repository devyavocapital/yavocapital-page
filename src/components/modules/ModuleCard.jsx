import Card from "./common/Card";
import Title from "./common/Title";

const ModuleCard = ({ language, cards, buttonValue }) => {
	return (
		<>
			<Title
				title={
					language
						? "OUR FINANCIAL PRODUCTS:"
						: "Conoce los Productos Financieros que tenemos para ti: "
				}
				classes={"text-2xl text-center mt-10 mb-2 font-bold uppercase"}
			/>
			<div className="grid my-8 md:flex justify-evenly md:m-10">
				{cards.map(({ id, title, description, href, img }) => (
					<Card
						key={id}
						title={title}
						description={description}
						buttonValue={buttonValue}
						href={href}
						img={img}
					/>
				))}
			</div>
		</>
	);
};

export default ModuleCard;
