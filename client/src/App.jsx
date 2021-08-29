import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouterContainer from "./components/pages/RouterContainer";
import Footer from "./components/features/Footer/Footer";
import Header from "./components/features/LandingPage/Header/Header";

function App() {
  return (
    <Router>
      <>
        <RouterContainer />
      </>
    </Router>
  );
}

export default App;
