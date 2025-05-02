import React from "react";
import styles from "./checkout.module.css";
const Checkout = () => {  
  return (
    <div className={styles.divs}>
      <div className={styles.checkout}>
        <div className={styles.check}>
          <h1>Cart total</h1>
          <div className={styles.subtotal}>
            <p>sub-total</p>
            <p></p>
          </div>
          <div className={styles.subtotal}>
            <p>delivery</p>
            <p></p>
          </div>
          <div className={styles.subtotal}>
            <p>tax</p>
            <p></p>
          </div>
        </div>
        <div className={styles.total}>
          <p>Total</p>
          <p></p>
        </div>
        <div className={styles.proceed}>Proceed to Checkout</div>
      </div>
    </div>
  );
};

export default Checkout;
