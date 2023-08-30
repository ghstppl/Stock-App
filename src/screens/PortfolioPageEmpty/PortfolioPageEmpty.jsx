import React from "react";
import "./style.css";

export const PortfolioPageEmpty = () => {
  return (
    <div className="portfolio-page-empty">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo-7.png" />
          <div className="empty-portfolio">
            <div className="text-wrapper">My Portfolio</div>
            <div className="div">Your Portfolio is empty</div>
            <p className="p">Start exploring investment opportunities by checking the market</p>
          </div>
          <div className="sidebar">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="img" alt="Logo" src="/img/logo-1.png" />
              <div className="text-wrapper-2">LEO TRADING</div>
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="text-wrapper-3">Dashboard</div>
              <div className="text-wrapper-4">Market</div>
              <div className="text-wrapper-5">Portfolio</div>
              <img className="line" alt="Line" src="/img/line-30.svg" />
            </div>
          </div>
          <div className="search-bar">
            <div className="overlap-2">
              <div className="text-wrapper-6">Search</div>
              <img className="search" alt="Search" src="/img/search-1.png" />
            </div>
            <div className="text-wrapper-7">English (AU) \ USD</div>
            <img className="line-2" alt="Line" src="/img/line-29.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
