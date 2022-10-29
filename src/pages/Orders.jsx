import React from 'react';
import axios from 'axios';
import instanceURL from '../API/api';

import Card from '../components/Card';
import BlankPage from '../components/BlankPage';

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${instanceURL}/orders`);
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      {orders.length > 0 ? (
        <>
          <div className="d-flex align-center justify-between mb-40">
            <h1>Мои заказы</h1>
          </div>
          <div className="d-flex flex-wrap">
            {(isLoading ? [...Array(8)] : orders).map((item, index) => (
              <Card key={index} loading={isLoading} {...item} />
            ))}
          </div>
        </>
      ) : (
        <BlankPage
          title={'У вас нет заказов'}
          description={'Вы нищеброд? Оформите хотя бы один заказ.'}
          image={'img/smile-01.png'}
        />
      )}
    </div>
  );
};

export default Orders;
