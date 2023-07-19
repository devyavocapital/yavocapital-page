import { Link } from "react-router-dom";

const Item = ({ name, href, title }) => {
	return (
		<li
			key={name}
			className="mx-2 my-auto uppercase hover:text-black hover:cursor-pointer hover:border-b-2 hover:border-black"
		>
			<Link to={href}>{title}</Link>
		</li>
	);
};

export default Item;
