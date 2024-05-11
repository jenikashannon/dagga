import "./App.css";

// componenets
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import HomePage from "./pages/HomePage/HomePage";

// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/gallery' element={<GalleryPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
