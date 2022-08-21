import React, {useEffect, useState} from 'react';
import {Col, message, Row} from "antd";
import useRequest from "../services/RequestContext";
import VCard from "../components/Card";
import CurrencyFormat from "react-currency-format";
import './cart.css'
import VCard2 from "../components/Card2";

const Cart = () => {
    let sub = 0;
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [subTot, setSubTot] = useState(0);

    useEffect(() => {

        async function getProd() {
            try {
                const email = {email: sessionStorage.email}
                let result = await request.post("http://localhost:8000/cart/getCart", email);
                setProducts(result.data?.cart.cartItems)

                    console.log(subTot)


            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }
        }

        getProd()
    }, []);

    useEffect(() => {
        {products?.map((item) => (
            sub = parseInt(sub) + parseInt(item.sellingPrice)
        ))}
        setSubTot(sub)
    }, [products]);



    return (

        <div>

            <div>
                <div className="checkout">
                    <div className="checkout__left">


                        <div>
                            <Row>

                                <Col span={8}>
                                    <h4>Hello, {sessionStorage.email} </h4>
                                    <h4 className="checkout__title">Your shopping Basket</h4> <br/>
                                </Col>


                            </Row>


                            <div className="container">
                                <div className="row hidden-md-up">
                                    {products?.map((item) => (
                                        <VCard2 key={item.id} item={item}/>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="checkout__right">

                                <div className="subtotal">

                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>

                                                <p>
                                                    Subtotal Rs. {subTot} .00
                                                </p>

                                            </>
                                        )}
                                        decimalScale={2}
                                        //value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />

                                    <button ><a href="/CheckOut">Proceed to Checkout</a></button>
                                </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;
