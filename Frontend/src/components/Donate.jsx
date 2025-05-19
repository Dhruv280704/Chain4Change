import React, { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setDisableBtn(true);
      const res = await axios.post(
        "http://localhost:4000/api/v1/checkout",
        {
          name,
          email,
          message,
          amount,
          currency: "USD", // Required by backend/Plisio
          order_name: name || "Donation", // Required by backend/Plisio
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      // If Plisio returns invoice URL in a different property, adjust accordingly
      if (res.data?.result?.url) {
        window.location.href = res.data.result.url;
      } else if (res.data?.data?.invoice_url) {
        window.location.href = res.data.data.invoice_url;
      } else {
        alert("Invoice URL not found in response.");
      }
    } catch (error) {
      setDisableBtn(false);
      console.error(error);
      alert(
        error?.response?.data?.message ||
          "Something went wrong while creating the invoice."
      );
    }
  };

  return (
    <section className="donate">
      <form onSubmit={handleCheckout}>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Show your love for Poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (USD)"
            required
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `$${amount}` : "$0"}
        </button>
      </form>
    </section>
  );
};

export default Donate;