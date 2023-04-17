import React from 'react'

function BasketItem({ item, product }) {
    return (
        <div className='row'>
            <div className="col-2">
                <div className="row-image">
                    <img src={product.image} alt="product-image" />
                </div>
            </div>
            <div className="col-7">
                <span className='row-title'>{product.title}</span>
            </div>
            <div className="col-3">
                <span className='row-price'>{product.price}</span>
            </div>
        </div>
    )
}

export default BasketItem
