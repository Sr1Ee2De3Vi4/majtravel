import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import main from '../../../assests/home/flight.jpg';
import main1 from '../../../assests/home/img-041.jpg';
import main2 from '../../../assests/home/plane.jpg';

import card1 from '../../../assests/home/img-08.jpg';
import card2 from '../../../assests/home/img-09.jpg';
import card3 from '../../../assests/home/img-10.jpg';
import card4 from '../../../assests/home/img-11.jpg';
import card5 from '../../../assests/home/img-12.jpg';
import card6 from '../../../assests/home/img-07.jpg';


import part1 from '../../../assests/home/partner1.jpg';
import part2 from '../../../assests/home/partner2.jpg';
import part3 from '../../../assests/home/partner3.jpg';
import part4 from '../../../assests/home/partner4.jpg';
import part5 from '../../../assests/home/partner5.jpg';
import part6 from '../../../assests/home/partner6.jpg';

import icon1 from '../../../assests/home/ico-bungee.svg';
import icon2 from '../../../assests/home/ico-hiking.svg';
import icon3 from '../../../assests/home/ico-wildlife.svg';
import icon4 from '../../../assests/home/ico-peak-climbing.svg';
import icon5 from '../../../assests/home/ico-mountain-biking.svg';
import icon6 from '../../../assests/home/ico-scuba-diving.svg';
import icon7 from '../../../assests/home/ico-hunting.svg';
import icon8 from '../../../assests/home/ico-boating.svg';

import img4 from '../../../assests/home/offer1.jpg';


import  '../home/home.css';
import Footer  from '../../footer/footer'
import Header  from '../../header/header'

class home extends Component {

    render() {
    return(
    <div>


{/* ----------------main section------------------------- */}


     <div class="uk-child-width-1-1" id="top">
    <div>

        <div class="uk-inline">
        <div class="uk-overflow-hidden">
            <img src={main1} alt="Example image" class="uk-animation-reverse uk-transform-origin-top-right" uk-scrollspy="cls: uk-animation-kenburns; repeat: true"/>
        </div>
        <div class="uk-overlay  uk-position-center">
        <div class="uk-animation-toggle" tabindex="0">
        <div class=" uk-animation-slide-left">
            <p class="uk-text-center overtext">FIND ADVENTURES</p>
        </div>
    </div>

            </div>
{/* ----------------overlay in large --------------------------- */}
            <div class=" uk-visible@l uk-card uk-overlay uk-position-bottom uk-card-default uk-card-body uk-width-1-2@m " style={{height:"30%",width:"90%",backgroundColor:"#3d3a30",marginBottom:"4%",marginLeft:"5%"}}>
                <div class=" uk-card uk-overlay uk-position-bottom uk-card-default uk-card-body   uk-grid" style={{height:"86%",width:"98%",backgroundColor:"#69665c",margin:"1%"}}>
               <div class="button "> 
               <p class="" style={{color:"white"}}>Select Your Package</p>
              <form class="form">
              <div class="uk-margin">
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{color:"white",backgroundColor:"black"}}>
                <option class="" value="">Destination weddings</option>
                <option value="2">Events</option>
                <option value="3">Study Aboard</option>
                <option value="4">Wellness Tours</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span class="" style={{marginLeft:"8px",align:"ri"}} uk-icon="icon: chevron-down"></span>
              </button>
             </div>
             </div>

            </form>

               </div>



               <div class="button"> 
               <p class="" style={{color:"white"}}>Select Your Destination</p>
              <form class="form">
              <div class="uk-margin">
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{color:"white",backgroundColor:"black"}}>
                <option class="" value="">Maldives</option>
                <option value="2">Bali</option>
                <option value="3">Srilanka</option>
                <option value="4">Kerala</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span class="" style={{marginLeft:"8px"}} uk-icon="icon: chevron-down"></span>
              </button>
             </div>
             </div>

            </form>

               </div>



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


               <p>
               <button class="uk-button uk-button-default uk-button-small  uk-text-bold" style={{backgroundColor:"white",padding:"5%",margin:"100%"}}>EXPLORE</button>
               </p>
                </div>
            </div> 


{/* ---------------overlay in small------------------- */}

<div class=" uk-hidden@l uk-card uk-card-default uk-card-body"style={{border:"1px solid black",backgroundColor:"black",padding:"1%",marginTop:"5%"}}>
<div class="uk-card uk-card-default uk-card-body "style={{border:"1px solid black",backgroundColor:"gray"}}>
    <div class="uk-child-width-1-4@l uk-child-width-1-4@m  uk-child-width-1-2@s  uk-grid">
        <div>

