import { useState, useEffect } from "react";
import axios from "axios";
import { getParamByParam } from "iso-country-currency";

const useFxApi = () => {
  const [loaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const [apiURL, setApiUrl] = useState("");
  const [ratesArr, setRatesArr] = useState([]);

  const dataToArray = (obj) => {
    if (obj !== null) {
      const tempArr = Object.entries(obj.rates);
      const mapped = tempArr.map((item) => {
        const obj = {
          currencyCode: item[0],
          liveRate: item[1],
          currencyName: item[0],
          currencySymbol: "",
        };
        return obj;
      });
      setRatesArr(mapped);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      const data = await response?.data;
      setData(data);
      setIsLoaded(true);
      dataToArray(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiURL]);

  return { loaded, data, status, ratesArr, getData: setApiUrl };
};

export default useFxApi;
