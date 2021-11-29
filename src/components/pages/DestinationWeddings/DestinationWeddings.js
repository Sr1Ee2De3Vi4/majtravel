import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../DestinationWeddings/DestinationWeddings';
import card1 from '../../../assests/holiday/img-35.jpg';

import icon1 from '../../../assests/holiday/ico-level2.svg';
import icon2 from '../../../assests/holiday/ico-beach.svg';
import icon3 from '../../../assests/holiday/ico-boat.svg';
import icon4 from '../../../assests/holiday/ico-food-wine.svg';
import icon5 from '../../../assests/holiday/ico-water.svg';


class DestinationWeddings extends Component {

    render() {
    return(
   <div>

       {/* --------------------------main section------------------------------ */}


<div class="main ">
    <p class="" style={{fontSize:"50px",letterSpacing:"4px"}}>DESTINATION WEDDINGS</p>
    <p class="" style={{fontSize:"25px",fontStyle:"italic"}}>The most detailed and modern Adventure theme!</p>
    <p class="" style={{fontSize:"17px",paddingTop:"4%"}}>HOME /DESTINATION /ASIA /THAILAND</p>
</div>


{/* -------------------------------card 1------------------------------- */}


<div class="uk-width-2-3@m uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid " style={{padding:"1%",marginLeft:"8%",marginRight:"8%",marginbottom:"2%",backgroundColor:"white"}}>

{/* --------------------------first  section------------------------------------ */}

<div  class="uk-width-1-3@l uk-width-2-3@m  uk-width-2-3@s uk-padding-remove"  style={{}}>
<img class="" style={{borderRadius:"6px"}} src={card1}/>
</div>


{/* -------------------------------second section------------------------------- */}


<div  class="uk-width-2-3@l uk-width-2-3@m uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid uk-grid-collapse" style={{paddingLeft:"1%"}}>

<div  class="uk-width-2-3@l uk-width-2-3@m  uk-width-2-3@s uk-margin-remove" style={{}}>

<div class=" uk-width-1-2 " >
<p style={{}}><a>MALDIVES&nbsp;&nbsp;&nbsp;&nbsp;</a>&nbsp;
<a class="uk-divider-vertical"style={{height:"20px"}}></a>
<a>&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;Days</a></p>
</div>
<p class="secondp">If you’ve always dreamt of a vacation to the Maldives but never found the motivation,
     it’s time you checked out our Maldives tour packages that will
      make your dream vacation to the Maldives a reality.</p>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
      &nbsp;&nbsp;&nbsp;
      <span class="" style={{fontSize:"14px"}}>Based on 75 reviews</span>


 
<br/><br/>
<p>
    <span uk-tooltip="title:BEACH; pos: bottom"><img src={icon2}  style={{width:"6%",height:"6",marginLeft:"5%"}}/></span>
    <span uk-tooltip="title:BOAT; pos: bottom"><img src={icon3}  style={{width:"7%",height:"7%",marginLeft:"5%"}}/></span>
    <span uk-tooltip="title:FOOD WINE; pos: bottom"><img src={icon4}  style={{width:"4%",height:"4%",marginLeft:"5%"}}/></span>
    <span uk-tooltip="title:WATER; pos: bottom"><img src={icon5}  style={{width:"4%",height:"4%",marginLeft:"5%"}}/></span>
    <span uk-icon="social"style={{marginLeft:"5%",color:"gray"}}></span>
    <span uk-icon="heart"style={{marginLeft:"5%",color:"gray"}}></span>
</p>



</div>

{/* ------------------------------third section-------------------------------- */}

<div class="uk-width-1-3@l uk-width-2-3@m  uk-width-1-1@s  " style={{textAlign:"center"}}>

<a class="" style={{marginLeft:"",fontFamily:"sans-serif",fontSize:"18px",color:"#525354",letterSpacing:"1px",fontStyle:"italic",textAlign:"center"}}>from</a><br/>
<a  class="" style={{marginLeft:"",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a>
<p><span><img src={icon1}  style={{fontSize:"36px",color:"white",width:"80px",height:"40px",paddingLeft:""}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"13px",paddingLeft:""}}>EASY - LEISURLY</p>

<a class="uk-button uk-button-default" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%",paddingBottom:"40px"}} href="#">Explore</a>
</div>

{/* -------------------------------------------------------------- */}


</div>

</div>


{/* ---------------------end card 1----------------------------------------- */}





<div class="uk-card uk-card-default uk-card-body uk-column-1-3" style={{marginRight:"10%",marginLeft:"10%"}}>
    
    <p><img class="uk-width-1-3" style={{borderRadius:"6px"}} src={card1}/></p>

    
    <p class="uk-width-4-5">dsfghn</p>
    <p class="uk-width-1-5">fgnhjmrt</p>
        
</div>





















{/* -----------------------card section--------------------------------- */}

<div>
<div class="uk-child-width-1-3 uk-grid" uk-card uk-card-default uk-card-body  style={{border:"1px solid black",marginLeft:"8%",marginRight:"8%",marginbottom:"2%",marginTop:"2%",padding:"10px",backgroundColor:"white"}}  > 

<div class="uk-padding-remove" style={{width:"32%",padding:"1%",border:"1px solid black",borderRadius:"6px"}}>
    <img class="" style={{borderRadius:"6px"}} src={card1}/>
</div>

<div class="" style={{width:"48%",padding:"2%",borderRight:"1px solid gray"}}>
<div class="uk-child-width-1-3 uk-grid" >
<div class="" style={{borderRight:"1px solid gray"}}>MALDIVES</div>
<div class="" style={{fontWeight:"bold"}}><p>5 Days</p></div>
</div>
<br/>

<p class="secondp">If you’ve always dreamt of a vacation to the Maldives but never found the motivation,
     it’s time you checked out our Maldives tour packages that will
      make your dream vacation to the Maldives a reality.</p>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"black",fontSize:"13px"}}></i></span>
      <span ><i class='fas fa-star'style={{color:"gray",fontSize:"13px"}}></i></span>
      &nbsp;&nbsp;&nbsp;
      <span class="" style={{fontSize:"14px"}}>Based on 75 reviews</span>
</div>

<div class="  " style={{textAlign:"center"}}>

<a class="" style={{marginLeft:"",fontFamily:"sans-serif",fontSize:"18px",color:"#525354",letterSpacing:"1px",fontStyle:"italic",textAlign:"center"}}>from</a><br/>
<a  class="" style={{marginLeft:"",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a>
<p><span><img src={icon1}  style={{fontSize:"36px",color:"white",width:"80px",height:"40px",paddingLeft:""}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"13px",paddingLeft:""}}>EASY - LEISURLY</p>

<a class="uk-button uk-button-default" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%",paddingBottom:"40px"}} href="#">Explore</a>
</div>


</div>

</div><br/> 














   </div>
   )
}
}
export default DestinationWeddings;