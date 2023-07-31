import * as Yup from "Yup";
import { useFormik } from "formik";
import ButtonForm from "../components/modules/common/ButtonForm";

const Login = () => {
	const validation = Yup.object().shape({
		email: Yup.string()
			.email("El Email es inválido")
			.required("El Campo de email es Obligatorio"),
		password: Yup.string()
			.min(8)
			.max(16)
			.required("El Campo de contraseña es Obligatorio"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			console.log({ values });
		},
	});
	return (
		<main className="p-5 grid mx-auto my-auto w-11/12 md:w-5/12">
			<section className="border-4 border-orange-400 rounded-2xl my-auto p-10">
				<h1 className="my-auto text-2xl md:text-4xl lg:text-6xl font-bold py-5">
					Login
				</h1>
				<form onSubmit={formik.handleSubmit} className="mt-5">
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
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
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
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
					</div>

					<ButtonForm>Iniciar Sesión</ButtonForm>
				</form>
			</section>
		</main>
	);
};

export default Login;
