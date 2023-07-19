import { socials } from "../../../utils/social";
import Image from "../common/Image";
import Phone from "./Phone";

const Social = () => {
	return (
		<div className="col-span-1 grid">
			<Phone />
			<div className="flex justify-center">
				{socials.map((social) => (
					<Image
						key={social.name}
						src={social.src}
						classes={
							"w-10 h-10 mx-2 hover:cursor-pointer hover:border-2 hover:border-white hover:rounded-lg"
						}
					/>
				))}
			</div>
		</div>
	);
};

export default Social;
