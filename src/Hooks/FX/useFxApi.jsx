import React, { useState, useEffect } from "react";
import axios from "axios";

const useFxApi = (url) => {
  const [loaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState("pending");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = await response?.data;
      setData(data);
      setIsLoaded(true);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loaded, data, status };
};

export default useFxApi;
