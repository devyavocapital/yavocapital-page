import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import useLanguage from "../../../hooks/useLanguage";
import Item from "./Item";

const Menu = () => {
	const { language, handleLanguage } = useLanguage();

	const classesLink =
		"block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700";

	return (
		<nav className="bg-white border-gray-200 w-full">
			<div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
				<Link to="/" className="flex items-center">
					<img
						src="/logo.webp"
						className="h-12 mr-3 "
						alt="Yavo capital Logo"
					/>
				</Link>
				<div className="flex items-center md:order-2">
					<Dropdown inline label={language ? "Language" : "Idioma"}>
						<Dropdown.Item onClick={() => handleLanguage(true)}>
							{language ? "English" : "Inglés"}
						</Dropdown.Item>
						<Dropdown.Item onClick={() => handleLanguage(false)}>
							{language ? "Spanish" : "Español"}
						</Dropdown.Item>
					</Dropdown>
					{/* <a
						href="local"
						className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
					>
						Login
					</a>
					<a
						href="local"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Sign up
					</a> */}
				</div>
				<div
					id="mega-menu"
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
				>
					<ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
						<Item href={"/vehiculo-financiero"} classes={classesLink}>
							{language ? "Who are we?" : "¿Quienes Somos?"}
						</Item>
						<Item href={"/productos-financieros"} classes={classesLink}>
							{language ? "Financial Products" : "Productos Financieros"}
						</Item>
						<Item href={"/mejorasi"} classes={classesLink}>
							MEJORASÍ
						</Item>
						<Item href={"/contacto"} classes={classesLink}>
							{language ? "Contact Us" : "Contáctanos"}
						</Item>
						<Item href={"/blog"} classes={classesLink}>
							Blog
						</Item>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
