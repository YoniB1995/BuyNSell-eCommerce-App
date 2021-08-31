import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouterContainer from "./components/pages/RouterContainer";

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
