import React from "react";
import styles from "./checkout.module.css";
const Checkout = ({total}) => {  
  const delivery = 5; 
  const tax = 0.1 * total; 
  const finalTotal = total + delivery + tax;
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
            <p>${delivery.toFixed(2)}</p>
          </div>
          <div className={styles.subtotal}>
            <p>tax</p>
            <p>${tax.toFixed(2)}</p>
          </div>
        </div>
        <div className={styles.total}>
          <p>Total</p>
          <p>${finalTotal.toFixed(2)}</p>
        </div>
        <div className={styles.proceed}>Proceed to Checkout</div>
      </div>
    </div>
  );
};

export default Checkout;
