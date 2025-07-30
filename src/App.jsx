import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import SubFooter from "./components/SubFooter.jsx";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
        <Header />
        <Hero />
        <Features />
        <SubFooter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
