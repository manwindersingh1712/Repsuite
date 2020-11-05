import "./App.css"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import React from 'react';
 
class App extends React.Component {
  render(){

  return (
    <Router>
    <div>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;