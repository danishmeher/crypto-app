import React, { useContext, useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { CoinContext } from "./coincontext";
import Linechart from "./linechart";
import "./coin.css";

const Coin = () => {
  const { coinid } = useParams();
  const [coinData, setcoinData] = useState();
  const [historicalData, sethistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchcoinData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setcoinData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchHistorical = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name}&days=10`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      sethistoricalData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      await fetchcoinData();
      await fetchHistorical();
    };
    fetchdata();
  }, [currency]);

  if ((coinData, historicalData)) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </p>
        </div>
        <div className="chart">
          <Linechart historicalData={historicalData} />
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{coinData?.market_data?.current_price?.[currency.name.toLowerCase()]}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
             {currency.symbol}{coinData.market_data.market_cap[currency.name.toLowerCase()].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24h High</li>
            <li>
            {currency.symbol}{coinData.market_data.high_24h[currency.name.toLowerCase()].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24h Low</li>
            <li>
            {currency.symbol}{coinData.market_data.low_24h[currency.name.toLowerCase()].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
