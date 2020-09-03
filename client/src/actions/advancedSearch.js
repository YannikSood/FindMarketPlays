export const RECEIVE_TICKER = "RECEIVE_TICKER";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveTicker = (ticker) => ({
    type: "RECEIVE_TICKER",
    ticker
});

export const receiveResults = (results) => ({
    type: "RECEIVE_RESULTS",
    results
});