import styles from "./cart.module.css"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from 'next/link';
import Cartco from '@/Component/CartCo/Cartco';
const page = () => {
  return (
    <div className=''>
    <div className={styles.food_div}>
      <div className={styles.hero_div}>
        <div className={styles.name}>Food</div>
        <div className={styles.foody}>
          <Link href="/Dashboard" className={styles.foody_link}>
            Foody
          </Link>
          <div className={styles.arrow}>
            {" "}
            <ArrowForwardIosIcon className={styles.arrow} />{" "}
          </div>
          <div className={styles.homee}>Cart</div>
        </div>
      </div>
      <Cartco/>
    </div>
    </div>
  )
}
export default page