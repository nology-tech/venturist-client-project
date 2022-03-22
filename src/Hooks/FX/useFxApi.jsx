import React, { useState, useEffect } from "react";
import axios from "axios";

const useFxApi = (url) => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response?.data;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, data, serverError };
};

export default useFxApi;
