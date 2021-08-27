import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import RouterContainer from "./components/pages/RouterContainer";

function App() {
  return (
    <Router>
      <>
        <LandingPage />
        <RouterContainer />
      </>
    </Router>
  );
}

export default App;
