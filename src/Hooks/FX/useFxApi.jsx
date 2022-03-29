import { useState, useEffect } from "react";
import axios from "axios";
import { getParamByParam } from "iso-country-currency";

const useFxApi = () => {
  const [status, setStatus] = useState("pending");
  const [data, setData] = useState(null);
  const [apiURL, setApiUrl] = useState("");
  const [ratesArr, setRatesArr] = useState([]);

  const getSymbol = (codeStr) => {
    let symbol;
    try {
      symbol = getParamByParam("currency", codeStr, "symbol");
    } catch (e) {
      symbol = "";
    }
    return symbol;
  };

  const dataToArray = (obj) => {
    if (obj !== null) {
      const tempArr = Object.entries(obj.rates);
      const mapped = tempArr.map((item) => {
        const obj = {
          currencyCode: item[0],
          liveRate: item[1],
          currencyName: item[0],
          currencySymbol: getSymbol(item[0]),
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
      dataToArray(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiURL]);

  return { status, data, ratesArr, getData: setApiUrl };
};

export default useFxApi;
