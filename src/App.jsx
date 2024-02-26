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
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxZDNlN2ZjMDdkZjM4N2FjZTQ1ZDM4YWQzMjQxZGIyYSIsImp0aSI6IjQxN2UxZWUxMGZiZWFhYWExMzNjNTY2N2RkMmE3N2JiYmExOTA1Y2NhYjVhNzJmYjRiZDUxNWUwOTJmYmM1MzdjYzA2OWVjOTRhZmJlMWIzYzE2ZDY4YjEwMWQzODMxZjNkZjAyZWRmOWNmNzI5YjJlYmRjZGU2OWI0NTNlZmZiMDc5ZmRlNmZiOGRhMmI5NmMzMzY0Y2E4ODg4NjFiNWIiLCJpYXQiOjE3MDg4ODIxMzUsIm5iZiI6MTcwODg4MjEzNSwiZXhwIjoxODY2NjY2ODk1LCJzdWIiOiIxNzcwMTAyIiwic2NvcGVzIjpbIm9yZGVyczpyZWFkIiwib3JkZXJzOndyaXRlIiwicHJvZHVjdHM6cmVhZCIsInByb2R1Y3RzOndyaXRlIiwic2hpcHBpbmdzOnJlYWQiLCJzaGlwcGluZ3M6d3JpdGUiLCJkaXNjb3VudHM6cmVhZCIsImRpc2NvdW50czp3cml0ZSIsInBheW91dHM6cmVhZCIsInJlZnVuZHM6cmVhZCIsInJlZnVuZHM6d3JpdGUiLCJzaG9wOnJlYWQiLCJzaG9wOndyaXRlIl19.pqll_dhe0P4sXha_9m3uvEPOrvF4ZEKSrEFU46YMLUiqr6j6VNVRqX-91psLnHxT7-B-yTyjBYYGsVh0UTcjqGLgj81Ngb9yRJ2wswQ-8FnRonQI-Uh2vWECstwEUvAQz9m_sZypJJg0aBsvGZfUiLKcNAbbVf4mpP0YLIFOahtkejsBq-2Laq3I2H1el3RxaVBa2TRu77nArzaGc6opt09_8LT7UspOj5H5fgdLYIybwr45M--_jamDfXHiE5bsQEOrw0fkFjU3_VY4l0fff_oXhZPtFO3NregILEh3TE0-UnvNAd5L5n7D_MkHZQi-Pbh_9HHAqbo0_FIxYZxoPg'
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