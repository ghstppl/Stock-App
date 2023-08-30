import React from "react";
import "./style.css";

export const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo-7.png" />
          <div className="portfolio-data">
            <img className="line" alt="Line" src="/img/line-11.svg" />
            <div className="text-wrapper">21.01194</div>
            <div className="div">$500,000</div>
            <div className="text-wrapper-2">29/08/2023</div>
            <div className="text-wrapper-3">SELL TSLA</div>
            <img className="img" alt="Line" src="/img/line-11.svg" />
            <div className="text-wrapper-4">$500,000</div>
            <div className="text-wrapper-5">21.01194</div>
            <div className="text-wrapper-6">29/08/2023</div>
            <div className="text-wrapper-7">BUY TSLA</div>
            <div className="overlap-group">
              <div className="text-wrapper-8">Cancel</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Cancel</div>
            </div>
            <div className="overlap-2">
              <div className="text-wrapper-9">Received</div>
            </div>
            <div className="overlap-group-2">
              <div className="text-wrapper-9">Received</div>
            </div>
          </div>
          <div className="my-portfolio">
            <img className="line-2" alt="Line" src="/img/line-11.svg" />
            <div className="text-wrapper-10">Asset</div>
            <div className="text-wrapper-11">Amount</div>
            <div className="text-wrapper-12">Units</div>
            <div className="text-wrapper-13">Status</div>
            <img className="line-3" alt="Line" src="/img/line-10.svg" />
            <div className="text-wrapper-14">My Portfolio</div>
          </div>
          <div className="searchbar">
            <div className="overlap-3">
              <div className="text-wrapper-15">Search</div>
              <img className="search" alt="Search" src="/img/search-1.png" />
            </div>
            <div className="text-wrapper-16">English (AU) \ USD</div>
          </div>
          <div className="sidebar">
            <div className="overlap-4">
              <div className="rectangle" />
              <img className="logo-2" alt="Logo" src="/img/logo-1.png" />
              <div className="text-wrapper-17">LEO TRADING</div>
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="text-wrapper-18">Dashboard</div>
              <div className="text-wrapper-19">Market</div>
              <div className="text-wrapper-20">Portfolio</div>
              <img className="line-4" alt="Line" src="/img/line-9.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
