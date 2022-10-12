import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import News from "./pages/News/News";
import Footer from "./Footer";
import Store from "./pages/Store/Store";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
