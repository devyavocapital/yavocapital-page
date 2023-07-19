import { menuItems } from "../../../utils/menu";
import Item from "./Item";

const Navigation = () => {
	return (
		<nav className="bg-orange-700 flex p-2 justify-between">
			<div>
				<img alt="logo" src="/logo.webp" />
			</div>
			<ul className="flex text-white">
				{menuItems.map(({ name, href, title }) => (
					<Item key={name} name={name} href={href} title={title} />
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
