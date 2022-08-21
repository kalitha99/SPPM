import React, {useEffect, useState} from 'react';
import './checkout.css'
import {message} from "antd";
import useRequest from "../services/RequestContext";
import VCard2 from "./Card2";
import VCard3 from "./Card3";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import {Link} from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const CheckOut = () => {

    let sub = 0
    const stripe = useStripe();
    const {request} = useRequest();
    const [products, setProducts] = useState();
    const [subTot, setSubTot] = useState(0);

    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const handleChange = (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    useEffect(() => {
        {products?.map((item) => (
            sub = parseInt(sub) + parseInt(item.sellingPrice)
        ))}
        setSubTot(sub)
    }, [products]);

    useEffect(() => {
        const getClientSecret = async () => {

            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${subTot}.00`,
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [products]);

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

    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })
            setSucceeded(true)
            setError(null)
            setProcessing(false)


    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{products?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        {/*<p>{user?.email}</p>*/}
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                        <div className="container">
                            <div className="row hidden-md-up">
                                {products?.map((item) => (
                                    <VCard3 key={item.id} item={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="payment__items">

                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Order Total: {value}</h3>}
                                    decimalScale={2}
                                    value={subTot}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? "Processing": "Buy Now"}</span>
                                </button>
                            </div>


                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
