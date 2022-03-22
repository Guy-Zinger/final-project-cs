// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginForm from './components/Forms/LoginForm';
import SignupForm from './components/Forms/SignupForm';
import Layout from './components/Layout';
import MainNavbar from './components/Navbars/MainNavbar';
import Login from './Pages/Login';

function App() {
  return (
    <Router>  
      <div className="App">
     
      <header className="App-header">
      <MainNavbar/>
      <Layout>
        <Switch>
         <Route exact path="/">
            <LoginForm/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignupForm/>
          </Route>
        </Switch>
        </Layout>
      </header>
    </div>
    </Router>
 
  );
}

export default App;
