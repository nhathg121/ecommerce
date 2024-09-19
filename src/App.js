import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/Abouts/About";
import Home from "./Pages/Home/Home";
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
