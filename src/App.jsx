import React, { useState, useEffect } from 'react';

const ShopierData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            authorization: 'Bearer '
          }
        };

        const response = await fetch('https://api.shopier.com/v1/products?limit=10&page=1&sort=dateDesc', options);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Shopier Products</h2>
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShopierData;