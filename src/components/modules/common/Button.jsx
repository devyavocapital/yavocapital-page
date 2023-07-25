import { Link } from "react-router-dom";

const Button = ({
	classes,
	value,
	href,
	arrowLeft = false,
	arrowDown = false,
	onclick = false,
}) => {
	return href ? (
		<Link to={href} className={classes}>
			{value}
			{arrowLeft && (
				// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					className="w-3.5 h-3.5 ml-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			)}
		</Link>
	) : (
		<button type="button" onClick={onclick} className={classes}>
			{value}
			{arrowDown && (
				// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			)}
			{arrowLeft && (
				// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					className="w-3.5 h-3.5 ml-2 my-auto"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			)}
		</button>
	);
};

export default Button;
