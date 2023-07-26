import Image from "../common/Image";

const Description = () => {
	return (
		<div className="text-white text-justify grid w-11/12 md:grid-cols-2 mx-auto">
			<Image
				classes={
					"w-[200px] mx-auto my-auto md:mx-auto md:w-11/12 lg:w-8/12 xl:w-6/12"
				}
				name={"yavo"}
				src={"/logo-yavo.webp"}
			/>
			<div className="md:my-auto">
				<h3 className="text-md w-10/12 mx-auto md:w-full md:text-xl my-auto md:mb-3 lg:text-2xl">
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
		</div>
	);
};

export default Description;
