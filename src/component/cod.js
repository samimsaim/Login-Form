import React, {useState} from 'react';


const Page = () => {
  window.alert("hellow")
}

function Cod(){
  return (

      <div className="welcome">
      <label class="container">Send Cod via SMS +93 74*****68
       <input type="radio" name="check" />
       <span class="checkmark"></span>
     </label>
     <label class="container">Send Cod via Email samim*****com
      <input type="radio" name="check" />
      <span class="checkmark"></span>
    </label><br />
    <button onClick={Page}> OK </button><br />
    <br />
    <label class="container">enter Cod pleas
    <br />
     <input type="text" name="check" />

    </label>

       &nbsp;
      <button onClick={Page}> Submit </button>
      </div>

  );
}
export default Cod;
