// Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import LandingPage from "./routes";
import HorsePage from "./routes/HorsePage/Horse";
import CatsPage from "./routes/CatsPage/Cats";
import Page404 from "./routes/404/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/Horse" element={<HorsePage />} />
          <Route path="/Cats" element={<CatsPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
