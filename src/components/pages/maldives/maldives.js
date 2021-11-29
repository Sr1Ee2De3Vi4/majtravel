import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assests/maldives/img-06.jpg';
import img2 from '../../../assests/maldives/img-08.jpg';
import img3 from '../../../assests/maldives/img-09.jpg';
import img4 from '../../../assests/maldives/img-10.jpg';
import img5 from '../../../assests/maldives/img-11.jpg';


import g1 from '../../../assests/maldives/1.jpg';
import g2 from '../../../assests/maldives/2.jpg';
import g3 from '../../../assests/maldives/3.jpg';
import g4 from '../../../assests/maldives/4.jpg';
import g5 from '../../../assests/maldives/5.jpg';
import g6 from '../../../assests/maldives/6.jpg';
import g7 from '../../../assests/maldives/7.jpg';
import g8 from '../../../assests/maldives/8.jpg';
import g9 from '../../../assests/maldives/9.jpg';


import  '../StudyAboard/StudyAboard';

class Maldives extends Component {

    render() {
    return(
   <div>

 <div className="width-child-width-1-2@l uk-child-width-1-1 uk-grid">
<div class="uk-width-1-2@l">
    <img class="uk-width-1-1" style={{ height:"100%"}} src={img1}/>
</div>
<div class="uk-width-1-2@l" style={{WebkitBoxSizing:""}}>
<p class="" style={{letterSpacing:"1px",fontStretch:"semi-expanded",fontWeight:700,fontSize:"34px",textAlign:"center"}}>Maldives Package</p>
<p class="" style={{fontSize:"25px",textAlign:"center"}}>from</p>
<p class="" style={{fontSize:"30px",textAlign:"center",fontWeight:700,}}>US $979</p>

<div class="uk-child-width-1-2@l uk-child-width-1-1  uk-grid uk-margin-right">

    <div>

      <div class="uk-card-small uk-card-body" style={{borderBottom:"1px solid gray",padding:"2%"}}>
      <p><a class="uk-align-left uk-margin-remove-bottom">Reviews</a>
      <a class="uk-align-right uk-margin-remove-bottom"><span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
      </a>
      <a class="uk-align-left uk-margin-remove-bottom">75 Reviews</a>
      <a class="uk-align-right  uk-margin-remove-bottom" >5/5</a>
      </p>
      </div>

    </div>
    <br/><br/>


  
    <div>
    <div class="uk-card-small uk-card-body" style={{borderBottom:"1px solid gray",padding:"2%",marginBottom:"3%"}}>      
    <p><a class="uk-align-left uk-margin-remove-bottom">Vacation Style</a>
    <a class="uk-align-right uk-margin-remove-bottom"><span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
      </a>
    <a class="uk-align-left uk-margin-remove-bottom">Adult Group</a>
    <a class="uk-align-right uk-margin-remove-bottom uk-margin-remove-left">Camping Trek</a></p>
    </div>
    </div>

    <div>
    <div class="uk-card-small uk-card-body" style={{borderBottom:"1px solid gray",padding:"2%"}}>      
    <p><a class="uk-align-left uk-margin-remove-bottom">Activity Level</a>
    <a class="uk-align-right uk-margin-remove-bottom">...</a>
    <a class="uk-align-left uk-margin-remove-bottom">Quite Tough</a>
    <a class="uk-align-right uk-margin-remove-bottom">9/10</a></p>
    
    </div>
    </div>

    <div>
    <div class="uk-card-small uk-card-body" style={{borderBottom:"1px solid gray",padding:"2%"}}> 
    <p><a class="uk-align-left uk-margin-remove-bottom">Group Size</a>
    <a class="uk-align-right uk-margin-remove-bottom">..</a>
    <a class="uk-align-left uk-margin-remove-bottom">Medium Grougs</a>
    <a class="uk-align-right uk-margin-remove-bottom">6/10</a></p>
    </div>
    </div>
    
    <a class="uk-button uk-button-default uk-align-center " href="/checkout" style={{backgroundColor:"rgb(185, 178, 113)",color:"white",fontsize:"40px",paddingTop:"10px",paddingBottom:"10px"}}>Book Now</a>
    
</div>

<div className="width-child-width-1-4 uk-grid " style={{textAlign:"center",margin:"3%",paddingLeft:"5%"}}>
<div><a uk-icon="icon: facebook"></a> Share</div> 
<div><a uk-icon="icon: twitter"></a> Tweet</div> 
<div><a uk-icon="icon: google"></a> +1 </div> 
<div><a uk-icon="icon: pinterest"></a> Pin it </div>
</div>



</div>
</div>

{/* --------------------------end right half----------------------------- */}

<div>

<nav class="uk-navbar-container  " data-uk-sticky uk-navbar>
<div class="data-uk-sticky ">

 <ul class="uk-subnav uk-width-1-1 uk-child-width-1-6 uk-grid uk-margin-remove" uk-switcher="animation: uk-animation-fade"  style={{paddingBottom:"3%",paddingTop:"3%",backgroundColor:"black",color:"white",fontsize:"25px"}}>
    <li><a href="#">Overview</a></li>
    <li><a href="#">Itinerary</a></li>
    <li><a href="#">Lodging</a></li>
    <li><a href="#">Faq & Review</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">Dates & Price</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>



    {/* <div class="uk-child-width-1-2  uk-grid">

    <div class="uk-padding-left ">
    <p class="" style={{border:"1px solid black",padding:"3%",textAlign:"center"}}>All about the Maldives Holiday Package</p>

    <p class="" ><div class="uk-card uk-card-body uk-padding-remove" style={{border:"1px solid black",margin:"8%"}}>Travel to one of the best destinations with MAJ Travel Company<br/><br/>

Give yourself a break and rejuvenate yourself in the lap of nature and collect some unforgettable memories with your loved ones.<br/><br/>
Maldives is well known for its crystalline waters and white sandy beaches.<br/><br/>

It has myriad marine life, great resorts and certainly once in a lifetime visit.<br/><br/>

We are Providing additional facilities for free:<br/><br/>

Seat selection on flight on request Addon ($100)<br/><br/>

Free Airport transfer with a local guide to receive you and Drop included ($150)<br/><br/>

Scheduled speed boat to Hotel included ($100)<br/><br/>

Premium star rated Hotel with Private beach<br/><br/>

Breakfast and Dinner ($80)<br/><br/>

2 Water activities ($100*2) Add-ons on request</div></p>

  
    </div>
    
    
    <div class=" " >
    
    <p>The tour package inclusions and exclusions at a glance</p>
    
    
     <p class="">Whats included in this tour
Items that are covered in the cost of tour price.
Flight
Airport pick and drop
Speed Launch for Transit
Premium Beach Home stay in Dhiffushi Island
Breakfast and Dinner
Water Sports activities
Sight seeing
Assistance on Travel</p>
</div>


</div> */}

<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid " style={{marginLeft:"5%",marginRight:"7%"}}> 

<div>
<p class="" style={{border:"1px solid black",textAlign:"center",padding:"2%"}}>The tour package inclusions and exclusions at a glance</p>
<br/>
<p class="" style={{border:"1px solid black",textAlign:"left",padding:"5%",backgroundColor:"gray"}}>Travel to one of the best destinations with MAJ Travel Company<br/><br/>

Give yourself a break and rejuvenate yourself in the lap of nature and collect some unforgettable memories with your loved ones.<br/><br/>

Maldives is well known for its crystalline waters and white sandy beaches.<br/><br/>

It has myriad marine life, great resorts and certainly once in a lifetime visit.<br/><br/>

We are Providing additional facilities for free:<br/><br/>

Seat selection on flight on request Addon ($100)<br/><br/>

Free Airport transfer with a local guide to receive you and Drop included ($150)<br/><br/>

Scheduled speed boat to Hotel included ($100)<br/><br/>

Premium star rated Hotel with Private beach<br/><br/>

Breakfast and Dinner ($80)<br/><br/>

2 Water activities ($100*2) Add-ons on request</p>



</div>
<div>
<p class="" style={{border:"1px solid black",textAlign:"center",padding:"2%"}}>The tour package inclusions and exclusions at a glance</p>
<br/>
<p class="" style={{border:"1px solid gray"}}>
<p class="" style={{textAlign:"left",padding:"2%"}}><span uk-icon="icon:plus-circle; ratio: 2"></span>&nbsp; &nbsp;The tour package inclusions and exclusions at a glance</p>


<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Flight</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Airport pick and drop</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Speed Launch for Transit</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Premium Beach Home stay in Dhiffushi Island</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Breakfast and Dinner</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Water Sports activities</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Sight seeing</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Assistance on Travel</a><br/>
<br/>
</p>
<br/>


<p class="" style={{border:"1px solid gray"}}>
<p class="" style={{textAlign:"left",padding:"2%"}}><span uk-icon="icon: minus-circle; ratio: 2"></span>&nbsp; &nbsp;<a>Whats not included in this tour</a><br/>
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<a class="uk-text-small">Items that are not covered in the cost of tour price.</a></p>

<br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Flight</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Airport pick and drop</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Speed Launch for Transit</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Premium Beach Home stay in Dhiffushi Island</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Breakfast and Dinner</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Water Sports activities</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Sight seeing</a><br/>
<a class="uk-margin-remove-right uk-padding-remove" style={{textAlign:"left",padding:"2%",marginLeft:"10%"}}><span uk-icon="icon: check; ratio: 1"></span>&nbsp; &nbsp;Assistance on Travel</a><br/>
<br/>
</p>



</div>

</div>




</li>


    <li>
        
<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid " style={{marginLeft:"5%",marginRight:"7%"}}>

<div>


<div class="uk-container  uk-child-width-1-1 "  style={{paddingLeft:"",paddingTop:""}} >

<div class="uk-inline">  
    <button class="uk-button uk-button-default uk-width-1-1 " type="button" style={{borderColor:"black",textAlign:"left",marginTop:"20px",padding:"2%"}}> 
    
    <div class="uk-child-width-1-2 uk-grid">
    <div  class="uk-width-1-6 ">
    <span class="fa-stack fa-lg" >
    <i class="	far fa-circle fa-stack-2x"></i>
    <i class="fa-stack-1x ">1</i>
    </span>
    </div>  

    <div  class="uk-width-5-6 ">
    <p className="uk-margin-remove" style={{fontsize:"12px"}} >DAY 1</p>
    <p className="uk-margin-remove uk-text-small" style={{}}>Flight From BLR to MLE</p>
    </div>  
    </div>
    </button>
    
    <div uk-drop="mode: click" class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-card-default uk-width-1-1" style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
    Flight from Bangalore International Airport(BLR) to<br/>
    Valena International Airport(MLE).<br/>
    Airport guest greetings and pickup(free).<br/>
    Scheduled Speed boat transfer to Hotel(free).<br/>
    Hotel Stay at Ameera Beach Hotel, Dhiffushi Island – An Island <br/>
    which is 40 KM away from Male Airport with a Private beach <br/>
    frond and Much more facilities!.
        
    </div>
    </div>
</div>


 

<div class="uk-inline">  
    <button class="uk-button uk-button-default uk-width-1-1 " type="button" style={{borderColor:"black",textAlign:"left",marginTop:"20px",padding:"2%"}}> 
    
    <div class="uk-child-width-1-2 uk-grid">
    <div  class="uk-width-1-6 ">
    <span class="fa-stack fa-lg" >
    <i class="	far fa-circle fa-stack-2x"></i>
    <i class="fa-stack-1x ">2</i>
    </span>
    </div>  

    <div  class="uk-width-5-6 ">
    <p className="uk-margin-remove" style={{fontsize:"12px"}} >DAY 2</p>
    <p className="uk-margin-remove uk-text-small" style={{}}>Flight From BLR to MLE</p>
    </div>  
    </div>
    </button>
    
    <div uk-drop="mode: click" class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-card-default uk-width-1-1" style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
    Flight from Bangalore International Airport(BLR) to<br/>
    Valena International Airport(MLE).<br/>
    Airport guest greetings and pickup(free).<br/>
    Scheduled Speed boat transfer to Hotel(free).<br/>
    Hotel Stay at Ameera Beach Hotel, Dhiffushi Island – An Island <br/>
    which is 40 KM away from Male Airport with a Private beach <br/>
    frond and Much more facilities!.
        
    </div>
    </div>
</div>


<div class="uk-inline">  
    <button class="uk-button uk-button-default uk-width-1-1 " type="button" style={{borderColor:"black",textAlign:"left",marginTop:"20px",padding:"2%"}}> 
    
    <div class="uk-child-width-1-2 uk-grid">
    <div  class="uk-width-1-6 ">
    <span class="fa-stack fa-lg" >
    <i class="	far fa-circle fa-stack-2x"></i>
    <i class="fa-stack-1x ">3</i>
    </span>
    </div>  

    <div  class="uk-width-5-6 ">
    <p className="uk-margin-remove" style={{fontsize:"12px"}} >DAY 3</p>
    <p className="uk-margin-remove uk-text-small" style={{}}>Flight From BLR to MLE</p>
    </div>  
    </div>
    </button>
    
    <div uk-drop="mode: click" class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-card-default uk-width-1-1" style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
    Flight from Bangalore International Airport(BLR) to<br/>
    Valena International Airport(MLE).<br/>
    Airport guest greetings and pickup(free).<br/>
    Scheduled Speed boat transfer to Hotel(free).<br/>
    Hotel Stay at Ameera Beach Hotel, Dhiffushi Island – An Island <br/>
    which is 40 KM away from Male Airport with a Private beach <br/>
    frond and Much more facilities!.
        
    </div>
    </div>
</div>


<div class="uk-inline">  
    <button class="uk-button uk-button-default uk-width-1-1 " type="button" style={{borderColor:"black",textAlign:"left",marginTop:"20px",padding:"2%"}}> 
    
    <div class="uk-child-width-1-2 uk-grid">
    <div  class="uk-width-1-6 ">
    <span class="fa-stack fa-lg" >
    <i class="	far fa-circle fa-stack-2x"></i>
    <i class="fa-stack-1x ">4</i>
    </span>
    </div>  

    <div  class="uk-width-5-6 ">
    <p className="uk-margin-remove" style={{fontsize:"12px"}} >DAY 4</p>
    <p className="uk-margin-remove uk-text-small" style={{}}>Flight From BLR to MLE</p>
    </div>  
    </div>
    </button>
    
    <div uk-drop="mode: click" class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-card-default uk-width-1-1" style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
    Flight from Bangalore International Airport(BLR) to<br/>
    Valena International Airport(MLE).<br/>
    Airport guest greetings and pickup(free).<br/>
    Scheduled Speed boat transfer to Hotel(free).<br/>
    Hotel Stay at Ameera Beach Hotel, Dhiffushi Island – An Island <br/>
    which is 40 KM away from Male Airport with a Private beach <br/>
    frond and Much more facilities!.
        
    </div>
    </div>
</div>



<div class="uk-inline">  
    <button class="uk-button uk-button-default uk-width-1-1 " type="button" style={{borderColor:"black",textAlign:"left",marginTop:"20px",padding:"2%"}}> 
    
    <div class="uk-child-width-1-2 uk-grid">
    <div  class="uk-width-1-6 ">
    <span class="fa-stack fa-lg" >
    <i class="	far fa-circle fa-stack-2x"></i>
    <i class="fa-stack-1x ">5</i>
    </span>
    </div>  

    <div  class="uk-width-5-6 ">
    <p className="uk-margin-remove" style={{fontsize:"12px"}} >DAY 5</p>
    <p className="uk-margin-remove uk-text-small" style={{}}>Flight From BLR to MLE</p>
    </div>  
    </div>
    </button>
    
    <div uk-drop="mode: click" class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-card-default uk-width-1-1" style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
    Flight from Bangalore International Airport(BLR) to<br/>
    Valena International Airport(MLE).<br/>
    Airport guest greetings and pickup(free).<br/>
    Scheduled Speed boat transfer to Hotel(free).<br/>
    Hotel Stay at Ameera Beach Hotel, Dhiffushi Island – An Island <br/>
    which is 40 KM away from Male Airport with a Private beach <br/>
    frond and Much more facilities!.
        
    </div>
    </div>
</div>



</div>
</div>

<div>  
<div>
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
            <img src={img2} alt=""/>
        </div>
        <div class="uk-card-body"style={{padding:"2%",backgroundColor:"lightgray"}}>
            <p class="" style={{fontsize:"25px"}}>Members taking a short break<br/>
            <a  class="uk-text-small">Consider packing your bag with folloing daily essentials.</a></p>
        </div>
    </div>
</div>

<br/>
<div>
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
            <img src={img3} alt=""/>
        </div>
        <div class="uk-card-body"style={{padding:"2%",backgroundColor:"lightgray"}}>
            <p class="" style={{fontsize:"25px"}}>Couple enjoying the spectacular view<br/>
            <a  class="uk-text-small">Consider packing your bag with folloing daily essentials.</a></p>
        </div>
    </div>
</div>

</div>
</div>
</li>



    <li>
    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid " style={{marginLeft:"5%",marginRight:"7%"}}> 

<div>
<p class="" style={{border:"1px solid black",textAlign:"center",padding:"2%"}}>Hotels, Tea Houses and Lodges</p>
<br/>
<p class="" style={{border:"1px solid black",textAlign:"left",padding:"5%",backgroundColor:"gray"}}>
    
We are Providing additional facilities for free:<br/><br/>

Seat selection on flight on request Addon ($100)<br/><br/>

Free Airport transfer with a local guide to receive you and Drop included ($150)<br/><br/>

Scheduled speed boat to Hotel included ($100)<br/><br/>

Premium star rated Hotel with Private beach<br/><br/>

Breakfast and Dinner ($80)<br/><br/>

2 Water activities ($100*2) Add-ons on request  <br/><br/>
    
</p>



</div>
<div>
<p class="" style={{border:"1px solid black",textAlign:"center",padding:"2%"}}>The tour package inclusions and exclusions at a glance</p>
<br/>
<p class="" style={{border:"1px solid gray"}}>
<p class="" style={{textAlign:"left",padding:"2%"}}><span uk-icon="icon: plus-circle; ratio: 2"></span>&nbsp; &nbsp;<a>Shared Rooms included in teh Price</a><br/>
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<a class="uk-text-small">Items that are covered in the cost of tour price.</a></p>

<img class="" style={{ paddingRight:"10%",paddingLeft:"10%",marginBottom:"8%"}} src={img4}/>

</p>
<br/>



<p class="" style={{border:"1px solid gray"}}>
<p class="" style={{textAlign:"left",padding:"2%"}}><span uk-icon="icon: plus-circle; ratio: 2"></span>&nbsp; &nbsp;<a>Individual Rooms not included in the Price</a><br/>
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<a class="uk-text-small">Items that are covered in the cost of tour price.</a></p>

<img class="" style={{ paddingRight:"10%",paddingLeft:"10%",marginBottom:"8%"}} src={img5}/>

</p>


</div>

</div>
 
        
    </li>
    
    
    <li>


    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid " style={{marginLeft:"5%",marginRight:"7%"}}> 
<div class="uk-container  uk-child-width-1-1 "  style={{paddingLeft:"",paddingTop:""}} >

<div class="uk-inline">  
    <button class="uk-button uk-button-default uk-width-1-1 " type="button" style={{borderColor:"black",marginTop:"20px",padding:"2%"}}> 
    what are the most recommanded place on Maldives.....
    </button>
    
    <div uk-drop="mode: click" class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-card-default uk-width-1-1" style={{backgroundColor:"white",color:"black",border:"1px solid black"}}>
    When traveling to Maldives you can visit Male, Feydhoo, Hulhumale Island, Utheemu, 
    Maafushi and many other places. Most of the famous beaches include Hulhumale Beach, 
    Vabbinfaru Island Beach, Fulhadhoo Beach, 
    Sun Island Beach and Dhigurah Beach. Depending on the type of vacation you want, 
    you can visit any of these places.
        
    </div>
    </div>
</div>


</div>

<div>
<p class="" style={{border:"1px solid black",textAlign:"center",padding:"2%"}}>The tour package inclusions and exclusions at a glance</p>

<div class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-child-width-1-3 uk-grid uk-margin-remove " style={{padding:"4%"}}>
   <div class="uk-padding-remove ">
    <p>Cleona Torez - Spain</p>   
    <p class="uk-text-small">Reviewed on 14/1/2016</p>   
   </div> 
   <div></div> 
   <div>
   <p class="" style={{textAlign:"right"}}>
   <a class="uk-align-right uk-margin-remove-bottom "><span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
   </a>
   </p>   
   <p class="uk-text-small"style={{textAlign:"right"}}>4.7/5</p>   
   </div> 
</div>
<br/>

<div class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-child-width-1-3 uk-grid uk-margin-remove " style={{padding:"4%"}}>
   <div class="uk-padding-remove ">
    <p>Cleona Torez - Spain</p>   
    <p class="uk-text-small">Reviewed on 14/1/2016</p>   
   </div> 
   <div></div> 
   <div>
   <p class="" style={{textAlign:"right"}}>
   <a class="uk-align-right uk-margin-remove-bottom "><span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
   </a>
   </p>   
   <p class="uk-text-small"style={{textAlign:"right"}}>4.7/5</p>   
   </div> 
</div>
<br/>

<div class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-child-width-1-3 uk-grid uk-margin-remove " style={{padding:"4%"}}>
   <div class="uk-padding-remove ">
    <p>Cleona Torez - Spain</p>   
    <p class="uk-text-small">Reviewed on 14/1/2016</p>   
   </div> 
   <div></div> 
   <div>
   <p class="" style={{textAlign:"right"}}>
   <a class="uk-align-right uk-margin-remove-bottom "><span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
   </a>
   </p>   
   <p class="uk-text-small"style={{textAlign:"right"}}>4.7/5</p>   
   </div> 
</div>
<br/>

<div class="uk-card uk-card-default uk-card-body uk-width-1-1  " style={{padding:"4%"}}>
  
 
   <div>
   <p class="" style={{textAlign:"center",fontWeight:"700"}}>Show More Reviews - 75 Reviews</p>
   </div>

</div>
<br/>

</div>
</div>


        
    </li>


    <li>
<div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid "style={{marginLeft:"5%",marginRight:"7%"}}>
<div> <img class="" style={{marginTop:"12%"}} src={g1}/></div>
<div><img class="" style={{marginTop:"12%"}} src={g2}/></div>
<div><img class="" style={{marginTop:"12%"}} src={g3}/></div>
<div> <img class="" style={{marginTop:"12%"}} src={g4}/></div>
<div><img class="" style={{marginTop:"12%"}} src={g5}/></div>
<div><img class="" style={{marginTop:"12%"}} src={g6}/></div>
<div> <img class="" style={{marginTop:"12%"}} src={g7}/></div>
<div><img class="" style={{marginTop:"12%"}} src={g8}/></div>
<div><img class="" style={{marginTop:"12%"}} src={g9}/></div>

</div>
    </li>
   
   
    <li>
        
    <div class="" style={{marginLeft:"6%",marginRight:"6%"}}>
    <table class="uk-table uk-table-striped">
    <thead>
        <tr>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Departure Dates</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Confirmed Dates</a>
            </th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Trip Status</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Trip Status</a>
            </th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Price (PP)</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Including Flights</a>
            </th>
            <th>
               <a class="" style={{fontSize:"15px",fontWeight:"700"}}>Price (PP)</a>
               <br/>
               <a class="" style={{fontSize:"12px"}}>Excluding Flights</a>
            </th>
            <th></th>
               
            
        </tr>
    </thead>
    <tbody>
       
        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16</td>
            <td>Available & Guaranteed</td>
            <td>$2,779</td>
            <td>$3,170</td>
            <td>
            <button class="uk-button uk-button-secondary" >Book&nbsp;Now</button>
            </td>
        </tr>
        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16</td>
            <td>Booked & Guaranteed</td>
            <td>$2,679</td>
            <td>$3,970</td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>
        

        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16 </td>
            <td>Available & Guaranteed</td>
            <td>$1,779 </td>
            <td>$3,470 </td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>

        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16</td>
            <td>Available </td>
            <td>$2,779 </td>
            <td>$3,970  </td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>

        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16</td>
            <td>Available & Guaranteed</td>
            <td>$2,779</td>
            <td>$3,170</td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>
        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16</td>
            <td>Booked & Guaranteed</td>
            <td>$2,679</td>
            <td>$3,970</td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>
        

        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16 </td>
            <td>Available & Guaranteed</td>
            <td>$1,779 </td>
            <td>$3,470 </td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>

        <tr>
            <td>Fri 18 Oct '16 - Sun 04 Nov '16</td>
            <td>Available </td>
            <td>$2,779 </td>
            <td>$3,970  </td>
            <td>
            <button class="uk-button uk-button-secondary">Book&nbsp;Now</button>
            </td>
        </tr>
      
    </tbody>
</table>

<button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">MORE DATES AND PRICES</button>

</div>


    </li>
</ul>
</div>
</nav>
</div><br/><br/><br/>

<ul class="uk-switcher uk-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
    <li>Bazinga!</li>
    <li>Bazinga!</li>
    <li>Bazinga!</li>
</ul>




   </div>
   )
}
}
export default Maldives;