import React, { useState, useEffect } from "react";
import axios from "axios";

const useFxApi = (url) => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState("blank");
  const [serverError, setServerError] = useState(null);

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

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { loading, data, serverError };
};

export default useFxApi;
