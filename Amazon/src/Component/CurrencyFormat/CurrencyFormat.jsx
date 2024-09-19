import React from "react";

function CurrencyFormat({ amount }) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <div>{formattedAmount}</div>;
}

export default CurrencyFormat;
