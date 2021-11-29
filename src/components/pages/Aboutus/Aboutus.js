import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../Aboutus/Aboutus.css';
import icon1 from '../../../assests/home/ico-bungee.svg';
import icon2 from '../../../assests/home/ico-hiking.svg';
import icon3 from '../../../assests/home/ico-wildlife.svg';
import icon4 from '../../../assests/home/ico-peak-climbing.svg';
import icon5 from '../../../assests/home/ico-mountain-biking.svg';
import icon6 from '../../../assests/home/ico-scuba-diving.svg';
import icon7 from '../../../assests/home/ico-hunting.svg';
import icon8 from '../../../assests/home/ico-boating.svg';

class Aboutus extends Component {

    render() {
    return(
   <div>
<div class="uk-align-center" style={{textAlign:"center"}}>
    <p style={{fontSize:"30px",color:"black",fontWeight:"bold"}}>THE ADVENTURE</p>
    <p style={{fontSize:"25px",fontStyle:"italic",letterSpacing:"3px"}}>Mastering the art of perfect adventure for 10+ years in the wild.</p>
    <hr class="uk-divider-icon"></hr>
</div>


<div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid" style={{paddingLeft:"7%",paddingRight:"5%"}}>
    <div class="uk-card uk-panel uk-card-body ">
    <img class="uk-align-center" src={icon2}  style={{width:"50px",height:"50px"}}/>
    <h3 class="uk-card-title " style={{textAlign:"center"}}>Travel & Tourism</h3>
    <p style={{textAlign:"center"}}> We are a complete travel planning company with 
     operations across the globe. We plan and organize your
      travel within your budget. Share your travel date,
       destination, passenger count and budget</p>
   </div>

<div class="uk-card  uk-card-body ">
<img class="uk-align-center" src={icon2}  style={{width:"50px",height:"50px"}}/>
    <h3 class="uk-card-title " style={{textAlign:"center"}}>Mission & Values</h3>
    <p style={{textAlign:"center"}}>We are aimed at providing Holiday Packages page lists
         you worlds best vacation packages. Choose your 
         destination and book in Budget, Premium or Luxury
          categories with great offers and deals. Best 
          pricing and full satisfaction guaranteed!</p>
</div>

<div class="uk-card  uk-card-body ">
<img class="uk-align-center" src={icon2}  style={{width:"50px",height:"50px"}}/>
    <h3 class="uk-card-title" style={{textAlign:"center"}}>Sustainable Travel</h3>
    <p style={{textAlign:"center"}}>Choose your destination and book in Budget, 
        Premium or Luxury categories with great offers
         and deals. Best pricing and full satisfaction guaranteed!</p>
</div>
</div>

<br/><br/><br/>


<div class=""  style={{textAlign:"center",backgroundColor:"rgb(243, 238, 233)"}}><br/><br/><br/>
    <p style={{fontSize:"30px",color:"black",fontWeight:"bold",letterSpacing:"3px"}}>ABOUT MAJ TRAVEL COMPANY</p>
    <p style={{fontSize:"25px",fontStyle:"italic",letterSpacing:"3px"}}>A work of art is above all an adventure of mind!</p>
    <hr class="uk-divider-icon"></hr>
    
    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid"style={{paddingLeft:"7%",paddingRight:"5%"}} >
    <div class="uk-card uk-panel uk-card-body ">
    <h3 class="uk-card-title">Best Adventure</h3>
    <p> We are a complete travel planning company with 
        operations across the globe. We plan and organize 
        your travel within your budget.Share your travel date, 
        destination, passenger count and budget. we will plan and 
        organize the travel for you with high quality and support.</p>
    </div>

    <div class="uk-card  uk-card-body ">
    <h3 class="uk-card-title">Awesome Tour Details.</h3>
    <p>Our Holiday Packages page lists you worlds best vacation packages.<br/>
        Choose your destination and book in Budget, Premium or <br/>Luxury categories
        with great offers and deals. <br/>Best pricing and full satisfaction
        guaranteed!M.A.J Travel Company <br/>offers all kinds of travel services.
        Our services includes Hotels,<br/> Cheap flight tickets, Vacation packages,
        Travel management<br/> for corporate and SMEs, Destination wedding and Photoshoot
        plans,<br/> Event planning, Medical tours, Travel loan assistance, Visa assistance,<br/>
        Student exchange programs, Travel cards and much more.</p>
    </div>

</div>
</div>

<div class="uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid" style={{backgroundColor:"black",color:"white",paddingLeft:"18%",paddingRight:"8%",paddingTop:"7%",paddingBottom:"7%"}}>

<div>
    <div><img  src={icon2}  style={{width:"50px",height:"50px",margin:"10px",marginLeft:"19%"}}/>
    <p>CAMPING AND HIKING</p>
    </div><br/><br/><br/>
</div>

<div>
    <div><img src={icon6} style={{width:"50px",height:"50px",margin:"10px",marginLeft:"10%"}} />
    <p>SCUBA DIVING</p>
    </div>
</div>

<div>
    <div><img src={icon3} style={{width:"50px",height:"50px",margin:"10px",marginLeft:"15%"}}/>
    <p>WILDLIFE AND POLAR</p>
    </div><br/><br/><br/>
</div>

<div>
    <div><img src={icon4} style={{width:"50px",height:"50px",margin:"10px",marginLeft:"10%"}}/>
    <p>PEAK CLIMBING</p>
    </div>
</div>

<div>
    <div><img src={icon5} style={{width:"50px",height:"50px",margin:"10px",marginLeft:"10%"}}/>
    <p>MOUNTAIN BIKING</p>
    </div><br/><br/><br/>
</div>

<div>
    <div><img src={icon1} style={{width:"50px",height:"50px",margin:"10px",marginLeft:"10%"}}/>
    <p>BUNGEE JUMPING</p>
    </div>
</div>
 
</div>      
<div class=""  style={{textAlign:"center"}}><br/><br/><br/>
    <p style={{fontSize:"30px",color:"black",fontWeight:"bold",letterSpacing:"3px"}}>PEOPLE POWER</p>
    <p style={{fontSize:"25px",fontStyle:"italic",letterSpacing:"3px"}}>Our guides are the secret weapon behind our success.</p>
    <hr class="uk-divider-icon"></hr>
    
    <div class="uk-child-width-1-1@l uk-child-width-1-1@m uk-child-width-1-1@s uk-grid"style={{paddingLeft:"7%",paddingRight:"5%",textAlign:"center"}} >
    <div class="uk-card uk-panel uk-card-body ">
    <h3 class="uk-card-title">Amazing support for all.</h3>
    <p>We are a complete travel planning company with operations
         across the globe. We plan and organize your travel within 
         your budget. Share your travel date, destination, passenger
          count and budget. we will plan and organize the travel for 
          you with high quality and support.Our Holiday Packages page 
          lists you worlds best vacation packages. Choose your destination 
          and book in Budget, Premium or Luxury categories with great
           offers and deals. Best pricing and full satisfaction guaranteed! </p>
    </div>


</div>
</div>

 <div>
     <p style={{fontSize:"32px",fontStyle:"italic",letterSpacing:"2px",textAlign:"center",backgroundColor:"rgb(62, 62, 63)",color:"white",paddingTop:"5%",paddingBottom:"5%"}}>“Let us step into the night and pursue that flighty temptress,<br/> adventure.”</p>
 </div>



 <br/><br/><br/>

 <div class="uk-child-width-1-4@l uk-child-width-1-4@m uk-child-width-1-1@s uk-grid" style={{paddingLeft:"7%",paddingRight:"5%"}}>
    <div class="uk-card uk-panel uk-card-body uk-card-default">
        <div  class="uk-card uk-panel uk-card-body   uk-padding-remove">
        <h3 class="uk-card-title">MAJ Travel Company</h3>
        <p>We are a complete travel planning company with operations across the globe. </p>
        </div><br/></div>
        <div class="uk-card uk-panel uk-card-body uk-card-default">
        <div  class="uk-card uk-panel uk-card-body uk-padding-remove">
        <h3 class="uk-card-title">Awards & Accolades</h3>
        <p>Free travel planning’ form and our highly qualified travel experts will
             plan your travel and assist you further.</p>
   </div>
   </div>

<div class="uk-card  uk-card-body uk-card-default ">
<div  class="uk-card uk-panel uk-card-body   uk-padding-remove">
    <h3 class="uk-card-title">Core Values</h3>
    <p>we will plan and organize the travel for you with high quality and support.</p>
  </div><br/><br/></div>
  <div class="uk-card uk-panel uk-card-body uk-card-default">
  <div  class="uk-card uk-panel uk-card-body   uk-padding-remove">
    <h3 class="uk-card-title">Work With Locals</h3>
    <p>We provide a sustainable travel with the help of our highly qualified travel.</p>
  </div>
</div> 

<div class="uk-card  uk-card-body ">
    <div  class="uk-card uk-panel uk-card-body uk-card-default  uk-padding-remove">
    <h3 class="uk-card-title">Sustainable Travel</h3>
    <p>We provide a sustainable travel with the help of our highly qualified travel.</p>
    </div><br/><br/></div>
    <div class="uk-card uk-panel uk-card-body uk-card-default">
    <div  class="uk-card uk-panel uk-card-body  uk-padding-remove">
    <h3 class="uk-card-title">Green Adventures</h3>
    <p>Our Holiday Packages page lists you worlds best vacation packages.</p>
    </div>
</div>

<div class="uk-card  uk-card-body uk-card-default
">
    <div  class="uk-card uk-panel uk-card-body   uk-padding-remove">   
    <h3 class="uk-card-title">Innovative Adventure</h3>
    <p>Our Holiday Packages page lists you worlds best vacation packages.</p>
    </div><br/><br/>
    </div>
    <div class="uk-card uk-panel uk-card-body uk-card-default">
    <div  class="uk-card uk-panel uk-card-body   uk-padding-remove">
    <h3 class="uk-card-title">Green Tourism</h3>
    <p>We provide a sustainable travel with the help of our highly qualified travel.</p>
    </div>
</div>    

</div>


   </div>

   )
}
}
export default Aboutus;