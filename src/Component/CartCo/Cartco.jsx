"use client";
import styles from "./cartco.module.css";
import Checkout from './Checkout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from "next/image";
import { useContext, useMemo} from "react";
import Link from "next/link";
import { AddContext } from "@/context/AddContextProvider";

const Cartco = () => { 
  const { isCart, deleteItem, decreaseItem, increaseItem } = useContext(AddContext); 
  const totalPrice = useMemo(() => {
    return isCart.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = item.quantity || 1;
      return sum + price * qty;
    }, 0);
  }, [isCart]);
  
  return (
    <div className={styles.divs}>
      {isCart.length === 0 ? (
        <div className={styles.divs_fit}>
          <div className={styles.loading}>Data loading .....</div>
          <Link href="/Food" className={styles.explore}>Explore food</Link>
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
                  <p>Price: {item.price}</p>
                </div>
              </div>
              <div className={styles.add}>
                <div className={styles.dels}>
                  <DeleteOutlineIcon className={styles.del} onClick={() => deleteItem(index)}/>
                </div>
                <div className={styles.number}>
                  <div className={styles.addIcon}>
                    <RemoveIcon className={styles.re}  onClick={() => decreaseItem(index)}/>
                  </div>
                  <div className={styles.add}>{item.quantity}</div>
                  <div className={styles.addIcon}>
                    <AddIcon className={styles.re} onClick={() => increaseItem(index)}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.checkout}>
            <Checkout total={totalPrice}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Cartco;
