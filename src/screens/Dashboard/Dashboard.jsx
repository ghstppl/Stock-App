import React from "react";
import "./style.css";

export default function Dashboard () {
  return (
    <div className="dashboard">
      <div className="div">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo-7.png" />
          <div className="cash-wallet">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper">Settled Cash</div>
              <div className="text-wrapper-2">Market Value</div>
              <div className="text-wrapper-3">Buying Power</div>
              <div className="text-wrapper-4">Welcome back, James!</div>
              <div className="text-wrapper-5">$00.00</div>
              <div className="text-wrapper-6">$00.00</div>
              <div className="text-wrapper-7">$00.00</div>
              <div className="text-wrapper-8">$00.00</div>
              <img className="line" alt="Line" src="/img/line-8.svg" />
              <img className="img" alt="Line" src="/img/line-7.svg" />
              <img className="line-2" alt="Line" src="/img/line-6.svg" />
            </div>
          </div>
          <div className="search-bar">
            <div className="overlap-2">
              <div className="text-wrapper-9">Search</div>
              <img className="search" alt="Search" src="/img/search-1.png" />
            </div>
            <div className="text-wrapper-10">English (AU) \ USD</div>
          </div>
        </div>
        <div className="sidebar">
          <div className="overlap-3">
            <div className="rectangle-2" />
            <img className="logo-2" alt="Logo" src="/img/logo-1.png" />
            <div className="text-wrapper-11">LEO TRADING</div>
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper-12">Dashboard</div>
            <div className="text-wrapper-13">Market</div>
            <div className="text-wrapper-14">Portfolio</div>
            <img className="line-3" alt="Line" src="/img/line-5.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
