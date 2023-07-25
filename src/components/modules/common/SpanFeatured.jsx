const SpanFeatured = ({ children, classes = "" }) => {
	return (
		<span className={`${classes} colorPrimary font-bold`}>{children}</span>
	);
};

export default SpanFeatured;
