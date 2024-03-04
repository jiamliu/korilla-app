import React from 'react';
import './App.css'; 
import { receipts } from './data'; 
import Receipt from './Receipt'; 

function App() {
  return (
    <div className="App">
      {receipts.map(receipt => (
        !receipt.paid && <Receipt key={receipt.id} receipt={receipt} />
      ))}
    </div>
  );
}

export default App;