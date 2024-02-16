import { useEffect, useState } from "react";

import React from "react";

export default function useCurrencyinfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
    ).then((res)=> res.json()).then((res)=> setData(res[currency]))
  }, [currency]);
  return data
 
}
