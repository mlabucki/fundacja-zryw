import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components
import Home from "./components/Home";
import About from "./components/About";
import Apply from "./components/Apply";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
      <Navigation />
       <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </main>
       <Footer />
      </Router>
    </div>
  );
};

export default App;
