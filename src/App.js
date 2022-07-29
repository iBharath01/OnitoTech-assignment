import React  from "react";
import "./App.css";


function App() {
 
  return (
    <div className="App">
      <div className="receipt_details">Receipt Details</div>
      <div className="table_contents">
        <div className="date_container">
          <div className="container_text">Date</div>
          <input
            type="date"
            placeholder="Enter Date"
            style={{
              borderRadius: "4px",
              border: "1px solid gray",
              width: "200px",
            }}
          />
        </div>
        <div className="amount_contents">
          <div className="container_text">Amount</div>
          <input
            type="number"
            placeholder="Enter Amount(in INR)"
            style={{
              borderRadius: "4px",
              border: "1px solid ",
              width: "350px",
            }}
          />
        </div>
        <div className="payment_contents">
          <div className="container_text">Payment</div>
          <select
            style={{
              borderRadius: "4px",
              border: "gray 1px solid",
              width: "200px",
            }}
          >
            <option >Cash</option>
            <option >Cheque</option>
            <option >Online</option>
          </select>
        </div>
        <div className="remarks_contents">
          <div className="remarks">Remarks</div>
          <input
            type="text"
            placeholder="Enter Remarks"
            style={{
              borderRadius: "4px",
              border: "1px solid gray",
              width: "350px",
            }}
          />
        </div>
      </div>
      <div className="buttons">
        <div>
          <button className="cancel_button">
            CANCEL
          </button>
        </div>
        <div>
          <button className="submit_button">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
