import ModuleBackground from "../../components/modules/ModuleBackground";
import Button from "../../components/modules/common/Button";
import SpanFeatured from "../../components/modules/common/SpanFeatured";

const Guarantee = () => {
	const classesButton =
		"text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm md:text-xl px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto";

	return (
		<div>
			<ModuleBackground
				title="¿Qué es un Fideicomiso De Garantía?"
				subtitles="En palabras sencillas podemos decir que un fideicomiso es un contrato en virtud a través del cual se transmite un bien, dinero o derechos, presentes o futuros, de su propiedad a otra persona, para que esta administre o invierta los bienes en beneficio propio o en beneficio de un tercero."
				src="bg-[url('/bg-guarantee.jpg')]"
			/>

			<div className="grid w-9/12 md:7/12 mx-auto my-5">
				<div>
					<h3 className="text-xl md:text-4xl my-4">
						<SpanFeatured>
							¿En qué consiste un Fideicomiso de Garantía?
						</SpanFeatured>
					</h3>
					<p className="text-lg">
						Es el fideicomiso en el cual{" "}
						<SpanFeatured>
							el fideicomitente transmite la propiedad de bienes al fiduciario
							para garantizar con los mismos el cumplimiento de una obligación
						</SpanFeatured>
						, ya sea propia o de un tercero, previendo que para el caso de
						incumplimiento el fiduciario proceda al remate en pública subasta de
						los mismos, ya sea bajo el procedimiento convencional que se pacte
						en el contrato, o bien bajo el procedimiento previsto en la ley,
						entregando el producto del remate al fideicomisario-acreedor en pago
						de la obligación.
					</p>
				</div>
				<div className="grid">
					<h3 className="text-xl md:text-4xl my-4">
						<SpanFeatured>
							¿Cuáles son las ventajas de un Fideicomiso de Garantía
						</SpanFeatured>
					</h3>
					<ol class="pl-5 mt-2 mb-5 space-y-1 list-decimal list-inside text-lg">
						<li>Armonización de intereses de las partes involucradas</li>
						<li>Confianza entre los socios del negocio y hacia terceros</li>
						<li>Imparcialidad del fiduciario</li>
						<li>Administración y asesoría profesional</li>
						<li>Eficacia en control operativo del negocio</li>
						<li>Respaldo de una infraestructura institucional</li>
						<li>Confidencialidad (secreto fiduciario)</li>
						<li>Transparencia del negocio entre las partes y hacia terceros</li>
						<li>Seguridad jurídica</li>
					</ol>
					<p className="text-lg">
						El fideicomiso de garantía que ofrecemos como servicios
						especializado{" "}
						<strong>
							asesora al desarrollador desde el mapeo de la necesidad del
							aportante de la tierra hasta la implementación del Fideicomiso de
							Garantía
						</strong>
						; brindando a ambas partes certeza legal y financiera del Proyecto.
					</p>

					<Button
						value={"Contáctanos para más información"}
						classes={classesButton}
						href="/contacto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Guarantee;
