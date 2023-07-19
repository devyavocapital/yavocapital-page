const Phone = () => {
	const classesParagraph = "text-sm mb-3";
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
	);
};

export default Phone;
