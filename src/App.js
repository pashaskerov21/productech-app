import { useEffect, useState } from "react";
import Header from "./components/Header";
import products from './products.json';
import Product from "./components/Product";
import Basket from "./components/Basket"
import './index.scss'

function App() {

  const [money, setMoney] = useState(10000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    let totalValue = basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0)

    setTotal(totalValue);
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
      <section className="product-section">
        <div className="container">
          <h1>Məhsullar</h1>
          <div className="row">
            {products.map(product => (
              <Product total={total} money={money} basket={basket} setBasket={setBasket} key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>




      <section>
        <div className="container">
          {total > 0 ? (
            <Basket products={products} total={total} basket={basket} resetBasket={resetBasket} />
          ) : (
            <span className="empty-text">Səbətdə məhsul yoxdur</span>
          )}
        </div>
      </section>

    </>
  );
}

export default App;
