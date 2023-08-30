import React from "react";
import "./style.css";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="div">
        <div className="cancel-stock">
          <div className="cancel-order">
            <div className="overlap-group">
              <div className="overlap">
                <div className="text-wrapper">CANCEL</div>
              </div>
              <div className="overlap-2">
                <div className="rectangle" />
                <img className="line" alt="Line" src="/img/line-31.svg" />
                <img className="img" alt="Line" src="/img/line-31.svg" />
                <div className="text-wrapper-2">$500,000</div>
                <img className="icon-plus" alt="Icon plus" src="/img/icon-plus.png" />
                <img className="icon-minus-outline" alt="Icon minus outline" src="/img/icon-minus-outline.png" />
              </div>
              <div className="text-wrapper-3">Amount</div>
              <div className="text-wrapper-4">TSLA</div>
              <div className="text-wrapper-5">Cancel Order</div>
              <img className="icon-close-outline" alt="Icon close outline" src="/img/icon-close-outline.png" />
            </div>
          </div>
        </div>
        <div className="modal-sell-stock">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="overlap-3">
                <div className="div-wrapper">
                  <div className="text-wrapper-6">SELL</div>
                </div>
                <div className="text-wrapper-7">BUY</div>
              </div>
              <div className="overlap-4">
                <div className="text-wrapper-8">SELL</div>
              </div>
              <div className="text-wrapper-9">Amount</div>
              <div className="overlap-5">
                <div className="text-wrapper-2">$500,000</div>
                <img className="line-2" alt="Line" src="/img/line-31.svg" />
                <img className="line-3" alt="Line" src="/img/line-31.svg" />
                <img className="icon-plus-2" alt="Icon plus" src="/img/icon-plus.png" />
                <img className="icon-minus-outline-2" alt="Icon minus outline" src="/img/icon-minus-outline.png" />
              </div>
              <div className="text-wrapper-10">TSLA</div>
              <img className="icon-close-outline-2" alt="Icon close outline" src="/img/icon-close-outline.png" />
            </div>
          </div>
        </div>
        <div className="modal-buy-stock">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-9">Amount</div>
              <div className="overlap-4">
                <div className="text-wrapper-11">BUY</div>
              </div>
              <div className="overlap-5">
                <div className="text-wrapper-2">$500,000</div>
                <img className="line-2" alt="Line" src="/img/line-31.svg" />
                <img className="line-3" alt="Line" src="/img/line-31.svg" />
                <img className="icon-plus-2" alt="Icon plus" src="/img/icon-plus.png" />
                <img className="icon-minus-outline-2" alt="Icon minus outline" src="/img/icon-minus-outline.png" />
              </div>
              <div className="overlap-3">
                <div className="overlap-6">
                  <div className="text-wrapper-7">BUY</div>
                </div>
                <div className="text-wrapper-12">SELL</div>
              </div>
              <div className="text-wrapper-13">TSLA</div>
              <img className="icon-close-outline-2" alt="Icon close outline" src="/img/icon-close-outline.png" />
            </div>
          </div>
        </div>
        <div className="modal-create-trader">
          <div className="create-trader">
            <div className="overlap-group-2">
              <div className="overlap-7">
                <div className="text-wrapper-14">CREATE</div>
              </div>
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <img className="icon-close-outline-2" alt="Icon close outline" src="/img/icon-close-outline.png" />
              <div className="text-wrapper-15">Create Trader</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
