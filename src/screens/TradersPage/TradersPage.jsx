import React from "react";
import "./style.css";

export const TradersPage = () => {
  return (
    <div className="traders-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo-7.png" />
          <div className="traders-data">
            <img className="line" alt="Line" src="/img/line-26.svg" />
            <div className="text-wrapper">8/25/2022</div>
            <div className="div">8/25/2022</div>
            <div className="text-wrapper-2">Admin</div>
            <div className="text-wrapper-3">Trader</div>
            <div className="text-wrapper-4">Password123</div>
            <div className="text-wrapper-5">Tan</div>
            <div className="text-wrapper-6">Danaya</div>
            <div className="text-wrapper-7">danayatan@gmail.com</div>
            <img className="img" alt="Line" src="/img/line-26.svg" />
            <div className="text-wrapper-8">8/28/2022</div>
            <div className="text-wrapper-9">8/28/2022</div>
            <div className="text-wrapper-10">Password</div>
            <div className="text-wrapper-11">Sucaldito</div>
            <div className="text-wrapper-12">James</div>
            <div className="text-wrapper-13">James@email.com</div>
            <div className="overlap-group">
              <div className="text-wrapper-14">Pending</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-15">Approved</div>
            </div>
          </div>
          <div className="all-traders">
            <img className="line-2" alt="Line" src="/img/line-26.svg" />
            <div className="text-wrapper-16">Created at</div>
            <div className="text-wrapper-17">Confirmed at</div>
            <div className="text-wrapper-18">Password</div>
            <div className="text-wrapper-19">Sign up Status</div>
            <div className="text-wrapper-20">Role</div>
            <div className="text-wrapper-21">Last Name</div>
            <div className="text-wrapper-22">First Name</div>
            <div className="text-wrapper-23">Email</div>
            <div className="text-wrapper-24">Traders</div>
            <div className="overlap-2">
              <div className="text-wrapper-25">CREATE</div>
            </div>
            <div className="ALL-PENDING-wrapper">
              <div className="ALL-PENDING">
                ALL
                <br />
                PENDING
              </div>
            </div>
            <div className="ALL-TRADERS-wrapper">
              <div className="ALL-TRADERS">
                ALL <br />
                TRADERS
              </div>
            </div>
            <img className="line-3" alt="Line" src="/img/line-25.svg" />
          </div>
          <div className="sidebar">
            <div className="overlap-3">
              <div className="rectangle" />
              <img className="logo-2" alt="Logo" src="/img/logo-1.png" />
              <div className="text-wrapper-26">LEO TRADING</div>
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="text-wrapper-27">Transactions</div>
              <div className="text-wrapper-28">Traders</div>
              <img className="line-4" alt="Line" src="/img/line-24.svg" />
            </div>
          </div>
          <div className="searchbar">
            <div className="overlap-4">
              <div className="text-wrapper-29">Search</div>
              <img className="search" alt="Search" src="/img/search-1.png" />
            </div>
            <div className="text-wrapper-30">English (AU) \ USD</div>
          </div>
          <div className="log-out">
            <div className="overlap-5">
              <div className="text-wrapper-31">Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
