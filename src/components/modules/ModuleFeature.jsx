const ModuleFeature = ({
	imgClasses,
	children,
	imgSrc,
	name,
	containerClasses,
}) => {
	return (
		<div className="relative md:h-[700px]">
			<img
				alt={`logo ${name}`}
				src={imgSrc}
				className={imgClasses}
				loading="lazy"
			/>
			<div className={containerClasses}>{children}</div>
		</div>
	);
};

export default ModuleFeature;
