import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../offers/offers.css';
import img2 from '../../../assests/maldives/img-08.jpg';
import img3 from '../../../assests/maldives/img-09.jpg';
import img4 from '../../../assests/home/banner1.jpg';
import img5 from '../../../assests/home/banner2.jpg';
import img6 from '../../../assests/home/banner3.jpg';
import img7 from '../../../assests/home/banner4.jpg';
import img8 from '../../../assests/home/banner5.png';
import img9 from '../../../assests/home/holi1.jpg';
import logo from '../../../assests/home/favicon-16x16.png';
class offers extends Component {

    render() {
    return(
   <div>
{/* slideshow1 */}
<div class="uk-container uk-visible@m"> 
        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 450 " class=" ">
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove ">
            <ul class="uk-slideshow-items   ">
                <li>
                <div class="uk-child-width-1-1">
                <img src={img4} class=" " alt="" uk-cover/>
                </div>
                </li>
               
                <li>
                <div class="uk-child-width-1-1">
                <img src={img6} class=" " alt="" uk-cover/>
                </div>
                </li>

                <li>
                <div class="uk-child-width-1-1">
                <img src={img5} class=" " alt="" uk-cover/>
                </div>
                </li>

                <li>
                <div class="uk-child-width-1-1">
                <img src={img7} class=" " alt="" uk-cover/>
                </div>
                </li>

                <li>
                <div class="uk-child-width-1-1">
                <img src={img8} class=" " alt="" uk-cover/>
                </div>
                </li>
            </ul>
        </div>
      <br/>
      
    </div>
    </div><br/>
        {/* slideshow1 end */} 




{/* holiday package  */}

<div class="uk-margin-medium-top" >
<div class=" head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Holiday Packages </h3>
    <a class="uk-text-center "  href="/holiday" uk-icon="icon:  chevron-double-right; ratio: 2" style={{fontWeight:"700",color:"black",paddingLeft:"45%"}}>Explore</a>

</div>
<div class="uk-grid  uk-grid-match" style={{margin:"0", }}>
<div className="uk-width-2-3 uk-width-1-2@l   uk-width-1-2@m  uk-width-1-1@s">
<img src={img9} className=" imagade-rious " alt="slide1" />
</div>
<div class="uk-width-1-3 uk-width-1-2@l  uk-width-1-2@m uk-width-1-1@s       ">
  

    <div className="uk-grid uk-child-width-1-2">
    <img src={img9} className=" image-radious " alt="slide1"  />
    <img  src={img9} className=" image-radious " alt="slide1" />
    <img src={img9} className=" image-radious " alt="slide1"  />
    <img  src={img9} className=" image-radious " alt="slide1" />
    
    </div>


</div>
</div> 
</div>


{/*holiday package end */}
<br/><br/>


{/* Study Aboard  */}

<div class="uk-margin-medium-top" >
<div class=" head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Study Aboard  </h3>
    <a class="uk-text-center "  href="/" uk-icon="icon:  chevron-double-right; ratio: 2" style={{fontWeight:"700",color:"black",paddingLeft:"45%"}}>Explore</a>

</div>
<div class="uk-grid  uk-grid-match" style={{margin:"0", }}>
<div className="uk-width-2-3 uk-width-1-2@l   uk-width-1-2@m  uk-width-1-1@s">
<img src={img9} className=" imagade-rious " alt="slide1" />
</div>
<div class="uk-width-1-3 uk-width-1-2@l  uk-width-1-2@m uk-width-1-1@s       ">
  

    <div className="uk-grid uk-child-width-1-2">
    <img src={img9} className=" image-radious " alt="slide1"  />
    <img  src={img9} className=" image-radious " alt="slide1" />
    <img src={img9} className=" image-radious " alt="slide1"  />
    <img  src={img9} className=" image-radious " alt="slide1" />
    
    </div>


</div>
</div> 
</div>


{/*Study Aboard end */}
<br/><br/>

   </div>
   )
}
}
export default offers;