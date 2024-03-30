import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meet from "./pages/Meet";
import Details from "./pages/Details";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/meet"
          element={<Meet />}
        ></Route>
        <Route
          path="/details"
          element={<Details />}
        ></Route>
        <Route
          path="/work"
          element={<Work />}
        ></Route>
        <Route
          path="/blog"
          element={<Blog />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
