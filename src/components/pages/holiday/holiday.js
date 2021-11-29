import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import card1 from '../../../assests/holiday/img-35.jpg';
import card2 from '../../../assests/holiday/img-36.jpg';
import card3 from '../../../assests/holiday/img-37.jpg';
import card4 from '../../../assests/holiday/img-38.jpg';



import icon1 from '../../../assests/holiday/ico-level2.svg';
import icon2 from '../../../assests/holiday/ico-beach.svg';
import icon3 from '../../../assests/holiday/ico-boat.svg';
import icon4 from '../../../assests/holiday/ico-food-wine.svg';
import icon5 from '../../../assests/holiday/ico-water.svg';

import  '../holiday/holiday.css';

class holiday extends Component {

    render() {
    return(
   <div class="" style={{backgroundColor:"#f0f3f7"}}>


{/* --------------------------main section------------------------------ */}


<div class="main ">
    <p class="" style={{fontSize:"50px",letterSpacing:"4px"}}>HOLIDAY PACKAGES</p>
    <p class="" style={{fontSize:"25px",fontStyle:"italic"}}>The most detailed and modern Adventure theme!</p>
    <p class="" style={{fontSize:"17px",paddingTop:"4%"}}>HOME /DESTINATION /ASIA /THAILAND</p>
</div>


{/* -----------------------second section--------------------------------- */}


<div class="uk-child-width-1-2@l  uk-child-width-1-1@s uk-child-width-1-1@m  uk-grid" style={{paddingTop:"7%",paddingLeft:"8%", paddingRight:"8%"}}><br/><br/><br/>
   <div> <p class="" style={{fontSize:"15px",fontWeight:"700"}}>179 TRIPS MATCHES YOUR SEARCH CRITERIA</p></div>

    {/* Drop1 */}
    
    <div class="uk-width-1-6@l uk-width-1-6@m uk-width-1-2@s" style={{paddingBottom:"10px"}}>
        
        <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" ,backgroundColor:"#cfb278"}}>
        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

        <Link to="" style={{ color: "black", fontSize: "13px",letterSpacing:"1px",padding:"5%" ,backgroundColor:"#cfb278",paddingLeft:"10px"}} uk-form-custom="target: true">
                                 
        <select class="" style={{backgroundColor:"#cfb278",paddingLeft:"10px"}}>
        <option value="1">MALDIVES</option>
        <option value="2">KERALA</option>
        <option value="3">BHUTAN</option>
        <option value="4">SRILANKA</option>
        <option value="5">BALI</option>
        <option value="6">ANDAMAN & NICOBAR</option>
        </select>
        <span></span>
       

        </Link>
                                  
        </li>
        </ul>
                           
    </div>



     {/* Drop2 */}                   

    <div class="uk-width-1-6@l uk-width-1-6@m uk-width-1-2@s" >
        
        <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" ,backgroundColor:"#cfb278"}}>
        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

        <Link to="" style={{ color: "black", fontSize: "13px" ,letterSpacing:"1px",padding:"5%",backgroundColor:"#cfb278",paddingLeft:"10px"}} uk-form-custom="target: true">
                                 
        <select class="" style={{backgroundColor:"#cfb278",paddingLeft:"10px"}}>
        <option value="">PRICE RANGE</option>
        <option value="2">$1-$499</option>
        <option value="3">$500-$999</option>
        <option value="4">$1000-$1499</option>
        <option value="4">$1500-$2999</option>
        <option value="4">$3000+</option>
        </select>
        <span></span>
       

        </Link>
                                  
        </li>
        </ul>
                           
    </div>
    </div>


{/* -----------------------card section--------------------------------- */}

{/* <div>
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

<div class="" style={{width:"20%"}}>
<a class="" style={{marginLeft:"25%",fontStyle:"italic",fontSize:"18px"}}>from</a><br/>
<a  class="" style={{marginLeft:"15%",fontSize:"25px",fontWeight:"700"}}>$2749</a>
<p><span><img src={icon1}  style={{fontSize:"36px",color:"white",width:"50%",height:"50%",paddingLeft:"20%"}}/></span></p>
<p>EASY - LEISURLY</p>

<a class="uk-button uk-button-default" style={{backgroundColor:"black",fontWeight:"bold",fontSize:"14px",color:"white",height:"15%"}} href="#">Explore</a>
</div>

</div>

</div><br/> */}

{/* -------------------------------card 1------------------------------- */}


<div class=" uk-child-width-1-3@l uk-child-width-1-1@m uk-child-width-1-1@s uk-grid" style={{padding:"1%",marginLeft:"8%",marginRight:"8%",marginbottom:"2%",backgroundColor:"white"}}>

{/* --------------------------first  section------------------------------------ */}

<div  class="uk-width-1-3@l uk-width-1-1@m  uk-width-1-1@s uk-padding-remove"  style={{}}>
<img class="" style={{borderRadius:"6px"}} src={card1}/>
</div>


{/* -------------------------------second section------------------------------- */}


<div  class="uk-width-2-3@l uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid uk-grid-collapse" style={{paddingLeft:"1%"}}>

<div  class="uk-width-2-3@l uk-width-1-1@m  uk-width-1-1@s uk-margin-remove" style={{}}>

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
{/* <br/>
<hr class="uk-divider-icon uk-visible@m"></hr>
<div class="uk-grid uk-child-width-1-3 uk-visible@m">
    
<div class="uk-width-1-4"><a class="" style={{marginLeft:"",fontFamily:"sans-serif",fontSize:"25px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a></div>
<div class="uk-width-1-3"><p><span><img src={icon1}  style={{fontSize:"36px",color:"white",zoom:"80%",paddingLeft:"25px"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"16px",paddingLeft:""}}>EASY - LEISURLY</p></div>

<a class="uk-button uk-button-default uk-width-1-3" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%"}} href="#">Explore</a>

</div> */}


</div>

{/* ------------------------------third section-------------------------------- */}

<div class="uk-width-1-3@l uk-width-1-1@m  uk-width-1-1@s uk-visible@l " style={{paddingLeft:"40px",paddingRight:"20px",position:"center"}}>

<a class="" style={{marginLeft:"25%",fontFamily:"sans-serif",fontSize:"18px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"15%",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a>
<p><span><img src={icon1}  style={{fontSize:"36px",color:"white",width:"80px",height:"40px",paddingLeft:"20%"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"13px",paddingLeft:"10%"}}>EASY - LEISURLY</p>

<a class="uk-button uk-button-default" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%",paddingBottom:"20%"}} href="/Maldives">Explore</a>
</div>

{/* -------------------------------------------------------------- */}


</div>

</div>


{/* ---------------------end card 1----------------------------------------- */}






{/* -------------------------------card 2------------------------------- */}


<div class=" uk-child-width-1-3@l uk-child-width-1-1@m uk-child-width-1-1@s uk-grid" style={{padding:"1%",marginLeft:"8%",marginRight:"8%",marginbottom:"2%",backgroundColor:"white"}}>

{/* --------------------------first  section------------------------------------ */}

<div  class="uk-width-1-3@l uk-width-1-1@m  uk-width-1-1@s uk-padding-remove"  style={{}}>
<img class="" style={{borderRadius:"6px"}} src={card2}/>
</div>


{/* -------------------------------second section------------------------------- */}


<div  class="uk-width-2-3@l uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid uk-grid-collapse" style={{paddingLeft:"1%"}}>

<div  class="uk-width-2-3@l uk-width-1-1@m  uk-width-1-1@s uk-margin-remove" style={{}}>

<div class=" uk-width-1-2 " >
<p style={{}}><a>SRILANKA&nbsp;&nbsp;&nbsp;&nbsp;</a>&nbsp;
<a class="uk-divider-vertical"style={{height:"20px"}}></a>
<a>&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;Days</a></p>
</div>
<p class="secondp">SRILANKA 4 Days
If you’ve always dreamt of a vacation to the srilanka but never found the motivation,
 it’s time you checked out our srilanka tour 
packages that will make your dream vacation to the srilanka a reality.</p>
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
{/* <br/>
<hr class="uk-divider-icon uk-visible@m"></hr>
<div class="uk-grid uk-child-width-1-3 uk-visible@m">
    
<div class="uk-width-1-4"><a class="" style={{marginLeft:"",fontFamily:"sans-serif",fontSize:"25px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a></div>
<div class="uk-width-1-3"><p><span><img src={icon1}  style={{fontSize:"36px",color:"white",zoom:"80%",paddingLeft:"25px"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"16px",paddingLeft:""}}>EASY - LEISURLY</p></div>

<a class="uk-button uk-button-default uk-width-1-3" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%"}} href="#">Explore</a>

</div> */}


</div>

{/* ------------------------------third section-------------------------------- */}

<div class="uk-width-1-3@l uk-width-1-1@m  uk-width-1-1@s uk-visible@l " style={{paddingLeft:"40px",paddingRight:"20px",position:"center"}}>

<a class="" style={{marginLeft:"25%",fontFamily:"sans-serif",fontSize:"18px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"15%",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a>
<p><span><img src={icon1}  style={{fontSize:"36px",color:"white",width:"80px",height:"40px",paddingLeft:"20%"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"13px",paddingLeft:"10%"}}>EASY - LEISURLY</p>

<a class="uk-button uk-button-default" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%",paddingBottom:"20%"}} href="#">Explore</a>
</div>

{/* -------------------------------------------------------------- */}


</div>

</div>


{/* ---------------------end card 2----------------------------------------- */}






{/* -------------------------------card 3------------------------------- */}


<div class=" uk-child-width-1-3@l uk-child-width-1-1@m uk-child-width-1-1@s uk-grid" style={{padding:"1%",marginLeft:"8%",marginRight:"8%",marginbottom:"2%",backgroundColor:"white"}}>

{/* --------------------------first  section------------------------------------ */}

<div  class="uk-width-1-3@l uk-width-1-1@m  uk-width-1-1@s uk-padding-remove"  style={{}}>
<img class="" style={{borderRadius:"6px"}} src={card3}/>
</div>


{/* -------------------------------second section------------------------------- */}


<div  class="uk-width-2-3@l uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid uk-grid-collapse" style={{paddingLeft:"1%"}}>

<div  class="uk-width-2-3@l uk-width-1-1@m  uk-width-1-1@s uk-margin-remove" style={{}}>

<div class=" uk-width-1-2 " >
<p style={{}}><a>BHUTAN&nbsp;&nbsp;&nbsp;&nbsp;</a>&nbsp;
<a class="uk-divider-vertical"style={{height:"20px"}}></a>
<a>&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;Days</a></p>
</div>
<p class="secondp">If you’ve always dreamt of a vacation to the Bhutan but never found the motivation, 
it’s time you checked out our 
Bhutan tour packages that will make your dream vacation to the Bhuthan a reality</p>
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
{/* <br/>
<hr class="uk-divider-icon uk-visible@m"></hr>
<div class="uk-grid uk-child-width-1-3 uk-visible@m">
    
<div class="uk-width-1-4"><a class="" style={{marginLeft:"",fontFamily:"sans-serif",fontSize:"25px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a></div>
<div class="uk-width-1-3"><p><span><img src={icon1}  style={{fontSize:"36px",color:"white",zoom:"80%",paddingLeft:"25px"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"16px",paddingLeft:""}}>EASY - LEISURLY</p></div>

<a class="uk-button uk-button-default uk-width-1-3" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%"}} href="#">Explore</a>

</div> */}


</div>

{/* ------------------------------third section-------------------------------- */}

<div class="uk-width-1-3@l uk-width-1-1@m  uk-width-1-1@s uk-visible@l " style={{paddingLeft:"40px",paddingRight:"20px",position:"center"}}>

<a class="" style={{marginLeft:"25%",fontFamily:"sans-serif",fontSize:"18px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"15%",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a>
<p><span><img src={icon1}  style={{fontSize:"36px",color:"white",width:"80px",height:"40px",paddingLeft:"20%"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"13px",paddingLeft:"10%"}}>EASY - LEISURLY</p>

<a class="uk-button uk-button-default" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%",paddingBottom:"20%"}} href="#">Explore</a>
</div>

{/* -------------------------------------------------------------- */}


</div>

</div>


{/* ---------------------end card 3----------------------------------------- */}



{/* <div class="uk-grid">
<div class="uk-width-1-6"><a class="" style={{marginLeft:"",fontFamily:"sans-serif",fontSize:"25px",color:"#525354",letterSpacing:"1px",fontStyle:"italic"}}>from</a><br/>
<a  class="" style={{marginLeft:"",fontSize:"28px",fontWeight:"700",color:"#525354"}}>$2749</a></div>
<div class="uk-width-1-6"><p><span><img src={icon1}  style={{fontSize:"36px",color:"white",zoom:"80%",paddingLeft:"25px"}}/></span></p>
<p class="" style={{color:"#7a7b7d",fontSize:"16px",paddingLeft:""}}>EASY - LEISURLY</p></div>

<a class="uk-button uk-button-default uk-width-1-5" style={{backgroundColor:"#4d544e",fontWeight:"670",fontSize:"15px",color:"white",height:"2%"}} href="#">Explore</a>

</div> */}




   </div> 
   
   )
}
}
export default holiday;