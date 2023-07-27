import { Carousel } from "flowbite-react";
import ModuleFeature from "../../components/modules/ModuleFeature";
import Button from "../../components/modules/common/Button";
import SpanFeatured from "../../components/modules/common/SpanFeatured";

const Credit = () => {
	const titleClasses = "text-lg my-2 colorPrimary lg:text-2xl lg:my-4";
	const containerClasses =
		"absolute left-[150px] top-[175px] bg-[#fffcfc9b] shadow border-1 rounded-[17px] h-[350px] flex sm:top-0 sm:translate-y-[100px] md:w-5/12 md:h-[375px] md:relative md:-translate-y-[500px] md:translate-x-[150px] lg:-translate-y-[500px] lg:translate-x-[300px] lg:h-[450px] xl:-translate-y-[550px] xl:translate-x-[500px] xl:h-[500px]";
	const imgClasses =
		"h-[600px] w-9/12 object-cover md:w-7/12 md:ml-24 rounded-3xl shadow-xl";

	return (
		<main>
			<ModuleFeature
				containerClasses={containerClasses}
				imgClasses={imgClasses}
				imgSrc={"/bg-credit.jpg"}
				name={"Credito Linea III"}
			>
				<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-3xl">
					Es uno de nuestros productos financieros en el cual el 100% del
					<strong>
						{" "}
						Crédito de INFONAVIT para el financiamiento de tu proyecto de
						desarrollo de vivienda o desarrollo habitacional
					</strong>{" "}
					es otorgado por dicha institución y{" "}
					<strong>los recursos son administrados por</strong>{" "}
					<SpanFeatured>YAVO CAPITAL</SpanFeatured>
					entregando los recursos al Desarrollador mediante ministraciones de
					acuerdo al avance de obra, en un plazo máximo de construcción del
					proyecto de 6 meses.{" "}
				</p>
			</ModuleFeature>

			<section className="grid mx-auto w-11/12 text-sm my-5 md:w-10/12 lg:text-lg xl:w-8/12">
				<h2 className={`${titleClasses} text-center`}>
					¿En qué consiste el Crédito Integral Línea III de INFONAVIT?
				</h2>
				<div>
					<p>
						A continuación te explicamos todo lo relacionado al{" "}
						<strong>Crédito Integral de Línea III de INFONAVIT</strong>, para
						que vuelvas una realidad tu proyecto de desarrollo de vivienda o
						desarrollo habitacional:
					</p>
					<h3 className={titleClasses}>Financiamiento:</h3>
					<p>
						<strong>
							Hasta el 100 % del valor total del proyecto inmobiliario.{" "}
						</strong>
					</p>
					<h3 className={titleClasses}>Instrumentación:</h3>
					<ul>
						<li>
							<strong>Crédito INFONAVIT con derechohabientes:</strong> mediante
							Escritura Pública, con garantía hipotecaria.
						</li>
						<li>
							<strong>Desarrollador con YAVO CAPITAL:</strong> Mediante contrato
							privado de precio alzado.
						</li>
						<li>
							<strong>YAVO CAPITAL:</strong> Contrato maestro de colaboración
							para prestar servicios de administración de fondos y verificación
							de obra.
						</li>
					</ul>

					<h3 className={titleClasses}>Disposición del crédito:</h3>
					<p>
						<strong>Anticipo será hasta del 80 % del valor del terreno.</strong>{" "}
						El resto del crédito en ministraciones con base en el avance de
						obra.
					</p>

					<h3 className={titleClasses}>Comisiones:</h3>
					<ul>
						<li>
							<strong>Por estudio de factibilidad:</strong> 0.65 % más I.V.A.
							sobre el valor total de las viviendas (valor comercial), que
							cubrirá el constructor a YAVO CAPITAL.
						</li>
						<li>
							<strong>
								Comisión por Administración de fondos y supervisión:
							</strong>{" "}
							1.5 % más I.V.A. sobre el valor total de las viviendas (valor
							comercial) sin incluir el valor del terreno lotificado.
						</li>
						<li>
							<strong>Comisión mercantil:</strong> 0.20 % más I.V.A. sobre el
							valor total de la vivienda (valor comercial) sin incluir el valor
							del terreno lotificado.{" "}
						</li>
					</ul>
					<p>
						Se va constituyendo con el <strong>10 %</strong> de cada una de las
						ministraciones.{" "}
					</p>
					<p>
						Se reembolsará al desarrollador una vez que se hayan emitido las
						DTUs.
					</p>
					<p>
						<strong>Póliza de vicios ocultos:</strong> Necesaria para la entrega
						del DTUs.
					</p>

					<p>
						<strong>Hasta 1 año</strong> impermeabilización e instalación
						eléctrica.
					</p>

					<p>
						<strong>Hasta 6 meses</strong> instalaciones hidráulicas, sanitarias
						y gas.
					</p>

					<p>
						<strong>Hasta 3 meses</strong> pisos, puertas, ventanas, muebles
						sanitarios, lavaderos y fregaderos.
					</p>
				</div>

				<div className="my-5 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
					<Carousel>
						<img alt="..." src="/carousel/mapa-credito-yavo.jpg" />
						<img alt="..." src="/carousel/mapa-credito-yavo2.jpg" />
						<img alt="..." src="/carousel/mapa-credito-yavo3.jpg" />
					</Carousel>
				</div>

				<Button
					classes={
						"text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm lg:text-xl px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto my-5 w-[200px] md:w-[500px] hover:cursor-pointer"
					}
					href={"/contacto"}
					value={"Contáctanos para solicitar tu crédito"}
				/>
			</section>

			{/* <video
				src="/video/intro-yavocapital.mp4s"
				about="intro"
				autoPlay={true}
				muted
			/> */}
		</main>
	);
};

export default Credit;
