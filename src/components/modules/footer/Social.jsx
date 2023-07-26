import { socials } from "../../../utils/social";
import Image from "../common/Image";
import Phone from "./Phone";

const Social = () => {
	return (
		<div className="col-span-1 grid w-11/12 mx-auto md:grid-cols-2">
			<Phone />
			<div className="grid justify-center my-4 md:mx-auto">
				<div className="flex gap-3 text-center mx-auto text-sm lg:text-lg text-white">
					<p>Tel: 55 4165 3386</p>
					<p>
						Whatsapp:{" "}
						<a
							href="https://wa.me/+5215562210182?text=Bienvenido%20a%20Yavo%20Capital%20para%20obtener%20m%C3%A1s%20informaci%C3%B3n%20env%C3%ADa%20este%20mensaje"
							className="hover:border-b-2 hover:border-white"
						>
							55 6221 0182
						</a>
					</p>
				</div>
				<div className="flex mx-auto my-3 md:my-auto">
					{socials.map((social) => (
						<Image
							key={social.name}
							src={social.src}
							classes={
								"w-10 h-10 mx-2 hover:cursor-pointer hover:border-2 hover:border-white hover:rounded-lg"
							}
						/>
					))}
				</div>

				<div className="mx-auto my-auto">
					{/* rome-ignore lint/a11y/useIframeTitle: <explanation> */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1099944794814!2d-99.19095412486843!3d19.364389381900438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff8a3fbc6545%3A0x4d20c3924a701829!2sJos%C3%A9%20Mar%C3%ADa%20Velasco%2013%2C%20San%20Jos%C3%A9%20Insurgentes%2C%20Benito%20Ju%C3%A1rez%2C%2003900%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1689723475410!5m2!1ses!2smx"
						allowFullScreen=""
						loading="lazy"
						className="mx-auto md:m-auto rounded-lg lg:w-[500px]"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</div>
	);
};

export default Social;
