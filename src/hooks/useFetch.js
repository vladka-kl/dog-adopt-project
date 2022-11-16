import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        // handle success
        if (
          response &&
          response.data &&
          response.data.status === 'success'
        ) {
          setData(response.data.message);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        // handle error
        setData([]);
      });
  }, []);

  return [data];
};

export { useFetch };
