import React from "react";
import "./style.css";

export const MarketPage = () => {
  return (
    <div className="market-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo-7.png" />
          <div className="watchlist-data">
            <div className="overlap-group">
              <div className="div-wrapper">
                <div className="text-wrapper">B</div>
              </div>
              <div className="div">117.69</div>
            </div>
            <div className="text-wrapper-2">Tesla Motors, Inc.</div>
            <div className="text-wrapper-3">TSLA</div>
            <div className="text-wrapper-4">3.11</div>
            <div className="text-wrapper-5">(2.76%)</div>
            <div className="overlap-group-2">
              <div className="div-wrapper">
                <div className="text-wrapper">S</div>
              </div>
              <div className="div">117.69</div>
            </div>
            <img className="line" alt="Line" src="/img/line-16.svg" />
            <img className="polygon" alt="Polygon" src="/img/polygon.svg" />
          </div>
          <div className="my-watchlist">
            <img className="img" alt="Line" src="/img/line-16.svg" />
            <div className="text-wrapper-6">Markets</div>
            <div className="text-wrapper-7">Change 1D</div>
            <div className="text-wrapper-8">Buy</div>
            <div className="text-wrapper-9">Sell</div>
            <div className="text-wrapper-10">My Watchlist</div>
            <img className="line-2" alt="Line" src="/img/line-15.svg" />
          </div>
          <div className="sidebar">
            <div className="overlap-2">
              <div className="rectangle" />
              <img className="logo-2" alt="Logo" src="/img/logo-1.png" />
              <div className="text-wrapper-11">LEO TRADING</div>
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="text-wrapper-12">Dashboard</div>
              <div className="text-wrapper-13">Market</div>
              <div className="text-wrapper-14">Portfolio</div>
              <img className="line-3" alt="Line" src="/img/line-14.svg" />
            </div>
          </div>
          <div className="searchbar">
            <div className="overlap-3">
              <div className="text-wrapper-15">Search</div>
              <img className="search" alt="Search" src="/img/search-1.png" />
            </div>
            <div className="text-wrapper-16">English (AU) \ USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};
