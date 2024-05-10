import React from 'react'
import { Link } from 'react-router-dom'


const CheckoutSteps = ({delivery,confirmOrder,payment}) => {
  return (
  <div className='checkout-progress d-flex justify-content-center mt-5'>

    {/* Delivery order */}
    {delivery ? (
        //If delivery is true,create a link to the "delivery" route with active styling
        <Link to ="shipping" className='float-right'>
            <div className='triangle2-active'></div>
            <div className='step active-step'>Address</div>
            <div className='triangle-active'></div>

        </Link>
    ) : (

        <Link to ="#!" disabled>
        <div className='triangle2-aincomplete'></div>
        <div className='step incomplete'>Address</div>
        <div className='triangle-incomplete'></div>

    </Link>
    )}

    {/* Confirm order */}
{confirmOrder ? (
        <Link to ="/order/confirm" className='float-right'>
            <div className='triangle2-active'></div>
            <div className='step active-step'>Confirm Order</div>
            <div className='triangle-active'></div>

        </Link>
    ) : (

        <Link to ="#!" disabled>
        <div className='triangle2-aincomplete'></div>
        <div className='step incomplete'>Confirm Order</div>
        <div className='triangle-incomplete'></div>

    </Link>
    )}

    {/* PAYMENT */}
    {payment ? (
        <Link to ="s/payment" className='float-right'>
            <div className='triangle2-active'></div>
            <div className='step active-step'>Payment</div>
            <div className='triangle-active'></div>

        </Link>
    ) : (

        <Link to ="#!" disabled>
        <div className='triangle2-aincomplete'></div>
        <div className='step incomplete'>Payment</div>
        <div className='triangle-incomplete'></div>

    </Link>
        )}
    

    


  </div> 
  );
}

export default CheckoutSteps
