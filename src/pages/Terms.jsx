import Button from "../components/modules/common/Button";
import SpanFeatured from "../components/modules/common/SpanFeatured";

const Terms = () => {
	const classesButton =
		"text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm md:text-xl px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto my-5";

	return (
		<div className="grid">
			<h1 className="text-center text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-3">
				Aviso de privacidad
			</h1>
			<div className="w-10/12 md:w-8/12 mx-auto grid">
				<p className="mb-3">
					En cumplimiento a la Ley Federal de Protección de datos personales en
					posesión de particulares (La ley), YAVO CAPITAL, SOCIEDAD ANÓNIMA
					PROMOTORA DE INVERSIÓN DE CAPITAL VARIABLE, SOFOM ENR, (YAVO CAPITAL)
					manifiesta ser responsable del tratamiento de los datos personales que
					nos proporcione, mismos que serán protegidos y utilizados
					exclusivamente para los fines que nos autorice, conforme a lo
					dispuesto en La ley y demás normatividad que resulte aplicable. En
					virtud del presente aviso de privacidad, se establece lo siguiente:
				</p>

				<h4>TÉRMINOS Y CONDICIONES</h4>

				<ol class="pl-5 mt-2 space-y-1 list-decimal list-inside text-gray-700">
					<li className="mb-5">
						<SpanFeatured>OBJETO</SpanFeatured>.- YAVO CAPITAL, trata los datos
						personales para dar cumplimiento a su objeto, así como para dar
						atención a las solicitudes de ejercicio de derechos ARCO que se le
						presenten en su calidad de responsable
						<p className="mb-3">
							El presente Aviso de Privacidad tiene por objeto la protección de
							sus datos personales, mediante su tratamiento legítimo, controlado
							e informado, a efecto de garantizar su privacidad, así como su
							derecho a la autodeterminación informativa.{" "}
						</p>
					</li>
					<li className="mb-5">
						<SpanFeatured>CONCEPTO DE “DATO PERSONAL”</SpanFeatured>.- Se
						entiende como cualquier información concerniente a una persona
						física identificada o identificable.
					</li>
					<li className="mb-5">
						<SpanFeatured>FINALIDAD</SpanFeatured>.- Los datos personales que
						YAVO CAPITAL recabe, serán utilizados para atender las siguientes
						finalidades:
						<p className="mb-3">
							a) Aquellas indispensables para el cumplimiento de la relación
							jurídica, YAVO CAPITAL y usted, las cuales son: (i) Para
							corroborar su identidad y veracidad de la información
							proporcionada; (ii) Para integrar expedientes, bases de datos y
							sistemas necesarios para llevar a cabo las operaciones
							correspondientes; (iii) Para cumplimentar disposiciones de
							conocimiento del cliente y prevención de lavado de dinero, ya sea
							para YAVO CAPITAL o para sus filiales o subsidiarias que formen
							parte del mismo grupo, conforme lo prevé la legislación
							respectiva; (iv) para mantener la relación jurídica que se genere;
							(v) Para realizar las investigaciones y acciones que consideren
							necesarias, a efecto de comprobar a través de terceros contratados
							para ello, dependencia u autoridad, la veracidad de los datos que
							les fueron proporcionados.
						</p>
						<p className="mb-3">
							b) Aquellas no indispensables para el cumplimiento de dicha
							relación jurídica. De manera adicional, se podrán utilizar sus
							datos personales para las siguientes finalidades secundarias: (i)
							mercadotecnia, publicidad y prospección comercial; (ii) ofrecerle,
							en su caso, otros productos propios o de cualquiera de sus
							asociadas o sociedades integrantes del Grupo; (iii) remitirle
							promociones de otros servicios relacionados con los productos que
							ofrece YAVO CAPITAL.
						</p>
					</li>
					<li className="mb-5">
						<SpanFeatured>USO DE COOKIES</SpanFeatured>.- Le informamos que YAVO
						CAPITAL utiliza en su sitio de internet cookies; a través de estos
						mecanismos se recaban datos de manera automática y simultánea para
						monitorear su comportamiento como usuario de los servicios de
						internet.{" "}
						<p className="mb-3">
							Así mismo, le informamos que puede deshabilitar el uso de estos
							mecanismos siguiendo el procedimiento para desactivación,
							establecido para tu navegador de internet.
						</p>
					</li>
					<li className="mb-5">
						<SpanFeatured>DOMICILIO</SpanFeatured>.- El domicilio de YAVO
						CAPITAL es el ubicado en Jose María Velasco cambiar dirección a Av.
						Contreras 700, San Jerónimo Lídice, Magdalena Contreras, 10400,
						Oficina 302, Ciudad de México.
					</li>
					<li className="mb-5">
						<SpanFeatured>AUTORIZACIÓN</SpanFeatured>.- Al proporcionar sus
						Datos Personales por escrito, a través de una solicitud, formato en
						papel, formato digital, correo electrónico, o cualquier otro
						documento, acepta y autoriza a YAVO CAPITAL a utilizar y tratar de
						forma automatizada sus datos personales e información suministrados,
						los cuales formarán parte de nuestra base de datos con la finalidad
						de usarlos, en forma enunciativa, más no limitativa, para:
						identificarlo, ubicarlo, contactarlo, enviarle información, por
						cualquier medio que permita la ley para cumplir con nuestros fines
						sociales. Mediante la aceptación y autorización para el tratamiento
						de sus datos personales en los términos antes señalados, nos faculta
						expresamente a transferirlos a autoridades de cualquier nivel
						(Federales, Estatales, Municipales), organismos públicos y privados,
						diversas empresas y/o personas físicas, dentro y fuera de México,
						con el propósito de llevar a cabo el objeto de la relación entre
						usted y YAVO CAPITAL.
					</li>
					<li className="mb-5">
						<SpanFeatured>DERECHOS ARCO</SpanFeatured>.- En términos de lo
						establecido por el artículo 22 de la Ley, usted tiene derecho en
						cualquier momento a ejercer sus derechos de acceso, rectificación,
						cancelación y oposición al tratamiento de tus datos personales,
						(derechos ARCO) mediante la solicitud vía correo electrónico
						dirigida a la Licenciada Reyna Rosa Marroquin López al correo
						rmarroquin@yavocapital.com, o por escrito en el domicilio oficial de
						YAVO CAPITAL señalado con anterioridad, mediante solicitud que reúna
						los requisitos exigidos por la Ley.
					</li>
					<li className="mb-5">
						<SpanFeatured>TEMPORALIDAD</SpanFeatured>. - La temporalidad del
						manejo de sus Datos Personales será indefinida a partir de la fecha
						en que nos sean proporcionados, pudiendo oponerse al manejo de los
						mismos en cualquier momento que lo considere oportuno, con las
						limitaciones de Ley; en caso de que su solicitud de oposición sea
						procedente, YAVO CAPITAL dejará de manejar sus Datos Personales sin
						ninguna responsabilidad de nuestra parte.
					</li>
					<li className="mb-5">
						<SpanFeatured>AREA RESPONSABLE</SpanFeatured>.- El área responsable
						del tratamiento de sus datos personales, está obligada a cumplir con
						los principios de licitud, consentimiento, información, calidad,
						finalidad, lealtad, proporcionalidad y responsabilidad tutelados en
						la Ley; por tal motivo con fundamento en los artículos 13 y 14 de la
						Ley, YAVO CAPITAL, se compromete a guardar estricta confidencialidad
						de sus datos personales, así como a mantener las medidas de
						seguridad administrativas, técnicas y físicas que permitan
						protegerlos contra cualquier daño, pérdida, alteración, acceso o
						tratamiento no autorizado.
					</li>
					<li className="mb-5">
						<SpanFeatured>MODIFICACIÓN</SpanFeatured>.- El presente aviso de
						privacidad es susceptible de modificaciones, cambios o
						actualizaciones derivadas de nuevos requerimientos legales; de
						necesidades propias de YAVO CAPITAL, por los servicios que
						ofrecemos; de nuestras prácticas de privacidad; de cambios en
						nuestro modelo de negocio, o por otras causas.
						<p className="mb-3">
							Cualquier modificación al presente aviso de privacidad le será
							notificada a través de un comunicado por escrito enviado a su
							correo electrónico proporcionado; sin embargo, le recomendamos
							consultar constantemente nuestro aviso de privacidad en nuestra
							página de internet www.yavocapital.compara mantenerse actualizado
							de las últimas modificaciones al mismo.
						</p>
					</li>
					<li className="mb-5">
						<SpanFeatured>ACEPTACIÓN</SpanFeatured>.- Al momento de presentar su
						solicitud, documentos e información para solicitar los servicios de
						YAVO CAPITAL se presume su total aceptación al contenido del
						presente Aviso de Privacidad. No obstante, le solicitamos suscribir
						de conformidad el presente documento, mismo que formará parte de su
						expediente.
						<p className="mb-3">
							Acepto de conformidad el contenido del Aviso de Privacidad
							proporcionado por YAVO CAPITAL.
						</p>
					</li>
				</ol>

				<Button
					value={"Contáctanos para más información"}
					classes={classesButton}
					href="/contacto"
				/>
			</div>
		</div>
	);
};

export default Terms;
