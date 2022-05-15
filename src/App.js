import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';




const App = () => {
    return (
        <Router>
              <div>
                <Header />
                <Switch>
                <Route path="/home"  component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills"  component={Skills} />
                <Route path="/work"  component={Work} />
                <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
              </div>
        </Router>
    );
  }


export default App;