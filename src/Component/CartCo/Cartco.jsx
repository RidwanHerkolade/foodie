import styles from "./cartco.module.css"
import Checkout from './Checkout'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from "next/image"
const Cartco = () => {
  return (
    <div className={styles.divs}>
    <div className={styles.div}>
        <div className={styles.border}>
          <div className={styles.birder_div}>
           <div className={styles.borderImg}>
               <Image src="./img/one.png" fill alt="image" className={styles.borderImgs}/>
           </div>
           <div className={styles.border_content}>
              <p>lily</p>
              <p>Price: $2000</p>
           </div>
           </div>
           <div className={styles.add}>
               <div className={styles.dels}><DeleteOutlineIcon className={styles.del}/></div>
                <div className={styles.number}>
                   <div className={styles.addIcon}><RemoveIcon className={styles.re}/></div>
                   <div className={styles.add}>1</div>
                   <div className={styles.addIcon}><AddIcon className={styles.re}/></div>
                </div>
           </div>
        </div>
        {/* <div className={styles.divs}>
            <div className={styles.loading}>Data loading .....</div>
            <div className={styles.explore}>explore food</div>
        </div> */}
        <div className={styles.checkout}>
            <Checkout/>
        </div>
    </div>
    </div>
  )
}

export default Cartco