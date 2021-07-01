
import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, Foo, Bar} from './Pages';
import MapBase from './MapBase';
import './App.css';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
            <Link to="/map">Map</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
            <Route exact path="/map" component={MapBase} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));