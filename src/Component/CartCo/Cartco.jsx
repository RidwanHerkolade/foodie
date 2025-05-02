"use client";
import styles from "./cartco.module.css";
import Checkout from './Checkout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from "next/image";
import { useContext } from "react";
import { AddContext } from "@/context/AddContextProvider";

const Cartco = () => {
  const { isCart } = useContext(AddContext); 
  return (
    <div className={styles.divs}>
      {isCart.length === 0 ? (
        <div className={styles.divs_fit}>
          <div className={styles.loading}>Data loading .....</div>
          <div className={styles.explore}>Explore food</div>
        </div>
      ) : (
        <>
          {isCart.map((item, index) => (
            <div key={index} className={styles.border}>
              <div className={styles.birder_div}>
                <div className={styles.borderImg}>
                  <Image
                    src={item.img}
                    fill
                    alt={item.name}
                    className={styles.borderImgs}
                  />
                </div>
                <div className={styles.border_content}>
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <div className={styles.add}>
                <div className={styles.dels}>
                  <DeleteOutlineIcon className={styles.del} />
                </div>
                <div className={styles.number}>
                  <div className={styles.addIcon}>
                    <RemoveIcon className={styles.re} />
                  </div>
                  <div className={styles.add}>1</div>
                  <div className={styles.addIcon}>
                    <AddIcon className={styles.re} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.checkout}>
            <Checkout />
          </div>
        </>
      )}
    </div>
  );
};

export default Cartco;
