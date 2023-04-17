import React from 'react'

function Product({ product, basket, setBasket, total, money }) {

    const basketItem = basket.find(item => item.id === product.id);

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);

        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (

        <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
            <div className="product-card">
                <div className='product-image'>
                    <img src={product.image} alt="card-image" />
                </div>
                <span className='title'>{product.title}</span>
                <span className='price'>{product.price} ₼</span>
                <div className="amount-row">
                    <button disabled={!basketItem} onClick={removeBasket}>-</button>
                    <span>{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total + product.price > money} onClick={addBasket}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product
