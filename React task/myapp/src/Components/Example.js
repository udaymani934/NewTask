import React from "react";
import './Example.css'
import {Container, Row, Col } from "react-bootstrap";
import Dogimg from './Images/Dog.jpeg'
// import Catimg from './Images/Cat.jp'

function Example() {
    return(
        <>
        <Container><br/><br/>
        <Row>
        <Col xs={12} sm={8}>
            <h2 className="Header-heading">SEARCH HEAR FOR CARDS</h2>
       </Col>
      </Row><br/>
      <Row className="Hearder-row">
        <Col xs={8} sm={7}>
            <input className="search-bar"  placeholder="   Search Hear...." />
       </Col>
      </Row><br/><br/>
      <Container className="Header-Card-3">
      <Row>
      <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/><br/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > <br/>
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>

          </div>
        </Col > 

      </Row>
    </Container><br/>
    <Container className="Header-Card-3">
      <Row>
      <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/><br/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > <br/>
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>

          </div>
        </Col > 

      </Row>
    </Container><br/>
    <Container className="Header-Card-3">
      <Row>
      <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/><br/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > <br/>
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>

          </div>
        </Col > 

      </Row>
    </Container><br/>
    <Container className="Header-Card-3">
      <Row>
      <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/><br/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > <br/>
        <Col xs={12} md={3} className="Header-BETA-Row1-Col1">
          <div className="container1">
            <br/>
            <img src={Dogimg} className='Dogimg'/>
            <p className="Dog-img">Dog</p>
            <p className="Dog-desc">The term “domestic dog” refers to any of several hundred breeds of dog in the world today.</p>
          </div>
        </Col > 

      </Row>
    </Container>
        </Container>
        </>
    )
}
export default Example