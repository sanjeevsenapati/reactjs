import React from "react";
import ReactDOM from "react-dom";


const fname ='sanjeev';
const lname = 'senapati';
var lnumber = 9;

ReactDOM.render(
<div>
  <h1>
    Hello { fname +' '+lname }
  </h1>
  <p>
  My lucky number is {lnumber}
 </p>
</div>,
document.getElementById('root')
);
