import React from "react";
import Description from "./Description";
import Social from "./Social";

const Footer = () => {
	return (
		<footer className="bg-indigo-950 grid grid-cols-3 p-4">
			<Description />
			<Social />
			<div className="flex">
				{/* rome-ignore lint/a11y/useIframeTitle: <explanation> */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1099944794814!2d-99.19095412486843!3d19.364389381900438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8a3fbc6545%3A0x4d20c3924a701829!2sJos%C3%A9%20Mar%C3%ADa%20Velasco%2013%2C%20San%20Jos%C3%A9%20Insurgentes%2C%20Benito%20Ju%C3%A1rez%2C%2003900%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1689723475410!5m2!1ses!2smx"
					width="400"
					height="400"
					allowfullscreen=""
					loading="lazy"
					className="m-auto rounded-lg"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</footer>
	);
};

export default Footer;