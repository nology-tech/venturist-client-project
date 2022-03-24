import React, { useState, useEffect } from "react";
import axios from "axios";

const useFxApi = () => {
  const [loaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const [apiURL, setApiUrl] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
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
  }, [apiURL]);

  return { loaded, data, status, getData: setApiUrl };
};

export default useFxApi;
