import useLanguage from "../../../hooks/useLanguage";
import ListMenu from "./ListMenu";

const Menu = () => {
	const { language, handleLanguage } = useLanguage();

	return (
		<div className="bg-white border-gray-200 dark:bg-gray-900 w-full lg:flex">
			<div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-2 md:w-full md:grid md:grid-cols-[10%_75%_5%]">
				<a href="/" className="flex items-center">
					<img
						src="/logo.webp"
						className="h-9 md:h-8 xl:h-12 lg:mr-3"
						alt="Yavo capital Logo"
					/>
				</a>
				<div className="flex items-center md:order-2">
					<button
						type="button"
						data-dropdown-toggle="language-dropdown-menu"
						className="inline-flex items-center font-medium justify-center px-4 py-2 md:px-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						{language ? "En" : "Es"}
					</button>
					<div
						className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
						id="language-dropdown-menu"
					>
						<ul className="py-2 font-medium" role="none">
							<li>
								<button
									type="button"
									onClick={() => handleLanguage(true)}
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem"
								>
									<div className="inline-flex items-center">
										{language ? "English" : "Inglés"}
									</div>
								</button>
							</li>
							<li>
								<button
									type="button"
									onClick={() => handleLanguage(false)}
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
									role="menuitem"
								>
									<div className="inline-flex items-center">
										{language ? "Spanish" : "Español"}
									</div>
								</button>
							</li>
						</ul>
					</div>
					<button
						data-collapse-toggle="navbar-language"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-language"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-language"
				>
					<ListMenu />
				</div>
			</div>
		</div>
	);
};

export default Menu;
