import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioExpansion from './pages/PortfolioExpansion';
import Contact from './pages/Contact';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} exact/>
            <Route path="/portfolio/expansion" component={PortfolioExpansion}/>
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
    );
}