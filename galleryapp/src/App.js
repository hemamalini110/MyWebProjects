import React from 'react';
import './App.css';

function App() 
{
  
  const Handleover1=(event)=>{
    event.target.style.border="rgb(241, 21, 87) 3px solid";
    const description=document.querySelector("#des");
    description.innerHTML="The Persistence of Memory is a 1931 painting by artist Salvador Dali, and one of his most recognizable works. \
    since 1934 the painting has been in the collection of the(MoMA) in New York City, which received it from an anonymous donor.  ";
  }
  const Handleout1=(event)=>{
    event.target.style.border="rgb(241, 21, 87) 3px hidden";
    var description=document.querySelector("#des");
    description.innerHTML="Art is a way to express our emotions and feelings";
  }
  const Handleover2=(event)=>{
    event.target.style.border="rgb(241, 21, 87) 3px solid";
    const description=document.querySelector("#des");
    description.innerHTML="The Starry Night  is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted \
    in June 1889, It has been in the permanent collection of the (MoMA) in New York City since 1941, acquired through the Lillie P. Bliss Bequest. ";
  }
  const Handleout2=(event)=>{
    event.target.style.border="black 3px hidden";
    const description=document.querySelector("#des");
    description.innerHTML="Art is a way to express our emotions and feelings";
  }
  const Handleover3=(event)=>{
    event.target.style.border="rgb(241, 21, 87) 3px solid";
    const description=document.querySelector("#des");
    description.innerHTML="The School of Athens is a fresco by the Italian Renaissance artist Raphael. The fresco was painted between 1509 and 1511\
    The Italian artists Leonardo da Vinci and Michelangelo are also featured in the painting";
  }
  const Handleout3=(event)=>{
    event.target.style.border="black 3px hidden";
    const description=document.querySelector("#des");
    description.innerHTML="Art is a way to express our emotions and feelings";
  }
    
  

  return (
    <>
    
    <div className="App">
      <body>
     <header>
        <img src="./images/ArtLogo.jpg" alt="ArtLogo" class="logo"></img>
       <h2 style={{padding:"10px"}}>ArtGallery</h2> 
    </header>
    <nav></nav>
    <main>
        <div class="container">
        <p id="des">Art is a way to express our emotions and feelings</p>
            <img1>
            <img src="./images/image1.jpg" alt=" The Persistence of Memory" class="art1" onMouseOver={Handleover1} onMouseOut={Handleout1}></img>
            </img1>
            <img2><img src="./images/image2.jpg" alt=" The Starry Night" class="art2" onMouseOver={Handleover2} onMouseOut={Handleout2}></img>
            </img2>
            <img3><img src="./images/image3.jpg" alt=" The School of athens" class="art3" onMouseOver={Handleover3} onMouseOut={Handleout3}></img>
            </img3>
        </div>
    </main>
    <aside></aside>
    <footer></footer>
    </body>
    </div>
    </>
  );
}

export default App;
