import React from 'react'
import styles from "./Cart.css"
import Checkout from './Checkout'

const Cartco = () => {
  return (
    <div className={styles.div}>
        <div className={styles.divs}>
            <div className={styles.loading}>Data loading .....</div>
            <div className={styles.explore}>explore food</div>
        </div>
        <div className={styles.checkout}>
            <Checkout/>
        </div>
    </div>
  )
}

export default Cartco