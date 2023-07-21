import Image from "./Image";

const Card = ({ title, description, href, img, buttonValue }) => {
	return (
		<div className="max-w-sm mb-3 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href={href}>
				<Image
					classes={"rounded-t-lg w-full h-[200px] object-cover"}
					src={img}
					alt="card img"
				/>
			</a>
			<div className="p-5 h-[325px] grid grid-rows-[25%_65%_10%]">
				<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
					{title}
				</h2>
				<p className="text-sm text-gray-700 dark:text-gray-400 h-auto row-start-2">
					{description}
				</p>
				<a
					href={href}
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full justify-center row-start-3"
				>
					{buttonValue}
					{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Card;
