import Image from "./common/Image";
import SpanFeatured from "./common/SpanFeatured";

const ModuleDescription = ({ language }) => {
	return (
		<div className="grid md:flex md:flex-row-reverse mb-5">
			<div className="w-full">
				<Image
					name="backgound description"
					src="/bg-financial.jpg"
					classes="w-full md:h-[100%] md:w-10/12 md:object-cover"
				/>
			</div>
			<div>
				<div className="w-10/12 mx-auto bg-white rounded-t-lg my-4">
					{language ? (
						<div className="flex flex-col">
							<div className="md:w-full md:mb-4">
								<h1 className="font-bold text-[36px] text-center md:text-left md:text-7xl">
									We promote
									<SpanFeatured>real estate development </SpanFeatured>
									in Mexico
								</h1>
							</div>

							<div className="md:flex md:flex-row description">
								<div className="md:w-11/12 md:px-3">
									<p className="mb-5">
										We can define
										<SpanFeatured>
											real estate development as the management and coordination
											of different agents and activities involved in the
											creation of a property, with the goal of satisfying a need
											for housing (or assets)
										</SpanFeatured>{" "}
										for buyers and investors. This activity is highly complex
										and therefore requires a highly specialized team and advice.
									</p>
									<p className="mb-5">
										It is due to the complexity of the stages of a real estate
										development and because we believe that Mexico has
										incredible potential in the real estate sector, that we
										offer our help and advice in one of the most important
										steps: the financing of your real estate project.
									</p>
									<p className="mb-5">
										Our financial products are focused on evaluating the
										viability of the project and leading the developer towards
										obtaining the necessary capital to make the project a
										reality.
									</p>
								</div>
								<div className="md:w-11/12 md:px-3">
									<p className="mb-5">
										Contact us and discover why we are the No. 1 Financer in
										Real Estate;
									</p>
									<p className="mb-5">
										Linea III is aimed at social housing developers and its
										advantages, according to financial players in the sector
										such as Yavo Capital, would generate an economic spill of
										around 1.5 BLN USD and detonate 72 new economic activities.
									</p>
								</div>
							</div>
						</div>
					) : (
						<div className="flex flex-col">
							<div className="md:w-full md:mb-4">
								<h1 className="font-bold text-[36px] text-center md:text-left md:text-7xl">
									Promovemos el{" "}
									<SpanFeatured>desarrollo inmobiliario </SpanFeatured>
									en México
								</h1>
							</div>

							<div className="md:flex md:flex-row description">
								<div className="md:w-11/12 md:px-3">
									<p className="mb-5">
										Podemos definir al desarrollo inmobiliario como la gestión y
										coordinación de distintos agentes y actividades involucradas
										para la creación de un inmueble, con el objetivo de
										satisfacer una necesidad de vivienda (o patrimonio) para
										compradores e inversionistas.
									</p>
									<p className="mb-5">
										Dicha actividad es altamente compleja y por lo tanto
										necesita de un equipo y asesoría altamente especializado.
									</p>
									<p className="mb-5">
										Es debido a la complejidad de las{" "}
										<strong>etapas de un desarrollo inmobiliario</strong> y
										porque creemos que México posee un potencial increíble en el
										sector de bienes raíces, que ofrecemos nuestra ayuda y
										asesoría en uno de los pasos más importantes: el
										financiamiento de tu proyecto inmobiliario.
									</p>
								</div>
								<div className="md:w-11/12 md:px-3">
									<p className="mb-5">
										Nuestros <SpanFeatured>productos financieros</SpanFeatured>{" "}
										están enfocados en evaluar la viabilidad del proyecto y
										conducir al desarrollador hacia la obtención del capital
										necesario para volver una realidad dicho proyecto.
									</p>
									<p className="mb-5">
										Acércate a nosotros y descubre por qué somos la Capital
										Financiera No.1 en Bienes Raíces; somos{" "}
										<SpanFeatured>YAVO CAPITAL.</SpanFeatured>
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ModuleDescription;
