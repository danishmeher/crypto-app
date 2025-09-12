import { createContext ,useEffect,useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allcoin, setallcoin] = useState([]);
  const [currency, setcurrency] = useState({ name: "USD", symbol: "$" });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-UMinFwQqRzmszTmWHqiPqLsY",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&include_tokens=top`,
      options
    )
      .then((res) => res.json())
      .then((res) => setallcoin(res))
      .catch((err) => console.error(err));
  };

    useEffect(()=>{
      fetchAllCoin();
    },[currency])
    
  

  const contextvalue = {
    allcoin,currency,setcurrency
  };
  return (
    <CoinContext.Provider value={contextvalue}>
      {props.children}
    </CoinContext.Provider>
  );
};
export default CoinContextProvider;
