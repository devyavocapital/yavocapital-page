const Image = ({ classes, src, name }) => {
	return <img alt={`logo de ${name}`} src={src} className={classes} />;
};

export default Image;
