import { useState } from 'react';
import './App.css';
//import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  var count=0;
  let [counter,SetCounter]=useState(count)
  let handleincrement=()=>
  {
    document.querySelector("#status").innerHTML=""
    SetCounter(counter+1);
    
  }
  let handledecrement=(event)=>
  {
    try{
    if(counter<=0)
    {
      document.querySelector("#status").innerHTML="Reach the limit!!!"
        }
    else if(counter>=1){
      SetCounter(counter-1);
      event.target.disabled=false;
    }
    }
    catch(error){

    }
  }
return(
    <div className="App">
      <p class="title">Counter App</p><br></br>
      <p class="count">{counter}</p><br></br>
      <div class="container">
        <button class="increment" onClick={handleincrement}>Increment</button> 
        <button  class="decrement" onClick={handledecrement}>Decrement</button>
      </div>
      <br></br>
      <p id="status"></p>
    </div>
);
  
}

export default App;
