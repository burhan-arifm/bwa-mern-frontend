import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "scss/index.scss";
import Home from "pages/Home";
import Detail from "pages/Detail";
// import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        {/* <Route exact path={`/example`} component={Example} /> */}
      </Router>
    </div>
  );
}

export default App;
