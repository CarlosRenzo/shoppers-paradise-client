import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { SingUp } from "./pages/SingUp";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/account/singup" Component={SingUp} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
