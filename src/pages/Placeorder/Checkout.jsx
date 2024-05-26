import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const { clearCart } = useContext(StoreContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <div className="checkout-container">
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Your order is processing...</p>
        </div>
      ) : (
        <div className="success">
          <h2>Your order is successful!</h2>
          <Link to="/" onClick={() => clearCart()}>
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
