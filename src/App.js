import React, { useState } from "react";
import "./App.css";


function App() {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [remarks, setRemarks] = useState("");

  const [details, setDetails] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    let receipt = {
      date,
      amount,
      payment,
      remarks,  
  };
    setDetails([...details, receipt]);
  };
  
  const handleDelete = (e) => {
    e.preventDefault();
    setDate("");
    setAmount("");
    setPayment("");
  };
  return (
    <div className="App">
      <div className="receipt_details">Receipt Details</div>
      <div className="table_contents">
        <div className="date_container">
          <div className="container_text">Date</div>
          <input
            type="date"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              borderRadius: "4px",
              border: "1px solid ",
              width: "350px",
            }}
          />
        </div>
        <div className="payment_contents">
          <div className="container_text">Payment</div>
          <select value={payment} onChange={(e) => setPayment(e.target.value)}
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
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
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
          <button className="cancel_button" onClick={handleDelete}>
            CANCEL
          </button>
        </div>
        <div>
          <button className="submit_button" onClick={handleChange}>
            SUBMIT
          </button>
        </div>
      </div>
      <table className="receipt_list">
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment</th>
          <th>Remarks</th>
        </tr>
        {details.map((details) => (
          <tr>
            <td>{details.date}</td>
            <td>{details.amount}</td>
            <td>{details.payment}</td>
            <td>{details.remarks}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
