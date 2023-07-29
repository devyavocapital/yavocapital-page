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
			<div className="flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
				<Link to="/" className="flex items-center">
					<img
						src="/logo.webp"
						className="h-10 xl:h-12 mr-3"
						alt="Yavo capital Logo"
					/>
				</Link>
				<div className="hidden md:flex items-center md:order-2 md:text-sm">
					<Dropdown inline label={language ? "Language" : "Idioma"}>
						<Dropdown.Item onClick={() => handleLanguage(true)}>
							{language ? "English" : "Inglés"}
						</Dropdown.Item>
						<Dropdown.Item onClick={() => handleLanguage(false)}>
							{language ? "Spanish" : "Español"}
						</Dropdown.Item>
					</Dropdown>
					<Link
						to="/iniciar-sesion"
						className="text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2"
					>
						{language ? "Login" : "Iniciar Sesión"}
					</Link>
					<Link
						to="/crear-cuenta"
						className="text-white bg-orange-400 hover:bg-orange-700 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2"
					>
						{language ? "Sign up" : "Crear Cuenta"}
					</Link>
				</div>
				<div
					id="mega-menu"
					className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
				>
					<ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-3 md:mt-0 lg:space-x-4 xl:space-x-8">
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