        <p class="" style={{color:"black"}}>Select Your Package</p>
              <form class="form">
              <div class="uk-margin">
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{color:"white",backgroundColor:"black"}}>
                <option class="" value="">Destination weddings</option>
                <option value="2">Events</option>
                <option value="3">Study Aboard</option>
                <option value="4">Wellness Tours</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span class="" style={{marginLeft:"8px"}} uk-icon="icon: chevron-down"></span>
              </button>
             </div>
             </div>

            </form>

        </div>


        <div>
        <p class="" style={{color:"black"}}>Select Your Package</p>
              <form class="form">
              <div class="uk-margin">
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{color:"white",backgroundColor:"black"}}>
                <option class="" value="">Destination weddings</option>
                <option value="2">Events</option>
                <option value="3">Study Aboard</option>
                <option value="4">Wellness Tours</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span class="" style={{marginLeft:"8px"}} uk-icon="icon: chevron-down"></span>
              </button>
             </div>
             </div>

            </form>

        </div>


        <div>
        <p class="" style={{color:"black"}}>Select Your Package</p>
              <form class="form">
              <div class="uk-margin">
              <div uk-form-custom="target: > * > span:first-child">
              <select class="" style={{color:"white",backgroundColor:"black"}}>
                <option class="" value="">Destination weddings</option>
                <option value="2">Events</option>
                <option value="3">Study Aboard</option>
                <option value="4">Wellness Tours</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span class="" style={{marginLeft:"8px"}} uk-icon="icon: chevron-down"></span>
              </button>
             </div>
             </div>

            </form>
        </div>


        <div>
        <p>
               <button class="uk-button uk-button-default uk-button-small uk-align-center uk-text-bold" style={{backgroundColor:"white",marginTop:"10%"}}>EXPLORE</button>
               </p>
        </div>
    </div>
</div>
    
</div>



{/* ---------------------------overlay small end------------------------------------------------------------ */}




            </div>
        </div>
    </div> 


  {/* --------------------main section ends-------------------------- */}

   
 

{/* ------------------icon section------------------------ */}

<div class="uk-column-1-2@l  uk-column-1-1@m  uk-width-1-1" style={{backgroundColor:"black",color:"white" ,height:"20%",columnGap:"0px"}}>
<p><div class="uk-column-1-4  uk-padding-remove"style={{paddingBottom:"20px",paddingTop:"10px"}}>
<p class="" style={{fontSize:"13px"}}><img src={icon1} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>BUNGEE JUMP</p></p>
<p class="" style={{fontSize:"13px"}}><img src={icon2} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>HIKING TRIPS</p></p>
<p class="" style={{fontSize:"13px"}}><img src={icon3} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>WILDLIFE SAFARI</p></p>
<p class="" style={{fontSize:"13px"}}><img src={icon4} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>PEAK CLIMBING</p></p>
</div></p>



<p><div class="uk-column-1-4">
<p class="" style={{fontSize:"13px",marginLeft:"20px"}}><img src={icon5} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>MOUNT BIKING</p></p>
<p class="" style={{fontSize:"13px"}}><img src={icon6} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>SCUBA DIVING</p></p>
<p class="" style={{fontSize:"13px"}}><img src={icon7} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>HUNTING TRIP</p></p>
<p class="" style={{fontSize:"13px"}}><img src={icon8} style={{width:"50px",height:"50px",align:"center",margin:"10px"}} /><p>SAILING TRIPS</p></p>
</div></p>
    
</div>

{/* ------------------icon section ends------------------------ */}



<div>
<div class="" style={{textAlign:"center",marginTop:"5%"}}>
<p class="p1"  >OFFERS</p>
<a  href="/offers" uk-icon="icon:  chevron-double-right; ratio: 2" style={{fontWeight:"700",color:"black"}}>Explore</a>

</div>
</div>
<hr class="uk-divider-icon" style={{marginLeft:"20%",marginRight:"20%",marginBottom:""}}></hr>
 {/* slideshow1 */}
 <div class="uk-container"> 
        <div uk-slideshow="autoplay: true; autoplay-interval: 5000; max-height: 350 " class=" ">
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom ">
            <ul class="uk-slideshow-items   ">
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                
                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>
                </div>
                
                </li>
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>
  
                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                </div>
                </li>
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                </div>
                </li>
                <li>
                <div class="uk-child-width-1-3 uk-grid">
                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                <div class="uk-card">
                    <img src={img4} class=""  alt="" uk-cover/>
                    <div> 
                    <p style={{color:"black",padding:"2%" ,border:"1px solid black"}}>
                    <a class="uk-text-bold">CODE</a>
                    <a class="" style={{border:"2px solid black",margin:"20px",backgroundColor:"lightgrey",borderRadius:"5px",fontWeight:"700"}}>F1RG3H4T3</a>
                    <a class="uk-align-right" href="/offers" uk-icon="icon:  arrow-right; ratio: 2" style={{color:"black" }}></a>
                    </p>
                    </div>
                </div>

                </div>
                </li>
            </ul>
        </div>
      <br/>
      
    </div>
    </div><br/>
        {/* slideshow1 end */} 

      
{/* -------------------second section--------------------- */}

