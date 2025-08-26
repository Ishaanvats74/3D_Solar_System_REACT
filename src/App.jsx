import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Starfield from "./components/Star";
import PlanetsPage from "./planets/page";

function App() {
  return (
    <>
      <Router>
        <div className=" relative w-full h-screen">
          <Starfield />
          <div className="absolute z-10 ">
            <Navbar />
          </div>
            <Routes>
              <Route path="/planets" element={<PlanetsPage />} />
              <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
