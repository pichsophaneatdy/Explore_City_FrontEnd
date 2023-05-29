import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
// Pages
import HomePage from "./Pages/HomePage/HomePage";
import CityPage from "./Pages/CityPage/CityPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
// Component
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/city/:cityname" element={<CityPage />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        
    )
}

export default App