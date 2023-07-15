
import './App.css';

function App()
{
  let colors={lime:"#00FF00",
              gray:"#808080",
              red:"#FF0000",
              blue:"#0000FF",
              orange:"#FFA500",
              black:"#000000"};
  let keys=Object.keys(colors);
  let values=Object.values(colors);
  var color1,color2,color3;
  const Handlechange1=(e) =>{
    e.preventDefault();
    const blk=document.querySelector(".block1");
    var color1=getRandomcolor();
    blk.style.background=color1;
    
    
    
  };
  const Handlechange2=(e) =>{
    e.preventDefault();
    const blk=document.querySelector(".block2");
    var color2=getRandomcolor();
    blk.style.background=color2;
   /* if(color1===color2)
    {
    document.querySelector("dis-2").innerHTML="Fixed";
    }
    */
  };
  const Handlechange3=(e) =>{
    const blk=document.querySelector(".block3");
    var color3=getRandomcolor();
    blk.style.background=color3;
   /* if(color1===color2===color3)
    {
    document.querySelector("dis-3").innerHTML="Fixed";
    }*/
  };
  
function getRandomcolor()
{
  
  let max=keys.length;
  let min=1;
  let random=Math.floor(Math.random()*(max-min)+min);
  return values[random];
}
if(color1===color2===color3)
{
  //document.getElementById("op").innerHTML="COLOR MATCHED";
}
else{
  //document.getElementById("op").innerHTML="color not matched";
}

  return (
    <>
    <div className="App">
      <header className="App-header">
        COLOR MATCHING
      </header>
      <body>
      <div className="grid-container">
          <div class="grid-item">
              <div class="block1"></div> 
              <br></br>
              <button class="btn-1" onClick={Handlechange1}>start</button>
              <br></br>
          </div>
          <div id="op" class="grid-item"></div>
          <div class="grid-item">
              <div class="block2"></div><br></br>
              <button class="btn-1" onClick={Handlechange2}>start</button>
                 
              <br></br>
              <p id="dis-2">
                
              </p>
          </div>
          <div class="grid-item"> </div>
          <div class="grid-item">
              <div class="block3"></div><br></br>
              <button class="btn-1" onClick={Handlechange3}>start</button>
              <br></br>
              <p id="dis-3">
                
              </p>
          </div>
          <div class="grid-item"></div>
      </div>
      </body>
    </div>
    </>
  );
}
export default App;
