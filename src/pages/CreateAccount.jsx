import * as Yup from "Yup";
import { useFormik } from "formik";
import ButtonForm from "../components/modules/common/ButtonForm";

const CreateAccount = () => {
	const validation = Yup.object().shape({
		email: Yup.string().email().required("El Campo de email es Obligatorio"),
		password: Yup.string()
			.min(8, "Debe de tener minimo 8 caracteres")
			.max(16, "Debe de tener maximo 16 caracteres")
			.required("El Campo de contraseña es Obligatorio"),
		passwordConfirmation: Yup.string().oneOf(
			[Yup.ref("password"), null],
			"Los passwords no coinciden",
		),
	});

	const newAccountFormik = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirmation: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			console.log({ values });
		},
	});
	return (
		<main className="h-screen grid mx-auto mt-auto w-5/12 mb-10">
			<section className="border-4 border-orange-400 rounded-2xl my-auto p-10">
				<h1 className="my-auto text-2xl md:text-4xl lg:text-6xl font-bold py-5">
					Crear Cuenta
				</h1>
				<form onSubmit={newAccountFormik.handleSubmit} className="mt-5">
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Email
						</label>
						<input
							name="email"
							type="email"
							id="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							placeholder="name@flowbite.com"
							required
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.email}
						/>
						{newAccountFormik.errors.email && (
							<p className="italic text-red-600">
								{newAccountFormik.errors.email}
							</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							name="password"
							type="password"
							id="password"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							placeholder="******"
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.password}
						/>
						{newAccountFormik.errors.password && (
							<p className="italic text-red-600">
								{newAccountFormik.errors.password}
							</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="confirm"
							className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
						>
							Confirmar password
						</label>
						<input
							name="passwordConfirmation"
							type="password"
							id="passwordConfirmation"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
							required
							placeholder="******"
							onChange={newAccountFormik.handleChange}
							value={newAccountFormik.values.passwordConfirmation}
						/>
						{newAccountFormik.errors.passwordConfirmation && (
							<p className="italic text-red-600">
								{newAccountFormik.errors.passwordConfirmation}
							</p>
						)}
					</div>

					<ButtonForm>Crear Cuenta</ButtonForm>
				</form>
			</section>
		</main>
	);
};

export default CreateAccount;
