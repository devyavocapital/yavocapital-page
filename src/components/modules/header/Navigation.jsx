import { useEffect } from "react";
import useLanguage from "../../../hooks/useLanguage";
import Image from "../common/Image";
import Menu from "./Menu";

const Navigation = () => {
	useEffect(() => {
		const [red, green, blue, transparency] = [237, 107, 55, 0.0];
		const nav = document.querySelector(".nav");

		window.addEventListener("scroll", () => {
			const y = (window.scrollY || window.pageYOffset) / 150;
			const [r, g, b, t] = [red, green, blue, transparency + y * 100].map(
				Math.round,
			);
			nav.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${t})`;
		});
	}, []);

	const { language, handleLanguage } = useLanguage();

	return (
		<nav className="fixed grid md:flex md:p-2 md:justify-between nav w-full rounded-b-xl">
			<div className="grid w-full">
				<Image
					name={"logo yavo"}
					src={"/logo.webp"}
					classes={"mx-auto md:mx-0"}
				/>
			</div>
			<div>
				<Menu language={language} handleLanguage={handleLanguage} />
			</div>
		</nav>
	);
};

export default Navigation;
