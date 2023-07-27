import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Blog from "./pages/Blog";
import Post from "./pages/Blog/[name]";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MeetUs from "./pages/MeetUs";
import Mejorasi from "./pages/Mejorasi";
import Cronograma from "./pages/Mejorasi/Cronograma";
import Register from "./pages/Mejorasi/Register";
import Products from "./pages/Products";
import Credit from "./pages/Products/Credit";
import Guarantee from "./pages/Products/Guarantee";
import Terms from "./pages/Terms";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/vehiculo-financiero" element={<MeetUs />} />
					<Route path="/productos-financieros" element={<Products />} />
					<Route path="/mejorasi" element={<Mejorasi />} />
					<Route path="/contacto" element={<Contact />} />
					<Route path="/aviso-de-privacidad" element={<Terms />} />
				</Route>
				<Route path={"/mejorasi"} element={<Layout />}>
					<Route path="registro" element={<Register />} />
					<Route path="cronograma" element={<Cronograma />} />
				</Route>
				<Route path={"/blog"} element={<Layout />}>
					<Route index element={<Blog />} />
					<Route path=":name" element={<Post />} />
				</Route>
				<Route path={"/productos-financieros"} element={<Layout />}>
					<Route path="credito-integral-linea-3" element={<Credit />} />
					<Route path="fideicomiso-de-garantia" element={<Guarantee />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
