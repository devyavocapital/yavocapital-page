import { Link } from "react-router-dom";

const Item = ({ classes, href, children }) => {
	return (
		<li>
			<Link to={href} className={classes}>
				{children}
			</Link>
		</li>
	);
};

export default Item;
