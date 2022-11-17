import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [dataResp, setData] = useState([]);
  const [errorResp, setError] = useState(null);
  const [loading, isLoading] = useState(false);

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
          setData(response.data);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        // handle error
        setError(error);
      })
      .finally(() => isLoading(false));
  }, [url]);

  return [dataResp, errorResp, loading];
};

export default useFetch;
