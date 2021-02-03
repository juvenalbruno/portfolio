import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Happy from './pages/extensions/Happy';
import Ecoleta from './pages/extensions/Ecoleta';
import Juflix from './pages/extensions/Juflix';
import Quiz from './pages/extensions/Quiz';
import BeTheHero from './pages/extensions/BeTheHero';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} exact/>
            <Route path="/portfolio/happy" component={Happy} />
            <Route path="/portfolio/ecoleta" component={Ecoleta} />
            <Route path="/portfolio/juflix" component={Juflix} />
            <Route path="/portfolio/quiz" component={Quiz} />
            <Route path="/portfolio/bethehero" component={BeTheHero} /> 
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
    );
}