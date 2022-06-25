import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Workshop from './pages/Workshop/Workshop';
import BeforeBooking from './pages/Before-Booking/Before-Booking';
import Gallery from './pages/Gallery/Gallery';
import Pricing from './pages/Pricing/Pricing';
import LipBlush from './pages/LipBlush/LipBlush';
import PmuBrows from './pages/PmuBrows/PmuBrows';

const App = () => {
  return (
        <>
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/workshop" exact>
          <Workshop/>
        </Route>
        <Route path="/before-booking" exact>
          <BeforeBooking/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/PmuBrows" exact>
          <PmuBrows/>
        </Route>
        <Route path="/LipBlush" exact>
          <LipBlush/>
        </Route>
        <Route path="/Pricing" exact>
          <Pricing/>
        </Route>
        <Route path="/Gallery" exact>
          <Gallery/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
          <Footer />
   </Router>
   
    </>
 
  )
}

export default App;