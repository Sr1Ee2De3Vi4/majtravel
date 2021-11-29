import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../Cart/Cart.css';
import img2 from '../../../assests/maldives/img-08.jpg';
import img3 from '../../../assests/maldives/img-09.jpg';
import card1 from '../../../assests/holiday/img-35.jpg';
import card2 from '../../../assests/holiday/img-36.jpg';
import card3 from '../../../assests/holiday/img-37.jpg';
import card4 from '../../../assests/holiday/img-38.jpg';

class Cart extends Component {

    render() {
    return(
   <div>




<div class="" style={{marginLeft:"6%",marginRight:"6%"}}>
    <table class="uk-table uk-table-striped">
    <thead>
        <tr>
        <th></th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Selected Tours</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Confirmed Dates</a>
            </th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Price (PP)</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Updated Today</a>
            </th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>No. of People</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Including Children</a>
            </th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Total Price</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Excluding Flights</a>
            </th>
         <th></th>
               
            
        </tr>
    </thead>
    <tbody>
       
        <tr>
            <td style={{width:"20%",height:""}} > <img src={card1} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
            <td>Available & Guaranteed</td>
            <td>$2,779</td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
        
         </div>
            </td>
            
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>
        <tr>
        <td style={{width:"20%",height:""}} > <img src={card2} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
        
            <td>Booked & Guaranteed</td>
            <td>$2,779</td>
            <td>  
                <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
         </td>
         
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>
        

        <tr>
        <td style={{width:"20%",height:""}} > <img src={card3} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
        
            <td>Available & Guaranteed</td>
            <td>$2,779</td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
            </td>
        
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>

        <tr>
        <td style={{width:"20%",height:""}} > <img src={card4} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
       
            <td>Available </td>
            <td>$2,779</td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
            </td>
           
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>

        <tr>
        <td style={{width:"20%",height:""}} > <img src={card1} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
       
            <td>Available & Guaranteed</td>
            <td>$2,779</td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
            </td>
            
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>
        <tr>
        <td style={{width:"20%",height:""}} > <img src={card2} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
      
            <td>Booked & Guaranteed</td>
            
            <td>$2,779</td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
            </td>
            
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>
        

        <tr>
        <td style={{width:"20%",height:""}} > <img src={card3} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
        
            <td>Available & Guaranteed</td>
            <td>$2,779</td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
            </td>
        
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>

        <tr>
        <td style={{width:"20%",height:""}} > <img src={card4} className=" image-radious " alt=""  style={{width:"",height:""}} /></td>
        
            <td>Available </td>
            <td>
            <div class="uk-button-group">
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"25px"}}>+</button>
        <button class="uk-button " style={{width:"2px",height:"2px"}}>7</button>
        <button class="uk-button " style={{width:"2px",height:"2px",fontSize:"30px"}}>-</button>
         </div>
            </td>
            <td>$3,970  </td>
            <td>
           $19,453
            </td>
            <td><span uk-icon="icon:  trash; ratio: 1.6"></span></td>
        </tr>
      
    </tbody>
</table>
<div class="uk-child-width-1-6 uk-grid">
<div class="uk-margin">
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Enter Coupon Code..." style={{fontSize:"12px"}}></input>
    </div>
<div><button class="uk-button uk-button-default  uk-margin-small-bottom" style={{backgroundColor:"gray",color:"white"}}>Apply&nbsp;COUPON</button></div>
<div></div>
<div></div>
<div><button class="uk-button uk-button-default  uk-margin-small-bottom" href="/checkout" style={{backgroundColor:"gray",color:"white"}}>CHECKOUT</button></div>
<div><button class="uk-button uk-button-default  uk-margin-small-bottom" style={{backgroundColor:"gray",color:"white"}}>UPDATE&nbsp;CART</button></div>
</div>




</div>



   </div>
   )
}
}
export default Cart;