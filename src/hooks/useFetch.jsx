import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [resp, setResp] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      axios
        .get(url)
        .then((r) => {
          if (r.status === 200) {
            setResp(r.data);
          } else {
            setError(r);
          }
        })
        .catch((e) => setError(e))
        .finally(setLoading(false));
    }
    getData();
  }, [url]);
  return [resp, error, loading];
}
