import useLanguage from "../../../hooks/useLanguage";
import { menuItems } from "../../../utils/menu";
import Item from "./Item";
import ListSecondMenu from "./ListSecondMenu";

const ListMenu = () => {
	const { language } = useLanguage();

	const classesLink =
		"block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:my-auto md:text-[12px] lg:text-[14px]";

	return (
		<>
			<ul className="flex flex-col my-auto text-sm md:flex-row md:space-x-2 lg:space-x-4 xl:space-x-8">
				{menuItems.map((item) => (
					<Item href={item.href} classes={classesLink} key={item.name}>
						{language ? item.title : item.titleEs}
					</Item>
				))}
			</ul>
			<ListSecondMenu />
		</>
	);
};

export default ListMenu;
