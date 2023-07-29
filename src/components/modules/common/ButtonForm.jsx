const ButtonForm = ({ children }) => {
	const classesButton =
		"text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mx-auto mt-3 w-full uppercase";
	return (
		<button type="submit" className={classesButton}>
			{children}
		</button>
	);
};

export default ButtonForm;
