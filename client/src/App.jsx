import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterContainer from "./components/routing/RouterContainer";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <RouterContainer />
      </Router>
    </Suspense>
  );
}

export default App;
