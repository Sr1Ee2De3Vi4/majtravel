import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../Checkout/Checkout.css';

class Checkout extends Component {

    render() {
    return(
   <div>

<div class="" style={{marginLeft:"10%",marginRight:"8%"}}>
  <div class="uk-child-width-1-2 uk-grid  ">

  <div class="uk-card uk-card-default uk-card-body " style={{margin:"10px",border:"2px solid gray",padding:"1px",width:"48%"}}>
    <p>
    <a class="uk-align-left " style={{margin:"15px",fontSize:"16px"}}>ARE YOU RETURNING CUSTOMER ?</a>
    <a class="uk-align-right"  style={{margin:"15px",fontSize:"16px"}}>LOGIN HERE&nbsp;<span uk-icon="chevron-double-right"></span></a> 
    </p>
  </div>
  <div class="uk-card uk-card-default uk-card-body " style={{margin:"10px",border:"2px solid gray",padding:"1px",width:"48%"}}>
    <p>
    <a class="uk-align-left " style={{margin:"15px",fontSize:"16px"}}>HAVE A PROMOTIONAL COUPON</a>
    <a class="uk-align-right"  style={{margin:"15px",fontSize:"16px"}}>ENTER COUPON CODE&nbsp;<span uk-icon="chevron-double-right"></span></a> 
    </p>
  </div>
    </div>



    <div class="uk-child-width-1-2 uk-grid  ">

<div class="uk-card uk-card-default uk-card-body " style={{margin:"10px",border:"2px solid gray",padding:"20px",width:"48%"}}>
 
<div class="" style={{fontWeight:"700",borderBottom:"2px gray solid"}}>BILLING INFORMATION</div>
<div class="uk-child-width-1-2 uk-grid">
<div class="uk-margin  uk-margin-top ">
<label class="uk-form-label" style={{fontSize:"14px",fontWeight:"700"}}>First Name</label>
        <input class="uk-input uk-form-width-medium" type="text" placeholder=""></input>
</div>
    <div class="uk-margin">
    <label class="uk-form-label" style={{fontSize:"14px",fontWeight:"700"}}>Last Name</label>
        <input class="uk-input uk-form-width-medium" type="text" placeholder=""></input>
    </div>
    </div>
    
    <div class="" style={{marginTop:"px"}}>
    <label class="uk-form-label" style={{fontSize:"14px",fontWeight:"700"}}>Company Name</label><br/>
        <input class="uk-input " type="text" placeholder=""></input>
    </div>

    
    <div class="" style={{marginTop:"20px"}}>
    <label class="uk-form-label" style={{fontSize:"14px",fontWeight:"700"}}>Address</label><br/>
        <input class="uk-input " type="text" placeholder=""></input>
    </div>

    
    <div class="" style={{marginTop:"20px"}}>
    <label class="uk-form-label"  style={{fontSize:"14px",fontWeight:"700"}}>City / Town</label><br/>
        <input class="uk-input " type="text" placeholder=""></input>
    </div>

    <div class="uk-child-width-1-2 uk-grid">
<div class="uk-margin  uk-margin-top ">
<label class="uk-form-label"  style={{fontSize:"14px",fontWeight:"700"}}>Email Address</label>
        <input class="uk-input uk-form-width-medium" type="text" placeholder=""></input>
</div>
    <div class="uk-margin">
    <label class="uk-form-label"  style={{fontSize:"14px",fontWeight:"700"}}>Phone</label>
        <input class="uk-input uk-form-width-medium" type="text" placeholder=""></input>
    </div>
    </div>
    
    <label class="" style={{fontSize:"14px",fontWeight:"700",color:"black"}}><input class="uk-radio" type="radio" name="radio1"/> Check Payment</label><br/>
    <p cladd="" style={{fontSize:"13px"}}>Please send your cheque to Entrada Inc. Address, Thank You!</p>
    <label class="" style={{fontSize:"14px",fontWeight:"700",color:"black"}}><input class="uk-radio" type="radio" name="radio1"/> Paypal Payment</label><br/>
    <p cladd="" style={{fontSize:"13px"}}>If you dont have paypal account - you can still pay using credit cards!</p>

</div>



<div class="uk-card uk-card-default uk-card-body " style={{margin:"10px",border:"2px solid gray",padding:"20px",width:"48%"}}>
<div class="" style={{fontWeight:"700",borderBottom:"2px gray solid"}}>ADDITIONAL NOTES</div>

<div class="uk-margin">
<label class="uk-form-label"  style={{fontSize:"14px",fontWeight:"700"}}>Your Comment</label>
  <textarea class="uk-textarea" rows="5" placeholder="please enter any additional information here, eg. food/drug requirements etc."></textarea>
  <br/><br/><br/>
  <div class="" style={{fontWeight:"700",borderBottom:"2px gray solid"}}>ADDITIONAL NOTES</div>
  <br/>
<div class=" uk-margin" style={{border:"2px solid gray"}}>
  <div class="uk-column-1-2" style={{borderBottom:"2px solid gray"}} >
  <p class="" style={{padding:"8px",fontWeight:"700",fontsize:"12px"}}>Selected Tours</p>
  <p class="" style={{padding:"8px" ,fontWeight:"700",fontsize:"12px"}}>Total Price</p>

  </div>




<div class="uk-column-1-2"  >
<p class="" style={{fontsize:"12px",padding:"8px"}}> 
<a class=" uk-text-small" style={{fontWeight:"700"}}>Everest Trekking  x  3</a><br/>
<a class=" uk-text-small" style={{fontsize:"40px"}}>Booking Date:  14th Jan 2016</a>

  </p>
  <p class="" style={{fontsize:"12px",padding:"8px",fontWeight:"700"}}>
  $2,999
</p>

  </div>

  <div class="uk-column-1-2"  >
<p class="" style={{fontsize:"12px",padding:"8px"}}> 
<a class=" uk-text-small" style={{fontWeight:"700"}}>Everest Trekking  x  3</a><br/>
<a class=" uk-text-small" style={{fontsize:"40px"}}>Booking Date:  14th Jan 2016</a>

  </p>
  <p class="" style={{fontsize:"12px",padding:"8px",fontWeight:"700"}}>
  $2,999
</p>

  </div>

  <div class="uk-column-1-2" style={{borderTop:"2px solid gray"}} >
  <p class="" style={{padding:"8px" ,fontWeight:"700",fontsize:"12px"}}>Total Price</p>
  <p class="" style={{padding:"8px",fontWeight:"700",fontsize:"12px"}}> $4,988</p>

  </div>

</div>




</div>
<br/>
<button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom" style={{backgroundColor:"gray",color:"white"}}>Button</button>

</div>
  </div>
  </div>

   </div>

)
}
}
export default Checkout;