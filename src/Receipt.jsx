import React from 'react';

function Receipt({ receipt }) {
  return (
    <div className="receipt">
      <h2>{receipt.person}</h2>
      <div className="order">
        <p>Main: {receipt.order.main}</p>
        <p>Protein: {receipt.order.protein}</p>
        <p>Rice: {receipt.order.rice}</p>
        <p>Sauce: {receipt.order.sauce}</p>
        <p>Drink: {receipt.order.drink}</p>
        <p>Cost: ${receipt.order.cost}</p>
      </div>
    </div>
  );
}

export default Receipt;
