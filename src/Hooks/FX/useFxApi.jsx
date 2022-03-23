import React, { useState, useEffect } from "react";
import axios from "axios";

const useFxApi = (url) => {
  const [loaded, setIsLoaded] = useState(false);
  const [data, setData] = useState("blank");
  const [serverError, setServerError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = await response?.data;
      setData(data);
      setIsLoaded(true);
    } catch (error) {
      setServerError(error);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loaded, data, serverError };
};

export default useFxApi;
