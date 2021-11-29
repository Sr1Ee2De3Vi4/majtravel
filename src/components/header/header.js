import React, { Component } from 'react';

import logo from '../../assests/home/favicon-16x16.png';
import  '../header/header.css';


class header extends Component {

    render() {
    return(
    <div>

<nav class="uk-navbar-container uk-visible@l" uk-navbar data-uk-sticky  >
    <div class="uk-navbar-left ">
        


<div class="uk-panel" style={{backgroundColor:"white" ,height:"10%"}}>
        <img  class=" l1"  style={{}} src={logo} alt=""/>
      
            <p class="uk-align-right uk-margin-remove-bottom" style={{paddingTop:"3%",paddingRight:"3%",fontSize:"14px"}}>
                <a class=""  href="/home" style={{paddingRight:"30px",color:"black"}}>HOME</a>
                <a class=""  href="/ourservice"style={{paddingRight:"30px",color:"black"}}>OUR SERVICES</a>
                <a class="" style={{paddingRight:"30px",color:"black"}}>FLIGHTS AND HOTELS</a>
                <a class="" href="/aboutus" style={{paddingRight:"30px",color:"black"}}>ABOUT US</a>
                <a class=""href="/contactus"style={{paddingRight:"30px",color:"black"}}>CONTACT US</a>
                
                <a><div class="uk-inline">
                 <button class="uk-button " type="button" style={{backgroundColor:"white"}}>BOOKINGS</button>
                 <div uk-drop="pos: bottom-justify">
                 <div class="uk-card uk-card-body uk-card-default uk-padding-remove">
                 <ul class="uk-list">
                 <li> <a class=""href="/checkout"style={{paddingRight:"30px",color:"black"}}>Check out</a></li>
                 <li>List item 2</li>
                 <li>List item 3</li>
                 </ul>
                 </div>
                 </div>
                 </div>
                 </a>


                <a class="" href="/Login "  style={{paddingRight:"30px",color:"black"}}>MY ACCOUNT</a>
                <a class="uk-margin-small-right" href="/cart" uk-icon="cart" ></a>
                
                <a>
                
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{}}>
                <option class="" value="">INR</option>
                <option value="2">EUR</option>
                <option value="3">USD</option>
                <option value="4">CAD</option>
              </select>
              <button class="uk-button " type="button" tabindex="-1" style={{backgroundColor:"white"}}>
                <span></span>
             </button>
             </div>
             

            
                </a>
                <a>
                <button class="uk-button uk-padding-remove" type="button" uk-toggle="target: #offcanvas-flip"  style={{backgroundColor:"white"}}> <span uk-icon="search"></span> </button>
                <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close> <span uk-icon="close"></span></button>
            <div uk-switcher="animation: uk-animation-fade; toggle: > *">
                <button class=" uk-button-default" type="button">Holiday Packages</button>
                <button class=" uk-button-default" type="button">Adventures</button>
                <button class=" uk-button-default" type="button">Destination Weddings</button>
                <button class=" uk-button-default" type="button">Events</button>
                <button class=" uk-button-default" type="button">Study Abroad</button>
                <button class=" uk-button-default" type="button">Wellness Tours</button>
            </div>

    <ul class="uk-switcher uk-margin">
    <li> 
    <div class="button"> 
    <p class="" style={{color:"white"}}>Select Your Dates</p>
    <form class="form">
    <div class="uk-margin">
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{color:"white",backgroundColor:"black"}}>
                <option class="" value="">JAN - MAR 2020</option>
                <option value="2">Apr - Jun 2020</option>
                <option value="3">Jul - Sep 2020</option>
                <option value="4">Oct - Dec 2020</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span class="" style={{marginLeft:"8px"}} uk-icon="icon: chevron-down"></span>
              </button>
             </div>
             </div>

            </form>

               </div>
</li>
    <li>
    <p class="" style={{color:"white"}}>Select Adventure</p>
        <div uk-form-custom="target: > * > span:first-child">
            <select>
                <option value="">Please select...</option>
                <option value="1">BUNGEE JUMP</option>
                <option value="2">HIKING TRIPS</option>
                <option value="3">WILDLIFE SAFARI</option>
                <option value="4">PEAK CLIMBING</option>
                <option value="4">MOUNT BIKING</option>
                <option value="4">SCUBA DIVING</option>
                <option value="4">HUNTING TRIP</option>
                <option value="4">SAILING TRIPS</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1"  >
                <span></span>
                <span uk-icon="icon: chevron-down"></span>
            </button>
        </div>
        
<br/><br/>
        <p class="" style={{color:"white"}}>Select Place</p>
        <div uk-form-custom="target: > * > span:first-child">
            <select>
                <option value="">Please select...</option>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span uk-icon="icon: chevron-down"></span>
            </button>
        </div>
        <br/><br/><br/>
        <button class="uk-button uk-button-default" style={{backgroundColor:"white",color:"black",fontSize:"16px"}}>FIND</button>
        
        </li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>
                </div>
                </div>
                </a>
                
                
            </p>
</div>



  </div>
</nav>

{/* visible@s */}


<nav class="uk-navbar-container uk-hidden@l" uk-navbar data-uk-sticky  >
    <div class="uk-navbar-left ">
        


<div class="uk-panel" style={{backgroundColor:"white" ,height:"10%"}}>
        <img  class=" l1"  style={{}} src={logo} alt=""/>
      
            <p class="uk-align-right uk-margin-remove-bottom" style={{paddingTop:"3%",paddingRight:"3%"}}>
            <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay" style={{borderColor:"white"}}><span uk-icon="menu"></span></button>

<div id="offcanvas-overlay" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>


   

        <p><a class=""  href="/home" >HOME</a><br/>
                <a class=""  href="/ourservice">OUR SERVICES</a><br/>
                <a class="" >FLIGHTS AND HOTELS</a><br/>
                <a class=""  href="/aboutus">ABOUT US</a><br/>
               
                <a class="" >CONTACT US</a><br/>
                <a class="" >BOOKINGS</a><br/>
                <a class="" >PROFILE</a><br/>
                <a class="" >MY CART</a><br/>
                <a class="" >LANGUAGE</a><br/>
                </p>

    </div>
</div>
            </p>


        </div>



  </div>
</nav>





    </div>  


)
}
}

export default header;
