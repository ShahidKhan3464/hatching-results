import React from 'react'
import './style.css'

const TotalCart = () => {

    return (
        <div className='Total-cart'>
            <div className="total-cart-header">
                <h6>Cart Total</h6>
            </div>
            <div className="total-cart-body">
                <div className="total-cart-item">
                    <p className='item'>Advance English for Career Development</p>
                    <p className='price'>$120</p>
                </div>
                <div className="total-cart-item">
                    <p className='item'>Advance English for Career Development</p>
                    <p className='price'>$120</p>
                </div>
            </div>
            <div className="total-cart-footer">
                <h6>Total</h6>
                <p>$175</p>
            </div>
        </div>
    )
}

export default TotalCart