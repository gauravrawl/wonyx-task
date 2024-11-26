
// import toast from "react-hot-toast";
import "../styles/payments.css";
import { useState } from "react";

const PaymentDetails = () => {

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [err, setErr] = useState("");
  const[numErr, setNumErr] = useState('')
//Email verify
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setErr("Invalid email address");
      // toast.error('invalid')
    } else {
      setErr("");
    }
  };


//Phone no. check 
  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      setNumErr("Please enter a valid number");
      return;
    }
    if(value.length > 10){
      setNumErr('Only 10 digits allowed')
      return
    }
    setNumber(value);
    setNumErr("");
  };


  const bankDetails = [
    { name: "Bank name", value: "ABCD BANK" },
    { name: "IFS code", value: "ABCD000XXXX" },
    { name: "Swift code", value: "ABCDUSBBXXX" },
    { name: "Account #", value: "3747489 2300011" },
  ];

  return (
    <div className="payment-footer-body">
<div className="payment-details-container">
      <div className="payment-details">
        <h4>Payment details</h4>
        <textarea
          value="Please pay within 15 days of receiving this invoice."
        />
      </div>

      <div className="bank-details">
    {bankDetails?.map((detail, index) => (
      <div className="bank-data" key={index}>
        <h4>{detail.name}</h4>
        <input type="text" value={detail.value}/>
      </div>
    ))}
    <p className="add-new-bank">+ Add New Bank Details</p>
  </div>

    </div>
      <div className="business-details">
        <h4>Thanks for the business.</h4>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Whom this is to" onChange={handleEmailChange} />
            <p style={{color: 'red', fontSize: '10px'}}>{email.length >= 1 && err}</p>
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Whom this is to" onChange={handleNumberChange} />
            <p style={{color: 'red', fontSize: '10px'}}>{number.length >= 1 && numErr}</p>
           
          </div>
        </div>

    </div>
    
  );
};

export default PaymentDetails;
