import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  '../Events/Events';

class Events extends Component {

    render() {
    return( 
   <div>
<div class="uk-child-width-1-2  uk-grid">



      <div class="uk-width-1-2 uk-flex-last">

      <ul id="component-tab-right" class="uk-switcher switcher-container">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
<div class="uk-child-width-1-2 uk-grid">

<div>

<button class="uk-button uk-button-default uk-width-1-3"><a href="#">Active</a></button>
</div>
  <div>
                <p class="uk-tab-right  " uk-tab="connect: .switcher-container; animation: uk-animation-fade" style={{display:"inline"}}>
                    <a><button class="uk-button uk-button-default"><a href="#">Active</a></button></a>
                    <a><button class="uk-button uk-button-default"><a href="#">Active</a></button></a>
                   
                </p>
                </div>


                

                </div>
                <ul id="component-tab-right" class="uk-switcher switcher-container">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>

            </div>
            
            
      <div class="uk-width-1-2">
                <ul id="component-tab-right" class="uk-switcher switcher-container">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>

                <ul id="component-tab-right" class="uk-switcher switcher-container">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
            </div>

           


            </div>
<br/><br/><br/><br/><br/>




     <div class="uk-child-width-1-2  uk-grid uk-padding" >
     
     <div class="uk-card  uk-card-body uk-width-1-2@m">
      <span uk-icon="icon: camera; ratio: 2"></span><br/><br/>
      <p class=" " style={{fontSize:"20px",color:"black",fontWeight:"700"}}>Cameras</p>
      <p style={{fontSize:"17px",color:"black",fontWeight:"500"}}>Capture your world on the 48MP Quad<br/>
      camera and 16MP front camera.</p>
      </div>

      <div class="uk-card  uk-card-body uk-width-1-2@m">
      <span uk-icon="icon: camera; ratio: 2"></span><br/><br/>
      <p style={{fontSize:"20px",color:"black",fontWeight:"700"}}>Display</p>
       <p style={{fontSize:"17px",color:"black",fontWeight:"500"}}>See the whole picture with 6.39” HD+<br/> 
      punch hole display.</p>
      </div>

       <div class="uk-card  uk-card-body uk-width-1-2@m">
       <span uk-icon="icon: camera; ratio: 2"></span><br/><br/>
       <p style={{fontSize:"20px",color:"black",fontWeight:"700"}}>Battery</p>
       <p style={{fontSize:"17px",color:"black",fontWeight:"500"}}>Stay out with 2-day battery1 and AI-<br/> 
      assisted Adaptive Battery technology.</p>
      </div>

      <div class="uk-card  uk-card-body uk-width-1-2@m">
      <span uk-icon="icon: camera; ratio: 2"></span><br/><br/>
       <p style={{fontSize:"20px",color:"black",fontWeight:"700"}}> Mobile platform</p>
       <p style={{fontSize:"17px",color:"black",fontWeight:"500"}}>Choose smart with the Qualcomm®<br/> 
      Snapdragon™ 662 Mobile Platform.</p>
      </div>

    </div>




    <br/><br/>


            
   </div>
   )
}
}
export default Events;