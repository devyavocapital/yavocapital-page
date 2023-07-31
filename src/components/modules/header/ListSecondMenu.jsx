import { Link } from "react-router-dom";
import useLanguage from "../../../hooks/useLanguage";

const ListSecondMenu = () => {
	const { language } = useLanguage();

	const classesButton =
		"font-sm rounded-lg text-[10px] px-4 py-2 font-bold md:px-1 md:py-1 lg:py-3 lg:p-2 lg:text-[12px] xl:text-[14px]";

	return (
		<div className="grid items-center md:order-2 md:text-sm md:col-start-3 md:flex md:ml-2 md:justify-between">
			<Link
				to="/iniciar-sesion"
				className={`${classesButton} hover:bg-gray-50 text-gray-800`}
			>
				{language ? "Login" : "Iniciar Sesión"}
			</Link>
			<Link
				to="/crear-cuenta"
				className={`${classesButton} text-white bg-orange-400 hover:bg-orange-700`}
			>
				{language ? "Sign up" : "Crear Cuenta"}
			</Link>
		</div>
	);
};

export default ListSecondMenu;
