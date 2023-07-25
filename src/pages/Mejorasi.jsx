import React from "react";
import ModuleBackground from "../components/modules/ModuleBackground";
import Button from "../components/modules/common/Button";
import SpanFeatured from "../components/modules/common/SpanFeatured";
import useLanguage from "../hooks/useLanguage";

const Mejorasi = () => {
	const { language } = useLanguage();

	const subtitles = [
		{
			id: 1,
			description:
				"Es un crédito para derechohabientes sin relación laboral vigente donde podrás reparar, mejorar o ampliar tu vivienda sin que modifiques la estructura de tu casa.",
		},
		{
			id: 2,
			description:
				"Para que puedas solicitar el crédito, debes habitar la vivienda en la que realizarás mejoras o reparaciones y el inmueble debe estar a tu nombre o bien acreditar legítima tenencia del mismo.",
		},
	];

	return (
		<div>
			<ModuleBackground
				src={"bg-[url('/bg-mejorasi.jpg')]"}
				buttonValue={language ? "More information" : "Más Información"}
				title={"¿Que es Mejorasi?"}
				subtitles={subtitles}
			/>

			<p className="text-center italic font-bold">
				Para Derechohabientes que ya cuentan con su tarjeta y desean realizar su
				activación, consulta de saldo o reporte por robo o extravío pueden
				marcar al Call Center al teléfono: 5590585240
			</p>
			<div className="my-5 grid md:grid-cols-2">
				<div className="h-full text-2xl text-center w-11/12 mx-auto ">
					<p className="mb-3 md:mt-5 lg:mt-10">
						Apreciable usuario de <SpanFeatured>YAVOCAPITAL</SpanFeatured> en
						esta sección podrás ingresar al armado de tu expediente digital para
						poder acceder al crédito MEJORASÍ.
					</p>
					<p className="mb-3 md:mt-5 lg:mt-10">
						Oprime el botón de <SpanFeatured>MEJORASÍ</SpanFeatured> para poder
						empezar con tu trámite.
					</p>
				</div>
				<div className="backgroundPrimary grid h-[300px] w-full">
					<p className="text-3xl text-white mx-auto my-auto font-bold w-8/12 lg:text-4xl">
						Accede al armado de tu expediente:
					</p>
					<Button
						value={"MEJORASI"}
						arrowLeft={true}
						classes={
							"bg-white uppercase text-center mx-auto my-auto py-5 px-10 flex lg:text-3xl"
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Mejorasi;
