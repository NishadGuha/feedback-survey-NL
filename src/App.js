import * as React from 'react';
import './App.scss';
import SuccessPage from './components/SuccessPage';
import Survey from './components/Survey';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Survey} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  );
}

export default App;
