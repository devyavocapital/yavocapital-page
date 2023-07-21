import { imageHomeOthers } from "../../utils/imagesHome";
import Image from "./common/Image";

const ModuleOthers = () => {
	const classesImg = "mx-auto w-auto h-12";

	return (
		<div className="flex py-7 justify-evenly">
			{imageHomeOthers.map(({ id, src, href, name }) => (
				<Image
					key={id}
					name={name}
					src={src}
					href={href}
					classes={classesImg}
				/>
			))}
		</div>
	);
};

export default ModuleOthers;
