import Image from "../common/Image";

const Description = () => {
	return (
		<div className="text-white text-justify grid">
			<Image
				classes={"w-[200px] mx-auto mt-3 md:mx-0 "}
				name={"yavo"}
				src={"/logo-yavo.webp"}
			/>
			<h3 className="text-md w-10/12 mx-auto md:w-full md:text-2xl my-2 md:my-10">
				YAVO CAPITAL, S.A.P.I. DE C.V., SOFOM, E.N.R. UNIDAD ESPECIALIZADA DE
				ATENCIÓN A USUARIOS (UNE)
			</h3>
			<p className="text-sm w-10/12 mx-auto md:w-full md:text-md">
				En cumplimiento a lo establecido en la Ley de Protección y Defensa de
				los Usuarios de Servicios Financieros, ponemos a su disposición la
				Unidad Especializada de Atención a Usuarios, que tiene por objeto
				atender las consultas, reclamaciones y aclaraciones de nuestros
				Clientes.
			</p>
		</div>
	);
};

export default Description;
