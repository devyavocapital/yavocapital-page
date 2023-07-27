import { Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [agree, setAgree] = useState(true);
	const nameRef = useRef();
	const apPaternoRef = useRef();
	const apMaternoRef = useRef();
	const telefonoRef = useRef();
	const emailRef = useRef();
	const seguroRef = useRef();
	const agreeRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!agreeRef.current.checked) {
			setAgree(false);
			return null;
		}

		setAgree(true);

		const data = {
			nombre: nameRef.current.value,
			apPaterno: apPaternoRef.current.value,
			apMaterno: apMaternoRef.current.value,
			email: emailRef.current.value,
			telefono: telefonoRef.current.value,
			seguro: seguroRef.current.value,
		};

		console.log(data);
	};

	return (
		<>
			<h1 className="text-center text-xl md:text-4xl mb-5">
				Registrate para más información
			</h1>
			<div className="flex justify-center w-full">
				<form className="flex flex-col gap-4 w-8/12" onSubmit={handleSubmit}>
					<div className="w-full grid md:grid-cols-2 gap-4">
						<div>
							<Label htmlFor="nombre" value="Nombre *" />
							<TextInput
								id="nombre"
								placeholder="Juan Carlos"
								shadow
								type="text"
								ref={nameRef}
								required
							/>
						</div>
						<div>
							<Label htmlFor="apellidoPaterno" value="Apellido Paterno *" />
							<TextInput
								id="apellidoPaterno"
								placeholder="Lopéz"
								shadow
								type="text"
								ref={apPaternoRef}
								required
							/>
						</div>
					</div>
					<div className="w-full grid md:grid-cols-2 gap-4">
						<div>
							<Label htmlFor="apellidoMaterno" value="Apellido Materno *" />
							<TextInput
								id="apellidoMaterno"
								placeholder="Martínez"
								shadow
								type="text"
								ref={apMaternoRef}
								required
							/>
						</div>
						<div>
							<Label htmlFor="telefono" value="Teléfono *" />
							<TextInput
								id="telefono"
								placeholder="551122334455"
								shadow
								type="text"
								ref={telefonoRef}
								required
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-1 gap-4">
						<div>
							<Label htmlFor="email" value="Email *" />
							<TextInput
								id="email"
								placeholder="correo.lm@gmail.com"
								shadow
								type="email"
								ref={emailRef}
								required
							/>
						</div>
					</div>
					<div className="w-full grid grid-cols-1 gap-4">
						<Label
							htmlFor="seguro"
							value="¿Actualmente estás dado de alta en el Seguro Social?"
						/>
						<Select id="seguro" ref={seguroRef} required>
							<option value={""} disabled>
								{""}
							</option>
							<option value={"Si"}>Si</option>
							<option value={"No"}>No</option>
						</Select>
					</div>

					<div className="flex items-center gap-2">
						<Checkbox id="accept" ref={agreeRef} />
						<Label className="flex" htmlFor="agree">
							<p>He leído el </p>
							<Link
								className="text-cyan-600 hover:underline dark:text-cyan-500 ml-1"
								href="/forms"
							>
								<p> Aviso de privacidad</p>
							</Link>
						</Label>
					</div>
					<input
						type="submit"
						value={"Registrar"}
						className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto my-5 w-[200px] hover:cursor-pointer"
					/>
				</form>
			</div>
			<div className="grid">
				{!agree && (
					<p className="w-6/12 mx-auto italic text-red-600 mb-5">
						Desafortunadamente no eres candidato para el programa te invitamos a
						visitar (Página INFONAVIT) para que puedes revisar las distintas
						opciones de crédito que se puedes usar.
					</p>
				)}
			</div>
		</>
	);
};

export default Register;
