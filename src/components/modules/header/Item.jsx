import { Link } from "react-router-dom";

const Item = ({ name, href, title }) => {
	return (
		<li
			key={name}
			className="text-md whitespace-nowrap lg:mx-3 md:p-0 md:my-auto uppercase hover:text-black hover:cursor-pointer hover:border-b-2 hover:border-black"
		>
			<Link to={href}>{title}</Link>
		</li>
	);
};

export default Item;
