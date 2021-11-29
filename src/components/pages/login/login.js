

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import  '../login/login.css';
import Button from '@material-ui/core/Button';


const themes = createMuiTheme({
    palette: {
      primary: {
                 main: "#4d4dff",
                 border: "5px solid"
               }
             },
    
    
  });

class Login extends Component {

    render() {
    return(

      <div>
   <div  class=" uk-align-center  " style={{paddingLeft:"20%",paddingRight:"20%"}}>
<div>
    <svg xmlns="http://www.w3.org/2000/svg"  id="account" style={{height:"25px",width:"25px",zoom:"250%",marginBottom:"2%"}}>
    <path fill="#1877F2" d="M21 22h-2v-3a3 3 0 00-3-3 3 3 0 01-2.99-2.84l-.03-.6.53-.32A2.97 2.97 0 0015 9.67V7a3 3 0 00-6 0v2.67c0 1.06.56 2.02 1.5 2.57l.52.31-.03.6A3 3 0 018 16a3 3 0 00-3 3v3H3v-3a5 5 0 015-5 1 1 0 00.85-.48A5 5 0 017 9.67V7a5 5 0 0110 0v2.67a5 5 0 01-1.85 3.85A1 1 0 0016 14a5 5 0 015 5v3z"></path></svg>
    
        <div class="s11" style={{height:"90px"}}>
            Welcome back.
            <p>Sign in to your account</p><br/>
        </div>

        <div>
        <ThemeProvider theme={themes}>
            <TextField
             id="outlined-textarea " 
             label="Email"
             placeholder="Email"
             multiline
             variant="outlined"
             fullWidth
             
            />
               </ThemeProvider>
            

            <button class="uk-button button2">Continue with email</button>
        </div>

          <div class="" style={{color:"blue"}}>
            <p class="t9">Don't have an account?&nbsp;
            <span class="uk-link-reset t3 uk-text-primary" ><a href="/signup">Create an account</a></span>
            </p>
        </div>
</div>

{/* ------------------------------------------------------------------------ */}

    <p class="uk-heading-line uk-text-center t1"><span>&nbsp; OR &nbsp;</span></p>
    
    <div>
    {/* <button class="uk-button uk-button-default  uk-width-1-1 uk-child-width-1-2 uk-grid uk-remove-padding button1" >
        
        <div class="uk-width-3-4">
        <p class="uk-margin-remove uk-align-left ">  Continue with Google </p>
        </div>
        <div class="uk-width-1-4">
        <span  class="uk-align-center "  uk-icon="google"></span>
        </div> 

       

    </button> */}
    


   
    


    <button class="uk-button uk-button-default  uk-width-1-1 uk-child-width-1-2 uk-grid uk-remove-padding button1" href="/signup">
        
        <div class="uk-width-4-5  " style={{paddingLeft:"20px"}}>
        <p class="uk-margin-remove uk-align-left " style={{fontSize:"17px"}} >Continue with Google   </p>
        </div>
        <div class="uk-width-1-5 uk-padding-remove-left"  style={{}}>
            
        <span  class="uk-align-center ">
        <svg xmlns="http://www.w3.org/2000/svg"  id="google-color" style={{height:"30px",width:"30px"}} >
        <title>Google</title>
                    <g>
                      <path fill="#4285F4" d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 01-1.8 2.71v2.26h2.92a8.78 8.78 0 002.68-6.62z"></path>
                      <path fill="#34A853" d="M12 21a8.6 8.6 0 005.96-2.18l-2.91-2.26a5.4 5.4 0 01-8.09-2.85h-3v2.33A9 9 0 0012 21z"></path>
                      <path fill="#FBBC05" d="M6.96 13.71a5.41 5.41 0 010-3.42V7.96h-3a9 9 0 000 8.08l3-2.33z"></path>
                      <path fill="#EA4335" d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 003.96 7.95l3 2.34A5.36 5.36 0 0112 6.58z"></path>
                    </g>
                  </svg>
        </span>
        </div>
    
    </button>



    <button class="uk-button uk-button-default  uk-width-1-1 uk-child-width-1-2 uk-grid uk-remove-padding button1" href="#">
        
        <div class="uk-width-4-5  " style={{paddingLeft:"20px"}}>
        <p class="uk-margin-remove uk-align-left " style={{fontSize:"17px"}} >  Continue with Facebook  </p>
        </div>
        <div class="uk-width-1-5 uk-padding-remove-left"  style={{}}>
            
        <span  class="uk-align-center ">
        <svg xmlns="http://www.w3.org/2000/svg"  id="facebook-color" style={{height:"30px",width:"30px"}} >
            <title>Facebook</title>
            <path fill="#1877F2" d="M21 12a9 9 0 10-10.4 8.9v-6.3H8.3V12h2.3v-1.98c0-2.26 1.34-3.5 3.4-3.5.98 0 2 .17 2 .17v2.22h-1.13c-1.12 0-1.46.69-1.46 1.4V12h2.5l-.4 2.6h-2.1v6.3A9 9 0 0021 12"></path>
            <path fill="#FFF" d="M15.5 14.6l.4-2.6h-2.5v-1.69c0-.71.35-1.4 1.47-1.4h1.14V6.69s-1.03-.17-2.02-.17c-2.05 0-3.4 1.24-3.4 3.5V12H8.31v2.6h2.28v6.3a9.07 9.07 0 002.82 0v-6.3h2.1z"></path>
            </svg>
        </span>
        </div>
    
    </button>

    </div>
    <br/>
    
     <div class="uk-visible@s">
     <p class="s3" style={{lineHeight:"1px"}}>By continuing, you agree to HMD Global's &nbsp;
        <span class="uk-link-reset" style={{color:"blue"}} ><a href="/#">Service Terms</a></span>  and  &nbsp;
        <span class="uk-link-reset" style={{color:"blue"}}><a href="/#">Privacy</a></span><br/> 
         <p class="uk-link-reset" style={{textAlign:"center",color:"blue",}} ><a href="/#">Policy.</a></p></p><br/> 
      
    </div>


    <div class="uk-hidden@s">
     <p class="s3" style={{lineHeight:"1px"}}>By continuing, you agree to HMD Global's &nbsp;
        <span class="uk-link-reset" style={{color:"blue"}} ><a href="/#">Service Terms</a></span>  and  &nbsp;
       
         <p class="uk-link-reset" style={{textAlign:"center",color:"blue",}} ><a href="/#">Privacy</a>&nbsp;
       <a href="/#">Policy.</a></p></p><br/> 
      
    </div>

   
  

 




 






  
  
    </div>
  
  
  
   </div>
   )
}
}
export default Login;