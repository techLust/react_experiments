import axios from "axios";
import { useEffect, useState } from "react";

const useApiCall = (path, method) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    return async () => {
      try {
        const response = await axios.request({
          method: method,
          url: process.env.REACT_APP_ENDPOINT ? +"/" + path : path,
          headers: {
            // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            "Content-Type": "application/json",
          },
          params: {
            page: 1,
            perPage: 10,
          },
          timeout: 5000,
        });

        setData(response.data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    };
  }, []);

  return [data, error];
};

export default useApiCall;
