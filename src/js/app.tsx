/* React
-----------------------------*/
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* AOS
---------------------------- */
import aos from 'aos';
aos.init();


/* SCSS
---------------------------- */
import '../scss/style.scss';


/* Component
---------------------------- */
import Top from './page/Top';
import Toshi from './page/toshi/toshi';
import Uma from './page/uma/uma';
import Spot from './page/spot/spot';


ReactDom.render(
  <Router>
    <Route exact path='/' component={Top}/>
    <Route path='/toshi' component={Toshi}/>
    <Route path='/uma' component={Uma}/>
    <Route path='/spot' component={Spot}/>
  </Router>
  ,document.querySelector('#root')
);