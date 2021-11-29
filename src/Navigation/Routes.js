import React, {Component} from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import home from '../components/pages/home/home' 
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom'; 
import ourservice from '../components/pages/our service/ourservice' 
import holiday from '../components/pages/holiday/holiday' 
import Adventures from '../components/pages/Adventures/Adventures'
import WellnessTours from '../components/pages/WellnessTours/WellnessTours'
import StudyAboard from '../components/pages/StudyAboard/StudyAboard'
import Events from '../components/pages/Events/Events'
import DestinationWeddings from '../components/pages/DestinationWeddings/DestinationWeddings'
import Maldives from '../components/pages/maldives/maldives'
import Login from '../components/pages/login/login'
import Aboutus from '../components/pages/Aboutus/Aboutus'
import Contactus from '../components/pages/Contactus/Contactus'
import Cart from '../components/pages/Cart/Cart'
import Checkout from '../components/pages/Checkout/Checkout' 
import Offers from '../components/pages/offers/offers' 
import Signup from '../components/pages/signup/signup' 
class Routes extends Component{
    render() {
        return(
            <Router>
            <div>
             <Header/> 
            </div>
            <Switch>

            <Route exact path="/home" component={home}/>
            <Route exact path="/ourservice" component={ourservice}/>
            <Route exact path="/holiday" component={holiday}/>
            <Route exact path="/Adventures" component={Adventures}/>
            <Route exact path="/WellnessTours" component={WellnessTours}/>
            <Route exact path="/StudyAboard" component={StudyAboard}/>
            <Route exact path="/Events" component={Events}/>
            <Route exact path="/DestinationWeddings" component={DestinationWeddings}/>
            <Route exact path="/Maldives" component={Maldives}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/aboutus" component={Aboutus}/>
            <Route exact path="/contactus" component={Contactus}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/offers" component={Offers}/>
            <Route exact path="/signup" component={Signup}/>
            </Switch>
          
          <div>
          <Footer/>
          </div>
          </Router>
        );
        }
}
export default Routes;