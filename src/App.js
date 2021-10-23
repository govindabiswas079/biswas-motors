import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Safety from './components/pages/Safty';
import Service from './components/pages/Service';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/safety" component={Safety} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <br />
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
