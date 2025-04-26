import styles from "./hero.module.css";
import Link from "next/link";
import Menu from "../Menu/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Restaurant from "../Restaurant/Restaurant";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_divs}>
      <div className={styles.hero_div}>
        <div className={styles.name}>Home</div>
        <div className={styles.foody}>
          <Link href="/Dashboard" className={styles.foody_link}>Foody</Link>
          <div className={styles.arrow}>
            {" "}
            <ArrowForwardIosIcon className={styles.arrow}/>{" "}
          </div>
          <div className={styles.homee}>Home</div>
        </div>
      </div>
      <div className={styles.grids}>
      <div className={styles.foody_com}>
        <div className={styles.ride}>
          <h3>Light in the stomach, good for your health </h3>
          <div className={styles.order}>Order Now</div>
        </div>
        <div className={styles.img}>
          <Image
            src="/img/rider.png"
            fill
            alt="rider image"
            className={styles.imgs}
          />
        </div>
      </div>
       <div className={styles.sub}>
           <h4>You do not have a valid subscription. Please active your subscription</h4>
           <div className={styles.btns_go}>
           <button className={styles.go_btn}>Go to pro now!</button>
           </div>
       </div>
      </div>
      <div className={styles.menu}><Menu/></div>
      <div><Restaurant/></div>
      </div>
      
    </div>
  );
};

export default Hero;
