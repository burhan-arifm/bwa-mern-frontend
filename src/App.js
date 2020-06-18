import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'scss/index.scss';
import Home from 'pages/Home';

function App() {
    return <div className="App">
        <Router>
            <Route path="/" component={Home}></Route>
        </Router>
    </div>;
}

export default App
