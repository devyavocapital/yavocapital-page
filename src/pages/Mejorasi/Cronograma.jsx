import React from "react";
import ModuleBackground from "../../components/modules/ModuleBackground";

const Cronograma = () => {
	return (
		<div>
			<ModuleBackground
				title="Nuestro recorrido"
				subtitles=""
				src="bg-[url('/bg-cronograma.jpg')]"
			/>

			<div className="grid md:flex my-5 w-9/12 mx-auto">
				<img
					alt="recorrido imagen"
					src="/cronograma/ParqueEulogio.jpg"
					className="rounded-xl h-auto md:w-[400px] lg:w-[500px] object-cover"
				/>
				<div className="mx-auto">
					<h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center p-5 colorPrimary">
						Parque Eulogio
					</h3>
					<p className="ml-5 font-bold text-lg sm:text-xl md:text-xl lg:text-xl">
						Próximamente encuéntranos del _ al _ en Estado del País (Mérida),
						ubicación(Parque Eulogio) a partir de las ___ hasta las ___.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cronograma;
