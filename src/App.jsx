import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
