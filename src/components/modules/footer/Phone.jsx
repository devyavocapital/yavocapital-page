const Phone = () => {
	const classesParagraph = "text-sm mb-1";
	return (
		<div className="grid text-white m-auto w-10/12">
			<h4 className="text-xl mb-2">
				TITULAR Y ENCARGADA REGIONAL ESMERALDA MARÍA ARANDA SALAS
			</h4>
			<p className={classesParagraph}>Teléfono de contacto: (55) 41653386</p>
			<p className={classesParagraph}>E-mail: earanda@yavocapital.com</p>
			<p className={classesParagraph}>
				Horario de atención: lunes a viernes de 9:00 a 18:00 horas.
			</p>

			<p className="mb-2">
				Domicilio: Contreras 700, interior 302, Colonia San Jerónimo Aculco,
				C.P.10200, Alcaldía La Magdalena Contreras, Ciudad de México.
			</p>
		</div>
	);
};

export default Phone;
