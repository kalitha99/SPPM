import React, { forwardRef } from 'react'
import './Card.css'
import {Button, message} from "antd";
import useRequest from "../services/RequestContext";

const VCard3 = forwardRef(({ item }, ref) => {

    return (

                    <div class="col-md-3">

                            <div className="image-container">
                                <div style={{marginTop: '5px'}}>
                                    <a href="/">
                                        <div class="card text-center" style={{backgroundColor: '#dddddd'}}>
                                            <div class="card-block"><br/>

                                                <img  className="card-img-top img-fluid"
                                                      src={`http://localhost:8000/${item?.filePath}`}
                                                     style={{height: '80px', width:'80px', marginTop: '-23px'}}/>
                                                <div className="card-body text-center">
                                                    <h4 className="card-title" class="text-danger"> {item.prod_name} </h4>
                                                    <p className="card-text">Rs. {item.sellingPrice}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        <br/>
                    </div>


    )
})
export default VCard3