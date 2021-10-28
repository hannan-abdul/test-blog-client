import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Postwrite from './components/Dashboard/Postwrite/Postwrite';
import Navbar from './components/Navbar/Navbar';
import ManageNews from './components/Dashboard/ManageNews/ManageNews';
import SingleNewsDetail from './components/MainBody/SingleNewsDetail/SingleNewsDetail';
import PrivateRoute from './pages/Login/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Postwrite />
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/manage-news">
            <ManageNews/>
          </Route>
          <Route path="/newsdetail/:newsId">
            <SingleNewsDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
