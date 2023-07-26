import { imagesHome } from "../../utils/imagesHome";
import Image from "./common/Image";

const ModuleNews = ({ buttonValue }) => {
	return (
		<div className="w-full bg-gray-300 border-gray-700 grid md:flex">
			{imagesHome.map(({ id, src, href, name }) => (
				<div key={id} className="grid p-10">
					<a href={href} className="p-3 mb-6">
						<Image classes="rounded-lg" src={src} name={name} />
					</a>
					<div className="flex">
						<a
							href={href}
							className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto"
							target="_blank"
							rel="noreferrer"
						>
							{buttonValue}
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default ModuleNews;
