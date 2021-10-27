import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Home, Map } from "./Pages";
import Legend from "./components/Legend/Legend";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Map />
        </div>
      </Router>
      <Legend />
    </div>
  );
};

export default App;
