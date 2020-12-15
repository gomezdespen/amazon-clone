import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useStripe, useElements, } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";
import axios from './axios';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] =useState(false);
    const [processing, setProcessing] =useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => { 
        // 
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}` 
            });
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {

        // fanct stripe magic
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation

                setSucceeded(true);
                setError(null);
                setProcessing(false);
                
                history.replace('/orders')
      })

    }


    const handleChange = event => {
        //listen for changes in the cardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return ( 
      <div className = "payment" >
        <div className = "payment_container">

          <h1>
            Checkout (<Link to = "/checkout"> { basket?.length} items </Link>)
          </h1>

            {/* Payment seciton--delivery address */ }

            <div className = "payment_section" >
              <div className = "payment_title" >
                <h3> Delivery Address </h3> 
              </div>

                <div className = "payment_address">
                    <p> {user?.email} </p> 
                    <p> 123 React lane </p> 
                    <p> Lodi, New Jersey </p> 
                </div>

            </div> 
            {/* Payment seciton--review items */ }

            <div className = "payment_section" >

            <div className = "payment_title" >
                <h3> Review Items and delivery </h3> 
            </div> 

            <div className = "payment_items"> 

                {basket.map(item => ( 
                    <CheckoutProduct 
                        id ={item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                 ))
                } 
            </div> 
        </div>

            {/* Payment seciton--payment method */ }

        <div className = "payment_section" >
            <div className = "payment_title">
                <h3> Payment method </h3> 
            </div> 

        <div className = "payment_details" > 
        {/* stripe magic */ } 
            <form onSubmit = { handleSubmit } >
                <CardElement onChange = {handleChange}/>
                    <div className="payment_priceContainer">
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>order total : {value}</h3>  
                            )}   
                            decimalScale={2}
                            value={getBasketTotal(basket)} 
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled={ processing || disabled || succeeded }>
                                <span>{processing ? <p>Processing</p> :"Buy Now"}</span>
                        </button>
                    </div> 

                    {/* errors */}
                    {error & <div>{error}</div>}
                </form> 
            </div> 
        </div>

      </div> 
    </div>
    );
  }    

export default Payment;