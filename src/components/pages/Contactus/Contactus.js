import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../Contactus/Contactus.css';

class Contactus extends Component {

    render() {
    return(
   <div>


<div class="" style={{textAlign:"center"}}>
    <p style={{fontSize:"32px",fontWeight:"700",color:"black",letterSpacing:"1.5px"}}>GET IN TOUCH</p>
    <p style={{fontSize:"28px",fontWeight:"200",color:"gray",fontStyle:"italic",letterSpacing:"1.5px",fontFamily:"sans-serif"}}>Contact us by email, phone or through our web from below</p>
    <hr class="uk-divider-icon"/>
</div>
<div class="uk-child-width-1-3 uk-grid" style={{paddingRight:"3%",paddingLeft:"7%"}}>
    <div>
        <button class="uk-button uk-button-default" style={{height:"100px",width:"350px",background:"black",color:"white",fontSize:"25px",fontWeight:"600"}}> +91 9620612361</button>
        
    </div>
    
    <div><button class="uk-button uk-button-default"style={{height:"100px",width:"350px",background:"black",color:"white",fontSize:"16px",fontWeight:"600"}}>majtechnologiesteam@gmail.com</button></div>
    <div><button class="uk-button uk-button-default" style={{height:"100px",width:"350px",background:"black",color:"white",fontSize:"25px",fontWeight:"600"}}>TALK TO US NOW</button></div>
</div>


<div class="uk-child-width-1-3 uk-grid" style={{paddingRight:"3%",paddingLeft:"7%"}}>
   <div class="uk-card  uk-card-body ">
    <h3 class="uk-card-title"> Booking Enquiries </h3>
    <p>Our Holiday Packages page lists you worlds best vacation packages. 
        Choose your destination and book in Budget, 
        Premium or Luxury categories with great offers
         and deals. Best pricing and full satisfaction guaranteed! </p>
    </div>

    <div class="uk-card  uk-card-body ">
    <h6 class="uk-card-title"> Post Booking Questions</h6>
    <p>Kindly tell us your requirement by filling the ‘Free travel planning’ 
        form and our highly qualified travel experts will
         plan your travel and assist you further. Get a complete 
         roadmap itinerary planned for free in less than 7 hours.</p>
    </div>

    <div class="uk-card  uk-card-body ">
    <h3 class="uk-card-title"> Payment Queries</h3>
    <p>Choose your destination and book in Budget, 
        Premium or Luxury categories with great offers and deals.
         Best pricing and full satisfaction guaranteed!</p>
    </div>
   
   </div>




   <div class="uk-child-width-1-2 uk-grid" style={{paddingRight:"3%",paddingLeft:"7%"}}>
    


    
<div class="uk-width-1-2@l uk-width-1-2@m uk-width-1-1@s uk-card uk-card-default uk-card-body" style={{backgroundColor:"gray"}}>
<div class="uk-carduk-card-body" style={{backgroundColor:"lightgray"}}>

<div class=""> <form class="uk-form-horizontal uk-padding">

<div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text" style={{fontWeight:"700"}}>First Name</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder=""></input>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text" style={{fontWeight:"700"}}>Last Name</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder=""></input>
        </div>
    </div>
    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text" style={{fontWeight:"700"}}>Email</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder=""></input>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text" style={{fontWeight:"700"}}>Phone Number</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder=""></input>
        </div>
    </div>


    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text" style={{fontWeight:"700"}}>Country</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder=""></input>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text" style={{fontWeight:"700"}}>Message
</label>
        <div class="uk-form-controls">
        <textarea class="uk-textarea" rows="5" placeholder=""></textarea>
        </div>
    </div>


    <div>
    <button class="uk-button uk-button-default btn511 uk-align-center" style={{backgroundColor:"gray",color:"white"}} >SEND ENQUIRY</button>
    </div>
    </form>
</div>


</div>
</div>




    <div></div>
   </div>


   </div>
   )
}
}
export default Contactus;