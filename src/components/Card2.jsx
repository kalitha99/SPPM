import React, { forwardRef } from 'react'
import './Card.css'
import {Button, message} from "antd";
import useRequest from "../services/RequestContext";

const VCard2 = forwardRef(({ item }, ref) => {

    const {request} = useRequest();

    async function addToCart() {
        try {
            const Item ={
                name:item.name,
                sellingPrice:item.sellingPrice,
                filePath:item.filePath,
                quantity:1,
                email:sessionStorage.email
            }
            let result = await request.post("http://localhost:8000/cart/addToCart", Item);
            console.log(result.data)
             message.success(result.data.msg);

        } catch (error) {
            console.log(" error ", error);
            message.error(error.message);
        }
    }

    function onClick(e) {
        e.preventDefault()
        addToCart()
    }

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
                                                     style={{height: '80px', width:'80px', marginTop: '-23px'}}/>
                                                <div className="card-body text-center">
                                                    <h4 className="card-title" class="text-danger"> {item.prod_name} </h4>
                                                    <p className="card-text">Rs. {item.sellingPrice}</p>
                                                    <Button onClick={onClick} > Remove </Button>
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
export default VCard2