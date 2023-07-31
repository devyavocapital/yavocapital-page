import { Accordion } from "flowbite-react";
import ModuleFeature from "../components/modules/ModuleFeature";
import Button from "../components/modules/common/Button";
import Image from "../components/modules/common/Image";
import SpanFeatured from "../components/modules/common/SpanFeatured";
import useLanguage from "../hooks/useLanguage";

const Products = () => {
	const { language } = useLanguage();

	const classesButton =
		"text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto mt-3";
	const containerClasses =
		"absolute left-[150px] top-[175px] bg-[#fffcfc9b] shadow border-1 rounded-[17px] h-[330px] flex sm:top-0 sm:translate-y-[100px] md:w-5/12 md:h-[300px] md:relative md:-translate-y-[500px] md:translate-x-[150px] lg:-translate-y-[500px] lg:translate-x-[300px] lg:h-[350px] xl:-translate-y-[500px] xl:translate-x-[500px]";
	const imgClasses =
		"h-[600px] w-9/12 object-cover md:w-5/12 md:ml-24 rounded-3xl shadow-xl";

	return (
		<div>
			<div className="relative">
				<ModuleFeature
					containerClasses={containerClasses}
					imgClasses={imgClasses}
					imgSrc={"/bg-products2.jpg"}
					name={"Productos Financieros"}
				>
					{language ? (
						<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-4xl">
							<strong>
								A financial product is an instrument through which a natural or
								legal person resorts to save, invest or acquire a patrimonial
								asset.
							</strong>{" "}
							These financial products are adjusted to the person in question in
							terms of the level of risk involved in assuming it.
						</p>
					) : (
						<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-4xl">
							<strong>
								Un producto financiero es un instrumento a través del cual una
								persona física o moral recurre para ahorrar, invertir o adquirir
								un bien patrimonial.{" "}
							</strong>
							Dichos productos financieros, se ajustan a la persona en cuestión
							en cuanto al nivel de riesgo que conlleva asumirlo.
						</p>
					)}
				</ModuleFeature>
				<div className="mt-5 mb-32 relative md:grid md:mt-0 sm:mb-0 w-full sm:h-[400px] md:h-[500px] lg:h-full xl:h-auto">
					<img
						alt=""
						src="/bg-products3.jpg"
						className="sm:w-10/12 sm:h-4/5 sm:mx-auto sm:object-cover rounded-3xl shadow-xl"
						loading="lazy"
					/>
					<div className="absolute left-[15px] top-[190px] bg-[#fffcfcce] shadow border-1 w-11/12 rounded-[17px] h-[150px] flex sm:relative md:left-0 sm:top-0 sm:w-9/12 sm:mx-auto sm:-translate-y-[100px] md:-translate-y-[200px] ">
						{language ? (
							<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-4xl">
								At <SpanFeatured>YAVO Capital</SpanFeatured> we understand all
								these risks very well and we know the importance of offering you
								specialized advice to guide you step by step when acquiring any
								of our financial products, as well as their advantages and
								benefits
							</p>
						) : (
							<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-4xl">
								En <SpanFeatured>YAVO Capital</SpanFeatured> comprendemos muy
								bien todos estos riesgos y sabemos la importancia de ofrecerte
								una asesoría especializada para guiarte paso a paso al momento
								de adquirir alguno de nuestros productos financieros, así como
								sus ventajas y beneficios.
							</p>
						)}
					</div>
				</div>
				<div className="mt-2 relative flex justify-end">
					<div className="absolute left-0 w-4/6 top-[175px] bg-[#fffcfc9b] shadow border-1 rounded-[17px] h-[330px] flex sm:relative sm:translate-x-[100px]">
						{language ? (
							<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-3xl">
								<strong>
									Our mission is to promote the real estate and real estate
								</strong>
								development sector, that is why the financial instruments that
								we offer below are specifically designed to benefit all parties
								involved, either through a loan to develop homes (
								<SpanFeatured>Crédito Integral Línea III</SpanFeatured>) or a{" "}
								<SpanFeatured>Guarantee trust</SpanFeatured>.
							</p>
						) : (
							<p className="mx-2 my-auto md:text-lg lg:text-2xl xl:text-3xl">
								<strong>
									Nuestra misión es impulsar el sector de bienes raíces y
									desarrollo inmobiliario
								</strong>
								, es por eso que los instrumentos financieros que te ofrecemos a
								continuación están diseñados específicamente para beneficiar a
								todas las partes involucradas, ya sea a través de un{" "}
								<strong>crédito para desarrollar viviendas</strong> (
								<SpanFeatured>Crédito Integral Línea III</SpanFeatured>) o un{" "}
								<SpanFeatured>Fideicomiso de Garantía</SpanFeatured>.
							</p>
						)}
					</div>
					<img
						alt=""
						src="/bg-products1.jpg"
						className="h-[600px] w-9/12 object-cover sm:w-6/12 sm:mr-10 rounded-3xl shadow-xl"
						loading="lazy"
					/>
				</div>
			</div>

			<div className="grid md:flex justify-evenly my-6">
				<div className="max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto my-5 md:mb-0 border rounded-lg shadow">
					<Image
						classes={"rounded-t-lg w-full h-[200px] object-cover"}
						src={"/card-home-1.jpg"}
						alt="card img"
					/>
					<Accordion collapseAll>
						<Accordion.Panel>
							<Accordion.Title>
								Crédito Integral Línea III INFONAVIT
							</Accordion.Title>
							<Accordion.Content>
								{language ? (
									<>
										<p className="mb-2 text-gray-500 dark:text-gray-400">
											100% of the financing is granted by INFONAVIT and the
											resources managed by{" "}
											<SpanFeatured>YAVO CAPITAL</SpanFeatured>, delivering the
											resources to the Developer according to the progress of
											the work, within a maximum period of construction of the
											project of 6 months.
										</p>
										<ol className="pl-5 mt-2 space-y-1 list-decimal list-inside text-gray-700">
											<li>
												<SpanFeatured>FINANCING </SpanFeatured>: up to 100% of
												the total value of the project.
											</li>
											<li>
												<SpanFeatured>Granted by</SpanFeatured>: INFONAVIT with
												beneficiaries through Public Deed, with mortgage
												guarantee.
											</li>
											<li>
												<SpanFeatured>Developer with YAVO CAPITAL</SpanFeatured>
												: <strong>Contract with us.</strong>
											</li>
											<li>
												<SpanFeatured>YAVO CAPITAL</SpanFeatured>: Master
												collaboration contract to provide fund management and
												construction verification services..
											</li>
										</ol>
									</>
								) : (
									<>
										<p className="mb-2 text-gray-500 dark:text-gray-400">
											El 100% del <strong>financiamiento es otorgado</strong>{" "}
											por INFONAVIT y los recursos administrados por{" "}
											<SpanFeatured>YAVO CAPITAL</SpanFeatured> entregando los
											recursos al Desarrollador mediante ministraciones de
											acuerdo al avance de obra, en un plazo máximo de
											construcción del proyecto de 6 meses.
										</p>
										<ol className="pl-5 mt-2 space-y-1 list-decimal list-inside text-gray-700">
											<li>
												<SpanFeatured>FINANCIAMIENTO</SpanFeatured>: hasta el
												100 % del valor total del proyecto.
											</li>
											<li>
												<SpanFeatured>MONEDA</SpanFeatured>: Pesos Mexicanos
												(MXN).
											</li>
											<li>
												<SpanFeatured>INSTRUMENTACIÓN</SpanFeatured>:{" "}
												<strong>
													INFONAVIT con derechohabientes mediante Escritura
													Pública, con garantía hipotecaria..
												</strong>
											</li>
											<li>
												<SpanFeatured>
													Desarrollador con YAVO CAPITAL
												</SpanFeatured>
												: mediante contrato privado de precio alzado.
											</li>
											<li>
												<SpanFeatured>YAVO CAPITAL</SpanFeatured>: Contrato
												maestro de colaboración para prestar servicios de
												administración de fondos y verificación de obra.
											</li>
										</ol>
									</>
								)}
								<div className="grid">
									<Button
										value={language ? "More Information" : "Más información"}
										classes={classesButton}
										href="/productos-financieros/credito-integral-linea-3"
									/>
								</div>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>
				</div>
				<div className="max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto my-5 md:mb-0 border rounded-lg shadow">
					<Image
						classes={"rounded-t-lg w-full h-[200px] object-cover"}
						src={"/card-product.jpg"}
						alt="card img"
					/>
					<Accordion collapseAll>
						<Accordion.Panel>
							<Accordion.Title>
								{language ? "Guarantee Trust" : "Fideicomisos de Garantía"}
							</Accordion.Title>
							<Accordion.Content>
								{language ? (
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Our Fideicomiso de Garantía advises the developer from
										mapping the needs of the contributor of the land to the
										implementation of the Guarantee Trust; providing both
										parties with legal and financial certainty of the Project.
									</p>
								) : (
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										El{" "}
										<strong>
											fideicomiso de garantía que ofrecemos como servicios
											especializado asesora al desarrollador desde el mapeo de
											la necesidad del aportante de la tierra hasta la
											implementación del Fideicomiso de Garantía
										</strong>
										; brindando a ambas partes certeza legal y financiera del
										Proyecto. Contamos con{" "}
										<strong>
											expertos que brindarán asesoría personalizada
										</strong>{" "}
										durante todo el proceso.
									</p>
								)}
								<div className="grid">
									<Button
										value={language ? "More Information" : "Más información"}
										classes={classesButton}
										href="/productos-financieros/fideicomiso-de-garantia"
									/>
								</div>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default Products;