<div>
<div class="" style={{textAlign:"center"}}>
<p class="p1">THE ADVENTURE</p>
<p  class="p2">Mastering the art of perfect adventure for 10+ years in the wild.</p>
</div>
</div>
<hr class="uk-divider-icon" style={{marginLeft:"20%",marginRight:"20%",marginBottom:"6%"}}></hr>



{/* cardbig */}

<div class="uk-card uk-card-default uk-card-body  " style={{height:"30%",width:"100%",backgroundColor:"gray",marginBottom:"7%"}}>
<div class="uk-card uk-card-default uk-card-body incard" >
    
    <p class="b1">Get special discount on select trip, this week. <a class="b2"> Call +91 9620612361</a></p>
</div>   
</div>


{/* -------------------second section ends--------------------- */}


{/* -----------------------6 cards-----------------------------  */}
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
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px"}}>Holiday Packages </a>
        <br/>
        <p class="" style={{padding:""}}>If you’ve always dreamt of a vacations,but never found the motivation, it’s time you checked out our Holiday packages that will make your vacation a reality.</p>
        <hr class="uk-divider-large"></hr><br/>
        <p class="">
        <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/holiday">Explore</a>
         </p>
         <a class="" style={{fontSize:"14px"}}>From </a><br/>
         <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
        </div>
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
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px"}}>Destination Weddings </a>
        <br/>
        <a>If you’ve always dreamt of a destination wedding but never found the motivation, it’s time you checked out our Destination wedding packages that will make your dream wedding a reality.</a>
        <hr class="uk-divider-large"></hr>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/DestinationWeddings">Explore</a>
         </p>
         <a class="" style={{fontSize:"14px"}}>From </a><br/>
         <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
        </div>
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
        <div class="" style={{padding:"15px"}}>
       <a class="s1" style={{fontSize:"20px"}}>Events</a>
        <br/>
        <a>If you’ve always dreamt of a joyful momemts with your loved ones, but never found the motivation, it’s time you checked out our Events that will make your dream a reality.</a>
        <hr class="uk-divider-large"></hr>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/Events">Explore</a>
         </p>
         <a class="" style={{fontSize:"14px"}}>From </a><br/>
         <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
        </div>
        </div>
        </div>
        </div>
        </div>
    
    
    </div>

    
    
    
    
    
{/* ----------------card section2-------------------------- */}

    <div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid card2">


    {/* Study Abroad */}

        <div class="" style={{paddingLeft:""}}>
        <div class="uk-card uk-card-default" style={{borderRadius:"10px"}} >
            <div class="uk-card-media-top">
            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
        <img  class="uk-transition-scale-up uk-transition-opaque" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px" }} src={card3} alt=""/>
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px"}}>Study Abroad </a>
        <br/>
        <a>If you’ve always dreamt of a studying in abroad but never found the motivation, it’s time you checked out our packages that will make your Study dream a reality.</a>
        <hr class="uk-divider-large"></hr>
        <br/>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/StudyAboard">Explore</a>
         </p>
         <a class="" style={{fontSize:"14px"}}>From </a><br/>
         <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
        </div>
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
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px"}}>Wellness Tours</a>
        <br/>
        <a>If you’ve always dreamt of a going wellness-tours but never found the motivation, it’s time you checked out our wellness-tour packages.</a>
        <hr class="uk-divider-large"></hr><br/>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/WellnessTours">Explore</a>
         </p>
         <a class="" style={{fontSize:"14px"}}>From </a><br/>
         <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
        </div>
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
        <div class="" style={{padding:"15px"}}>
        <a class="" style={{fontSize:"20px"}}>Adventures</a>
        <br/>
        <a>If you’ve always dreamt of making adventures but never found the motivation, it’s time you checked out our adventure packages that will make your dream adventure a reality.</a>
        <hr class="uk-divider-large"></hr>
        <p uk-margin>
        <a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"17px",color:"white"}} href="/Adventures">Explore</a>
         </p>
         <a class="" style={{fontSize:"14px"}}>From </a><br/>
         <a class="" style={{fontSize:"16px",fontWeight:"bold"}}> $2749</a>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    
  

