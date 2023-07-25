import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import MeetUs from "./pages/MeetUs";
import Mejorasi from "./pages/Mejorasi";
import Products from "./pages/Products";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/vehiculo-financiero" element={<MeetUs />} />
					<Route path="/productos-financieros" element={<Products />} />
					<Route path="/mejorasi" element={<Mejorasi />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
