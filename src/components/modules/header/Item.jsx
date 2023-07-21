import { Link } from "react-router-dom";

const Item = ({ name, href, title }) => {
	return (
		<li
			key={name}
			className="text-md w-full mx-auto md:mx-5 lg:mx-8 text-center md:text-right md:p-0 my-1 md:my-auto uppercase hover:text-black hover:cursor-pointer hover:border-b-2 hover:border-black"
		>
			<Link to={href}>{title}</Link>
		</li>
	);
};

export default Item;
