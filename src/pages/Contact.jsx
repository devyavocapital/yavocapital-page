import SpanFeatured from "../components/modules/common/SpanFeatured";
import useLanguage from "../hooks/useLanguage";

const Contact = () => {
	const { language } = useLanguage();

	return (
		<div className="flex w-full md:w-8/12 mx-auto">
			<div className="relative flex justify-center">
				<h1 className="absolute bg-[rgb(217,217,217,0.65)] w-10/12 rounded-xl h-10 text-center text-2xl sm:text-3xl md:text-4 md:h-14 md:pt-2 lg:text-5xl lg:h-28 lg:w-11/12 lg:pt-7 ">
					{language ? "Contact Us" : "Contáctanos"}
				</h1>
				<div className="grid md:flex">
					<img
						src="/bg-contact.jpg"
						alt="img contact us"
						className="w-10/12 mx-auto rounded-xl md:w-full md:object-cover"
					/>
					<div className="grid md:items-center md:content-center md:translate-y-[50%] md:mx-auto md:absolute md:rounded-2xl md:h-4/6 md:bg-[rgb(217,217,217,0.85)] md:w-3/5 xl:h-3/5">
						<img
							src="/logo.webp"
							className="h-12 md:h-24 mx-auto md:mb-3"
							alt="Yavo capital Logo"
						/>
						<p className="w-9/12 mx-auto my-3 sm:text-md md:w-10/12 lg:text-2xl lg:mt-12 xl:text-3xl xl:p-6">
							<SpanFeatured classes="md:text-3xl">
								{language ? "Below we provide you" : "A continuación"}{" "}
							</SpanFeatured>
							{language
								? "with all our means of contact so that you can request more information about our services:"
								: "te proporcionamos todos nuestros medios de contacto para que puedas solicitar más información acerca de nuestros servicios:"}
						</p>
						<p className="w-10/12 mx-auto my-3 sm:text-md lg:text-2xl">
							<SpanFeatured classes="md:text-2xl">
								{language ? "Address:" : "Dirección:"}{" "}
							</SpanFeatured>
							José María Velasco 13, Benito Juárez, CDMX. C.P. 03900. México:
						</p>
						<div className="flex w-full mx-auto sm:text-md">
							<p className="mx-auto my-3 sm:text-md lg:text-xl xl:text-2xl">
								<SpanFeatured>{language ? "Phone:" : "Teléfono:"}</SpanFeatured>{" "}
								55-4165-3386
							</p>
							<p className="mx-auto my-3 sm:text-md lg:text-xl xl:text-2xl">
								<SpanFeatured>WhatsApp:</SpanFeatured> 55-6221-0182
							</p>
						</div>
						<p className="mx-auto my-3 sm:text-md lg:text-xl xl:text-2xl">
							<SpanFeatured>ventas@yavocapital.com</SpanFeatured>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
