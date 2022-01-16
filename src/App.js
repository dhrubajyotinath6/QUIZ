import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/questions" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
