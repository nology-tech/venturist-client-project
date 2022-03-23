import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFxApi = () => {
  const firstUpdate = useRef(true);
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [apiUrl, seApiUrl] = useState("";)

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
    if(!firstUpdate.current){
      fetchData()
    }
    firstUpdate.current = false;
    
    fetchData();
  }, [apiUrl]);

  return { loading, data, serverError, callApi: seApiUrl };
};

export default useFxApi;
