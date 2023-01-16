"use strict";

const { validateRequiredParameters } = require("../helpers/validation");
/**
 * API Convert endpoints
 * @module Convert
 * @param {*} superclass
 */
const Convert = (superclass) =>
  class extends superclass {
    /**
     * Get Convert Trade History (USER_DATA)<br>
     *
     * GET /sapi/v1/convert/tradeFlow<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#get-convert-trade-history-user_data}
     *
     * @param {number} [startTime]
     * @param {number} [endTime]
     * @param {object} [options]
     * @param {number} [options.limit] - Default 100, Max 1000
     * @param {number} [options.recvWindow]
     *
     */
    convertTradeHistory(startTime, endTime, options = {}) {
      validateRequiredParameters({ startTime, endTime });

      return this.signRequest(
        "GET",
        "/sapi/v1/convert/tradeFlow",
        Object.assign(options, { startTime, endTime })
      );
    }
    /**
     * List All Convert Pairs (USER_DATA)<br>
     *
     * GET /sapi/v1/convert/exchangeInfo<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#list-all-convert-pairs-user_data}
     *
     * @param {string} [fromAsset]
     * @param {object} [options]
     * @param {string} [options.toAsset]
     * @param {number} [options.recvWindow]
     *
     */
    convertPairs(fromAsset, options = {}) {
      validateRequiredParameters({ fromAsset });

      return this.signRequest(
        "GET",
        "/sapi/v1/convert/exchangeInfo",
        Object.assign(options, { fromAsset })
      );
    }
    /**
     * Order status (USER_DATA)<br>
     *
     * GET /sapi/v1/convert/orderStatus<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#order-status-user_data}
     *
     * @param {string} [orderId]
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     *
     */
    convertOrderStatus(orderId, options = {}) {
      validateRequiredParameters({ orderId });

      return this.signRequest(
        "GET",
        "/sapi/v1/convert/orderStatus",
        Object.assign(options, { orderId })
      );
    }
    /**
     * Send quote request (USER_DATA)<br>
     *
     * POST /sapi/v1/convert/getQuote<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#send-quote-request-user_data}
     *
     * @param {string} [fromAsset]
     * @param {string} [toAsset]
     * @param {number} [fromAmount] - 	When specified, it is the amount you will be debited after the conversion
     * @param {object} [options]
     * @param {number} [options.toAmount] - 	When specified, it is the amount you will be debited after the conversion
     * @param {string} [options.validTime] - 10s, 30s, 1m, 2m, default 10s
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     *
     */
    convertSendQuoteRequest(fromAsset, toAsset, fromAmount, options = {}) {
      validateRequiredParameters({ fromAsset, toAsset, fromAmount });

      return this.signRequest(
        "POST",
        "/sapi/v1/convert/getQuote",
        Object.assign(options, { fromAsset, toAsset, fromAmount })
      );
    }
    /**
     * Accept Quote (TRADE)<br>
     *
     * POST /sapi/v1/convert/acceptQuote<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#accept-quote-trade}
     *
     * @param {string} [quoteId]
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     *
     */
    convertAcceptQuote(quoteId, options = {}) {
      validateRequiredParameters({ quoteId });

      return this.signRequest(
        "POST",
        "/sapi/v1/convert/acceptQuote",
        Object.assign(options, { quoteId })
      );
    }
    /**
     * Query order quantity precision per asset (USER_DATA)<br>
     *
     * GET /sapi/v1/convert/assetInfo<br>
     *
     * {@link https://binance-docs.github.io/apidocs/spot/en/#query-order-quantity-precision-per-asset-user_data}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     *
     */
    convertQuantityPrecision(options = {}) {
      return this.signRequest("GET", "/sapi/v1/convert/assetInfo", options);
    }
  };
module.exports = Convert;
