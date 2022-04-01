import React from "react";
import Login from '../Login'

function NotLoggedIn() {
  return (
    <div className="NotLoggedIn">
      <div class="container" >
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <h1 class="font-weight-light">You are not logged in.</h1>
      </div>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '1vh'}}>
        Please log in to continue.
      </div>
 
      </div>
      </div>
      
  );
}

export default NotLoggedIn;
