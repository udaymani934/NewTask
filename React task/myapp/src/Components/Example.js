import React from 'react';
import Dogimg from '../Components/Images/Dog.jpeg';
import './Example.css'

function Example() {
  return (
    <>
<div class="container-flow bg-primary"><br/>
<h2 className='text-center text-light' >SEARCH HEAR FOR CARDS</h2><br/>
<div class='row'>
    <div class='col-lg-5'></div>
    <div class='col-lg-1 text-center'>
        
            <input placeholder="    Search hear ....." className='input-box' />
        
</div>
    </div><br/>
    <div class="row" >
    <div class="col-lg-3">    
  <div class="card">
  <img src={Dogimg} className="Dogimg"/>
    <div class="card-body">
      <h4 class="card-title">Dog</h4>
      <p class="card-text">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
  </div>
  </div>  

    </div>
    <div class="col-lg-3">
    <div class="card">
  <img src={Dogimg} className="Dogimg"/>
    <div class="card-body">
      <h4 class="card-title">Dog</h4>
      <p class="card-text">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
  </div>
  </div>  
    </div> 
    <div class="col-lg-3">
    <div class="card">
  <img src={Dogimg} className="Dogimg"/>
    <div class="card-body">
      <h4 class="card-title">Dog</h4>
      <p class="card-text">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
  </div>
  </div>  

    </div>
    <div class="col-lg-3">
    <div class="card" >
  <img src={Dogimg} className="Dogimg"/>
    <div class="card-body">
      <h4 class="card-title">Dog</h4>
      <p class="card-text">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
  </div>
  </div>  
    </div>
    </div>
  <br/>  <br/><br/>  <br/><br/>
  </div> 

    </>
  )
}
export default Example;