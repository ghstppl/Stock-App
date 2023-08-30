import React from "react";
import "./style.css";

export const TransactionsPage = () => {
  return (
    <div className="transactions-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo-7.png" />
          <div className="transactions-data">
            <img className="line" alt="Line" src="/img/line-21.svg" />
            <div className="text-wrapper">21.01194</div>
            <div className="div">$500,000</div>
            <div className="text-wrapper-2">29/08/2023</div>
            <div className="text-wrapper-3">SELL TSLA</div>
            <img className="img" alt="Line" src="/img/line-21.svg" />
            <div className="text-wrapper-4">21.01194</div>
            <div className="text-wrapper-5">$500,000</div>
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
            <div className="overlap-3">
              <div className="text-wrapper-9">Received</div>
            </div>
          </div>
          <div className="transactions">
            <img className="line-2" alt="Line" src="/img/line-21.svg" />
            <div className="text-wrapper-10">Asset</div>
            <div className="text-wrapper-11">Amount</div>
            <div className="text-wrapper-12">Units</div>
            <div className="text-wrapper-13">Status</div>
            <img className="line-3" alt="Line" src="/img/line-20.svg" />
            <div className="text-wrapper-14">Transactions</div>
          </div>
          <div className="side-bar">
            <div className="overlap-4">
              <div className="rectangle" />
              <img className="logo-2" alt="Logo" src="/img/logo-1.png" />
              <div className="text-wrapper-15">LEO TRADING</div>
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="text-wrapper-16">Transactions</div>
              <div className="text-wrapper-17">Traders</div>
              <img className="line-4" alt="Line" src="/img/line-19.svg" />
            </div>
          </div>
          <div className="group">
            <div className="overlap-5">
              <div className="text-wrapper-18">Search</div>
              <img className="search" alt="Search" src="/img/search-1.png" />
            </div>
            <div className="text-wrapper-19">English (AU) \ USD</div>
          </div>
          <div className="log-out">
            <div className="overlap-6">
              <div className="text-wrapper-20">Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
