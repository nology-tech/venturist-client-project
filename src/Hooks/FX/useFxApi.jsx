import React, { useState, useEffect } from "react";
import axios from "axios";

const useFxApi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);

  return { isLoaded, data, serverError };
};

export default useFxApi;
