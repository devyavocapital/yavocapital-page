import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(false);

	const handleLanguage = (value) => setLanguage(value);

	return (
		<LanguageContext.Provider value={{ language, handleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageProvider };

export default LanguageContext;
