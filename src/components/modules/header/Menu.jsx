import { useState } from "react";
import { menuItemsEn, menuItemsEs } from "../../../utils/menu";
import Button from "../common/Button";
import Item from "./Item";

const Menu = ({ language, handleLanguage }) => {
	const [menu, setMenu] = useState(true);

	const classesButton =
		"inline-flex justify-center hover:text-white items-center md:m-3 md:p-2 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-orange-700 hover:border-orange-700";

	const handleMenu = () => setMenu(!menu);

	return (
		<>
			<div className="max-[640px]:hidden">
				<ul className="flex text-white ">
					{language
						? menuItemsEn.map(({ name, href, title }) => (
								<Item key={name} name={name} href={href} title={title} />
						  ))
						: menuItemsEs.map(({ name, href, title }) => (
								<Item key={name} name={name} href={href} title={title} />
						  ))}
					<Button
						value={!language ? "EN" : "ES"}
						arrowDown={true}
						onclick={handleLanguage}
						classes={classesButton}
					/>
				</ul>
			</div>
			<div className="bg-[rgb(237, 107, 55)] min-[640px]:hidden transition-all relative">
				{menu && (
					<ul className="grid text-white">
						{language
							? menuItemsEn.map(({ name, href, title }) => (
									<Item key={name} name={name} href={href} title={title} />
							  ))
							: menuItemsEs.map(({ name, href, title }) => (
									<Item key={name} name={name} href={href} title={title} />
							  ))}
						<Button
							value={!language ? "EN" : "ES"}
							arrowDown={true}
							onclick={handleLanguage}
							classes={classesButton}
						/>
					</ul>
				)}
				<button
					type="button"
					onClick={handleMenu}
					className="absolute -top-[50px] right-[10px] w-[50px] h-[50px] border-2 border-gray-900"
				>
					{menu ? (
						// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mx-auto"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						// rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mx-auto"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</button>
			</div>
		</>
	);
};

export default Menu;
