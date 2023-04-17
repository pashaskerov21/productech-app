import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, products, total, resetBasket }) {
    return (
        <div className='basket-container'>
            <div className="basket-products">
                {basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                ))}
            </div>
            <div className='basket-result'>
                <span>Cəmi: {total.toFixed(2)}₼</span>
            </div>
            <button className='reset-button' onClick={resetBasket}>Səbəti sıfırla</button>
        </div>
    )
}

export default Basket
