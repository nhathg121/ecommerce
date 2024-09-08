import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/Abouts/about";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" exact={true} element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
