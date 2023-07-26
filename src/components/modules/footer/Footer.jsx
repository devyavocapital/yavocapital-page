import React from "react";
import Description from "./Description";
import Social from "./Social";

const Footer = () => {
	return (
		<footer className="bg-indigo-950 grid grid-rows-2  md:p-4">
			<Description />
			<Social />
		</footer>
	);
};

export default Footer;