{/* -----------------------6 cards ends-----------------------------  */}






<div class="uk-child-width-1-4@l uk-child-width-1-4@m uk-child-width-1-1@s  uk-grid " >

<div class="m2" style={{backgroundColor:"rgb(65, 63, 63)"}}> 
<div class="uk-animation-toggle" tabindex="0">
        <div class="  uk-animation-slide-top">
        <p> <span><i class="fas fa-paw "  style={{fontSize:"36px",color:"white",paddingTop:"30%"}}></i></span></p>
        </div>
    </div>

        <div> <a> 8702 </a></div><br/>
        <div class="m3"><a>WILDLIFE SPECIES</a></div>
</div>

<div class="m2" style={{backgroundColor:"rgb(4, 34, 4)"}}>
<div class="uk-animation-toggle" tabindex="0">
        <div class="  uk-animation-slide-top">
        <p> <span><i class="fas fa-paw "  style={{fontSize:"36px",color:"white",paddingTop:"30%"}}></i></span></p>
        </div>
    </div>
       <div> <a> 378 </a></div><br/>
       <div class="m3"><a> ARCTIC EXPERIENCES</a></div>
</div>

<div class="m2" style={{backgroundColor:"rgb(3, 8, 54)"}}>
<div class="uk-animation-toggle" tabindex="0">
        <div class="  uk-animation-slide-top">
        <p> <span><i class="fas fa-paw "  style={{fontSize:"36px",color:"white",paddingTop:"30%"}}></i></span></p>
        </div>
    </div>
        <div><a> 377 </a></div><br/>
        <div class="m3"> <a>NATIONAL PARKS</a></div>
</div>

<div class="m2" style={{backgroundColor:"dimgrey"}}>
<div class="uk-animation-toggle" tabindex="0">
        <div class="  uk-animation-slide-top">
        <p> <span><i class="fas fa-paw "  style={{fontSize:"36px",color:"white",paddingTop:"30%"}}></i></span></p>
        </div>
    </div>
    <div><a> 8973 </a></div><br/>
    <div class="m3"><a> DAYS IN THE WILD</a></div>
</div>

</div>



















    <div>
<div class="" style={{textAlign:"center"}}>
<p class="p1">POPULAR SERVICESS</p>
<p  class="p2">We have a unique way of meeting your travel expectations!</p>
</div>
</div>
<hr class="uk-divider-icon" style={{marginLeft:"20%",marginRight:"20%"}}></hr>

    <div class="uk-child-width-1-6@l uk-child-width-1-6@m  uk-child-width-1-3@s uk-grid" style={{marginLeft:"2%",marginTop:"5%",marginBottom:"5%",marginRight:"5%"}}>
        
    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
        <div><img  src={part1} alt=""/></div>
        </div>
    </div>

    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
        <div><img  src={part2} alt=""/></div>
        </div>
    </div>


    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
        <div><img  src={part3} alt=""/></div>
        </div>
    </div>


    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
        <div><img  src={part4} alt=""/></div>
        </div>
    </div>


    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
        <div><img  src={part5} alt=""/></div>
        </div>
    </div>


    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade uk-animation-reverse">
        <div><img  src={part6} alt=""/></div>
        </div>
    </div>

    
</div>




    {/* <div class="uk-animation-toggle" tabindex="0">
        <div class=" uk-animation-slide-left">
            <p class="uk-text-center"><h1 class="FIND ADVENTURES">FIND ADVENTURES</h1></p>
        </div>
    </div>

    <div class="uk-animation-toggle" tabindex="0">
        <div class="  uk-animation-slide-top">
        <p> <span><i class="fas fa-paw "  style={{fontSize:"36px",color:"white"}}></i></span></p>
        </div>
    </div> */}








{/* 

                        <div class="uk-width-1-1@s uk-width-1-1@m">
                           
                                
                               



                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="" style={{ color: "black", fontSize: "16px" }} >Fruits & Vegitables </Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/FruitsVeg" style={{ color: "black", fontSize: "16px" }}>All Fruits & Vegitables </Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Freshfruits" style={{ color: "black", fontSize: "16px" }}>Fresh Vegetables </Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Herbs & Seasonings </Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Fresh Fruits</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Exotic Fruits & Vegggies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Organic Fruits & Vegetables</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Cuts & Sprouts</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Flower Bouquets, Bunches</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Specialty</Link>
                                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                    
                                </div>
 */}




    
    </div> 



   )
   }
   }

export default home;
