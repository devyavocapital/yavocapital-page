import React from "react";

const Profile = () => {
	return (
		<main className="md:w-10/12 lg:w-8/12 grid md:mx-auto p-5">
			<h1 className="text-2xl md:text-3xl lg:text-5xl text-center md:mb-3 lg:mb-6">
				Mi Perfil
			</h1>
			<section className="grid md:flex">
				<div className="md:col-span-2 mx-auto md:mx-0">
					<img
						alt="avatar perfil"
						src="/avatar.png"
						className="w-[200px] p-3"
					/>
				</div>
				<section>
					<div className="grid mb-5">
						<p>Razón Social:</p>
						<p>RFC:</p>
						<p>Nombre Comercial:</p>
						<p>Teléfono:</p>
						<p>Nombre del Representante:</p>
						<p>Apellidos del Representante:</p>
						<p>Teléfono de contacto:</p>
						<p>Email de contacto:</p>
					</div>
					<div className="grid mb-5">
						<h3 className="text-lg md:text-2xl lg:text-3xl mb-3">Dirección</h3>
						<p>Calle:</p>
						<p>Número exterior:</p>
						<p>Número interior:</p>
						<p>Colonia:</p>
						<p>Municipio:</p>
						<p>Código postal:</p>
						<p>Estado:</p>
					</div>
					{/* <div className="grid">
						<p>Banco:</p>
						<p>Número de cuenta:</p>
						<p>CLABE:</p>
					</div> */}
				</section>
			</section>
		</main>
	);
};

export default Profile;
