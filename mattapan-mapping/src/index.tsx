
import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, History} from './Pages';
import MapBase from './MapBase';
import './App.css';
import './index.css';
import Informational from './Informational';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/map">A Shrinking Community</Link>
              <Link to="/history">A Verbal History</Link>
              <Link to="/explore">Explore</Link>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/history" component={History} />
              <Route exact path="/map" component={MapBase} />
              <Route exact path="/explore" component={MapBase} />
            </Switch>
          </div>
        </Router>
        <Informational></Informational>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));