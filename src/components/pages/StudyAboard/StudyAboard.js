import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../assests/home/ico-bungee.svg';
import  '../StudyAboard/StudyAboard';

class StudyAboard extends Component {

    render() {
    return(
   <div>

<div class="uk-margin uk-width-1-1 uk-child-width-1-2 uk-grid" style={{marginLeft:"10%"}}>
        <div class="uk-width-1-2">
        <input class="uk-input" type="text" placeholder="Login"/><br/><br/>
            <div class="" style={{backgroundColor:""}}>
            <p>Username Or Email</p>
            <input class="uk-input" type="text" />
            <p>Password</p>
            <input class="uk-input" type="text" /><br/><br/><br/>
          <button class="uk-button uk-button-default uk-width-1-1  btn8">Login</button>
          </div>
          
        </div>

        <div  class="uk-width-1-2">
        <input class="uk-input" type="text" placeholder="Resister"/><br/><br/>
        <p>Name</p>
          <input class="uk-input" type="text" />
          <p>Username</p>
          <input class="uk-input" type="text" />
          <p>Email</p>
          <input class="uk-input" type="text" />
          <p>Password</p>
          <input class="uk-input" type="text" /><br/><br/><br/>
          <button class="uk-button uk-button-default uk-width-1-1  btn8">Register</button>
          
          
          
        </div>

    </div>


   </div>
   )
}
}
export default StudyAboard;