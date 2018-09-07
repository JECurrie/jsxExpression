import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math =
  <div> 
    <h1>2 + 3 = {2 + 3}</h1>;  
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>

ReactDOM.render(math, document.getElementById('app')
);