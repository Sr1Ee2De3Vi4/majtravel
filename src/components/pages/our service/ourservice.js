import React, { Component } from 'react';

import main2 from '../../../assests/home/plane.jpg';
import  '../our service/ourservice.css';

import card1 from '../../../assests/home/img-08.jpg';
import card2 from '../../../assests/home/img-09.jpg';
import card3 from '../../../assests/home/img-10.jpg';
import card4 from '../../../assests/home/img-11.jpg';
import card5 from '../../../assests/home/img-12.jpg';
import card6 from '../../../assests/home/img-07.jpg';

class ourservice extends Component {

    render() {
    return(
   <div>
        <div class="uk-child-width-1-1">
    <div>

        <div class="uk-inline">
        <div class="uk-overflow-hidden">
            <img src={main2} alt="Example image" class="uk-animation-reverse uk-transform-origin-top-right" uk-scrollspy="cls: uk-animation-kenburns; repeat: true"/>
        </div>
        <div class="uk-overlay  uk-position-center">
        <div class="uk-animation-toggle" tabindex="0">
        <div class=" uk-animation-slide-left">
            <p class="uk-text-center overtext">FIND ADVENTURES</p>
        </div>
    </div>


    </div>
        </div>
    </div> 
  
    </div>






     {/* 6 cards  */}
     <div>
<div class="" style={{textAlign:"center"}}>
<p class="p1">POPULAR SERVICESS</p>
<p  class="p2">We have a unique way of meeting your travel expectations!</p>
</div>
</div>
<hr class="uk-divider-icon" style={{marginLeft:"20%",marginRight:"20%"}}></hr>


  
  {/* card section1 */}  
  <div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid card1">

{/* Holiday Packages */}
    <div class="" style={{paddingLeft:""}}>
    <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
    <div class="uk-card-media-top">
    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card6} alt=""/>
    
   <br/> <br/><a class="s1" style={{fontSize:"20px"}}>Holiday Packages </a>
    <br/>
    <a>If you’ve always dreamt of a vacations,but never found the motivation, it’s time you checked out our Holiday packages that will make your vacation a reality.</a>
    <hr class="uk-divider-large"></hr>
    <p uk-margin>
    <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/holiday">Explore</a>
     </p>
     <a class="" style={{fontSize:"14px"}}>From </a><br/>
     <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
    </div>
   
    </div>
    </div>
    </div>

    {/* Destination Weddings */}
    <div class="" style={{paddingLeft:""}}>
    <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
    <div class="uk-card-media-top">
    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card1} alt=""/>
    <br/> <br/><a class="s1" style={{fontSize:"20px"}}>Destination Weddings </a>
    <br/>
    <a>If you’ve always dreamt of a destination wedding but never found the motivation, it’s time you checked out our Destination wedding packages that will make your dream wedding a reality.</a>
    <hr class="uk-divider-large"></hr>
    <p uk-margin>
    <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="#">Explore</a>
     </p>
     <a class="" style={{fontSize:"14px"}}>From </a><br/>
     <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
    </div>
   
    </div>
    </div>
    </div>


    {/* Events */}
    <div class="" style={{paddingLeft:""}}>
    <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card2} alt=""/>
    <br/><br/><a class="s1" style={{fontSize:"20px"}}>Events</a>
    <br/>
    <a>If you’ve always dreamt of a joyful momemts with your loved ones, but never found the motivation, it’s time you checked out our Events that will make your dream a reality.</a>
    <hr class="uk-divider-large"></hr>
    <p uk-margin>
    <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="#">Explore</a>
     </p>
     <a class="" style={{fontSize:"14px"}}>From </a><br/>
     <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
    </div>
   
    </div>
    </div>
    </div>


</div>






{/* card section2 */}

<div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid card2">


{/* Study Abroad */}

    <div class="" style={{paddingLeft:""}}>
    <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card3} alt=""/>
    <br/><br/><a class="s1" style={{fontSize:"20px"}}>Study Abroad </a>
    <br/>
    <a>If you’ve always dreamt of a studying in abroad but never found the motivation, it’s time you checked out our packages that will make your Study dream a reality.</a>
    <hr class="uk-divider-large"></hr>
    <p uk-margin>
    <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="#">Explore</a>
     </p>
     <a class="" style={{fontSize:"14px"}}>From </a><br/>
     <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
    </div>
   
    </div>
    </div>
    </div>



    {/* Wellness Tours */}

    <div class="" style={{paddingLeft:""}}>
    <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card4} alt=""/>
    <br/><br/><a class="s1" style={{fontSize:"20px"}}>Wellness Tours</a>
    <br/>
    <a>If you’ve always dreamt of a going wellness-tours but never found the motivation, it’s time you checked out our wellness-tour packages.</a>
    <hr class="uk-divider-large"></hr><br/>
    <p uk-margin>
    <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="#">Explore</a>
     </p>
     <a class="" style={{fontSize:"14px"}}>From </a><br/>
     <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
    </div>
   
    </div>
    </div>
    </div>


    {/* Adventures */}

    <div class="" style={{paddingLeft:""}}>
    <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
        <div class="uk-card-media-top">
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
    <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card5} alt=""/>
    <br/><br/><a class="s1" style={{fontSize:"20px"}}>Adventures</a>
    <br/>
    <a>If you’ve always dreamt of making adventures but never found the motivation, it’s time you checked out our adventure packages that will make your dream adventure a reality.</a>
    <hr class="uk-divider-large"></hr>
    <p uk-margin>
    <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="#">Explore</a>
     </p>
     <a class="" style={{fontSize:"14px"}}>From </a><br/>
     <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
    </div>
   
    </div>
    </div>
    </div>
</div>






   



    </div>
    )
    }
}
export default ourservice;