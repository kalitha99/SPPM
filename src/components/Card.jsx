import React, { Component } from 'react'
import './Card.css'
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

export default class Card extends Component {
  render() {
    return (
    <div >

        <div class="container">
            <div class="row hidden-md-up">
            {/* 01 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                        <img src={image1} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Topic </h1>
                            <h5 className="card-title">Add your own data</h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            {/* 02 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                        <img src={image2} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Topic </h1>
                            <h5 className="card-title">Add your own data</h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            {/* 03 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                        <img src={image3} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Topic </h1>
                            <h5 className="card-title">Add your own data</h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>
            {/* 04 */}
            <div class="col-md-3" >
            <div className='card-container'>
            <div className="image-container">
            <div style={{marginTop:'5px'}}>
                <a href="/">
                    <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
                    <div class="card-block" ><br/>
                        <img src={image4} className="card-img-top img-fluid" style={{height: '190px',marginTop:'-23px'}}/>
                        <div className="card-body text-center">
                            <h1 className="card-title" class="text-danger" > Topic </h1>
                            <h5 className="card-title">Add your own data</h5>
                            <p className="card-text">{}</p>
                        <button className="btn btn-success" ><a href="/" style={{ textDecoration: 'none', color: 'white' }}> View more </a></button>
                        </div>
                    </div>
                    </div>
                </a>
            </div>
            </div>
            </div>
            </div>


            
            </div>
            <br/>
        </div>
    </div>
    )
  }
}
