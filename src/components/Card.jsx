import React, { forwardRef } from 'react'
import './Card.css'

const VCard = forwardRef(({ item }, ref) => {

    return (

                    <div class="col-md-3">
                        <div className='card-container'>
                            <div className="image-container">
                                <div style={{marginTop: '5px'}}>
                                    <a href="/">
                                        <div class="card text-center" style={{backgroundColor: '#dddddd'}}>
                                            <div class="card-block"><br/>

                                                <img  className="card-img-top img-fluid"
                                                      src={`http://localhost:8000/${item?.filePath}`}
                                                     style={{height: '190px', marginTop: '-23px'}}/>
                                                <div className="card-body text-center">
                                                    <h4 className="card-title" class="text-danger"> {item.name} </h4>
                                                    <h5 className="card-title">Add your own data</h5>
                                                    <p className="card-text">{}</p>
                                                    <button className="btn btn-success"><a href="/" style={{
                                                        textDecoration: 'none',
                                                        color: 'white'
                                                    }}> View more </a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>


    )
})
export default VCard