import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Error from './components/Error/Error';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import Navbar from './components/HomePage/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/blog">
          <Blog></Blog>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/project">
          <Project></Project>
        </Route>
        <Route exact path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="*">
            <Error></Error>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
