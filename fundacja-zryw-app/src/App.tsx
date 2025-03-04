import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import your components
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Fundacja Zryw</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
