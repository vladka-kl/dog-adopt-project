// @ts-nocheck
import React, { useEffect, useState } from 'react';
import AppRoutes from './components/Route/AppRoutes';
import axios from 'axios';

function App(name, age) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        // handle success
        if (
          response &&
          response.data &&
          response.data.status === 'success'
        ) {
          console.log(response.data.message);
          setData(response.data.message);
        } else {
          setData();
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
        setData();
      });
  }, []);

  return (
    <div className='App'>{data && <AppRoutes data={data} />}</div>
  );
}

export default App;
