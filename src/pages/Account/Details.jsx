import { Select } from "flowbite-react";
import { useFormik } from "formik";
import ButtonForm from "../../components/modules/common/ButtonForm";
import { states } from "../../utils/states";

const Details = () => {
	// const validation = Yup.object().shape({
	// 	socialName: Yup.string(). (
	// 		"El Campo de razón social es Obligatorio",
	// 	),
	// 	rfc: Yup.string(). ("El Campo de rfc es Obligatorio"),
	// 	comercialName: Yup.string(). (
	// 		"El Campo de nombre del comercio es Obligatorio",
	// 	),
	// 	comercialPhone: Yup.string(). (
	// 		"El Campo de teléfono del comercio es Obligatorio",
	// 	),
	// 	leaderName: Yup.string(). (
	// 		"El Campo de nombre del responsable es Obligatorio",
	// 	),
	// 	leaderLastName: Yup.string(). (
	// 		"El Campo de apellidos del responsable es Obligatorio",
	// 	),
	// 	contactPhone: Yup.string(). (
	// 		"El Campo de número del contacto es Obligatorio",
	// 	),
	// 	contactEmail: Yup.string()
	// 		.email()
	// 		. ("El Campo del email de contacto es Obligatorio"),
	// 	street: Yup.string(). ("El Campo de la calle es Obligatorio"),
	// 	exteriorNumber: Yup.string(). (
	// 		"El Campo del número exterior es Obligatorio",
	// 	),
	// 	internalNumber: Yup.string(),
	// 	suburb: Yup.string(). ("El Campo de la colonia es Obligatorio"),
	// 	town: Yup.string(). ("El Campo del municipio es Obligatorio"),
	// 	zipCode: Yup.string(). ("El Campo de codigo postal es Obligatorio"),
	// 	state: Yup.string(). ("El Campo del estado es Obligatorio"),
	// 	bank: Yup.string(). ("El Campo del banco es Obligatorio"),
	// 	accountNumber: Yup.string(). (
	// 		"El Campo del número de cuenta es Obligatorio",
	// 	),
	// 	clabe: Yup.string(). ("El Campo de número de clabe es Obligatorio"),
	// });

	const newAccountFormik = useFormik({
		initialValues: {
			socialName: "",
			rfc: "",
			comercialName: "",
			comercialPhone: "",
			leaderName: "",
			leaderLastName: "",
			contactPhone: "",
			contactEmail: "",
			street: "",
			exteriorNumber: "",
			internalNumber: "",
			suburb: "",
			town: "",
			zipCode: "",
			state: "",
			bank: "",
			accountNumber: "",
			clabe: "",
			checked: false,
		},
		// validationSchema: validation,
		onSubmit: (values) => {
			console.log({ values });
			if (!values.checked) {
				console.log("Debe de aceptar que los datos capturados son veridicos.");
			}
		},
	});

	return (
		<main className="h-auto grid mx-auto mt-auto w-8/12 lg:w-10/12 mb-10">
			<section className="border-4 border-orange-400 rounded-2xl my-auto p-10">
				<h1 className="my-auto text-2xl md:text-4xl lg:text-5xl font-bold py-5">
					Complemente su información
				</h1>
				<form
					onSubmit={newAccountFormik.handleSubmit}
					className="mt-5 grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-3"
				>
					<div className="mb-6">
						<label
							htmlFor="socialName"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Razón Social
						</label>
						<input
							name="socialName"
							type="text"
							id="socialName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Empresa S.A. de C.V."
							onChange={newAccountFormik.handleChange}
							onBlur={newAccountFormik.handleBlur}
							value={newAccountFormik.values.socialName}
						/>
						{newAccountFormik.errors.socialName &&
							newAccountFormik.touched.socialName && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.socialName}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="rfc"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							RFC
						</label>
						<input
							name="rfc"
							type="text"
							id="rfc"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="YUODMA0101010A0"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.rfc}
						/>
						{newAccountFormik.errors.rfc && newAccountFormik.touched.rfc && (
							<p className="italic text-red-600">
								{newAccountFormik.errors.rfc}
							</p>
						)}
					</div>
					<div className="mb-6 md:col-span-2">
						<label
							htmlFor="comercialName"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Nombre del Comercio
						</label>
						<input
							name="comercialName"
							type="text"
							id="comercialName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Empresa"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.comercialName}
						/>
						{newAccountFormik.errors.comercialName &&
							newAccountFormik.touched.comercialName && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.comercialName}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="comercialPhone"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Teléfono del Comercio
						</label>
						<input
							name="comercialPhone"
							type="text"
							id="comercialPhone"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="5512345678"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.comercialPhone}
						/>
						{newAccountFormik.errors.comercialPhone &&
							newAccountFormik.touched.comercialPhone && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.comercialPhone}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="leaderName"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Nombre del representante
						</label>
						<input
							name="leaderName"
							type="text"
							id="leaderName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Juan Carlos"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.leaderName}
						/>
						{newAccountFormik.errors.leaderName &&
							newAccountFormik.touched.leaderName && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.leaderName}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="leaderLastName"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Apellidos del representante
						</label>
						<input
							name="leaderLastName"
							type="text"
							id="leaderLastName"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Morales Gutierrez"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.leaderLastName}
						/>
						{newAccountFormik.errors.leaderLastName &&
							newAccountFormik.touched.leaderLastName && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.leaderLastName}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="contactPhone"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Teléfono de contacto
						</label>
						<input
							name="contactPhone"
							type="text"
							id="contactPhone"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="5523456789"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.contactPhone}
						/>
						{newAccountFormik.errors.contactPhone &&
							newAccountFormik.touched.contactPhone && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.contactPhone}
								</p>
							)}
					</div>
					<div className="mb-6 md:col-span-2 md:col-start-1">
						<label
							htmlFor="contactEmail"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Email de contacto
						</label>
						<input
							name="contactEmail"
							type="text"
							id="contactEmail"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="contact@empresa.com"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.contactEmail}
						/>
						{newAccountFormik.errors.contactEmail &&
							newAccountFormik.touched.contactEmail && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.contactEmail}
								</p>
							)}
					</div>
					<div className="mb-6 md:col-start-1">
						<label
							htmlFor="street"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Calle
						</label>
						<input
							name="street"
							type="text"
							id="street"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.street}
						/>
						{newAccountFormik.errors.street &&
							newAccountFormik.touched.street && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.street}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="exteriorNumber"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Número exterior
						</label>
						<input
							name="exteriorNumber"
							type="text"
							id="exteriorNumber"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="#"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.exteriorNumber}
						/>
						{newAccountFormik.errors.exteriorNumber &&
							newAccountFormik.touched.exteriorNumber && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.exteriorNumber}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="internalNumber"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Número interior
						</label>
						<input
							name="internalNumber"
							type="text"
							id="internalNumber"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="#"
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.internalNumber}
						/>
						{newAccountFormik.errors.internalNumber &&
							newAccountFormik.touched.internalNumber && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.internalNumber}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="zipCode"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Código postal
						</label>
						<input
							name="zipCode"
							type="text"
							id="zipCode"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.zipCode}
						/>
						{newAccountFormik.errors.zipCode &&
							newAccountFormik.touched.zipCode && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.zipCode}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="suburb"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Colonia
						</label>
						<input
							name="suburb"
							type="text"
							id="suburb"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.suburb}
						/>
						{newAccountFormik.errors.suburb &&
							newAccountFormik.touched.suburb && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.suburb}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="town"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Municipio
						</label>
						<input
							name="town"
							type="text"
							id="town"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.town}
						/>
						{newAccountFormik.errors.town && newAccountFormik.touched.town && (
							<p className="italic text-red-600">
								{newAccountFormik.errors.town}
							</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="state"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Estado
						</label>
						<Select
							id="state"
							required
							onChange={newAccountFormik.handleChange}
							name="state"
						>
							<option value={"--Selecciona un estado--"} disabled selected>
								{"--Selecciona un estado--"}
							</option>
							{states.map(({ clave, nombre }) => (
								<option key={clave} value={nombre}>
									{nombre}
								</option>
							))}
						</Select>
						{/* <input
							name="state"
							type="text"
							id="state"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.state}
						/> */}
						{newAccountFormik.errors.state &&
							newAccountFormik.touched.state && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.state}
								</p>
							)}
					</div>
					<div className="mb-6 md:col-start-1">
						<label
							htmlFor="bank"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Banco
						</label>
						<input
							name="bank"
							type="text"
							id="bank"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.bank}
						/>
						{newAccountFormik.errors.bank && newAccountFormik.touched.bank && (
							<p className="italic text-red-600">
								{newAccountFormik.errors.bank}
							</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="accountNumber"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Número de cuenta
						</label>
						<input
							name="accountNumber"
							type="text"
							id="accountNumber"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder=""
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.accountNumber}
						/>
						{newAccountFormik.errors.accountNumber &&
							newAccountFormik.touched.accountNumber && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.accountNumber}
								</p>
							)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="clabe"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							CLABE
						</label>
						<input
							name="clabe"
							type="text"
							id="clabe"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Empresa S.A. de C.V."
							onBlur={newAccountFormik.handleBlur}
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.clabe}
						/>
						{newAccountFormik.errors.clabe &&
							newAccountFormik.touched.clabe && (
								<p className="italic text-red-600">
									{newAccountFormik.errors.clabe}
								</p>
							)}
					</div>

					<div className="mb-6 md:col-start-1 md:col-span-full">
						<label>
							<input
								type="checkbox"
								name="checked"
								value={false}
								onChange={newAccountFormik.handleChange}
							/>
							{"  "}Estoy consiente de que los datos capturados son correctos.
						</label>
					</div>

					<div className="md:col-start-1 md:col-span-full">
						<ButtonForm>Crear Cuenta</ButtonForm>
					</div>
				</form>
			</section>
		</main>
	);
};

export default Details;
