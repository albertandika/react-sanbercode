import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './view/Customer'
import Weight from './view/Weight'
import Form from './view/Form'
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'


function App() {
  return (
    <Router>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Customer</Link></Navbar.Brand>
            <Navbar.Brand><Link to="/weight">Weight</Link></Navbar.Brand> 
            <Navbar.Brand><Link to="/form">Form</Link></Navbar.Brand> 
          </Navbar>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customer} />
                 <Route path="/weight">
                    <Weight />
                  </Route>
                  <Route path="/form">
                    <Form />
                  </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;