import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import PollingUnits from "./screens/PollingResult";
import LgaResults from "./screens/LgaResults";

const App = () => {
  return (
    <div className="bg-gray-800 w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/poll_results" element={<PollingUnits />}></Route>
          <Route path="/lga_results" element={<LgaResults />}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
