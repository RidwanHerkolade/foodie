import styles from "./food.module.css"
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchInput from "@/Component/FoodCompo/SearchCompo/SearchInput";
import FoodMenu from "@/Component/FoodCompo/FoodMenu/FoodMenu";

const page = () => {
  return (
    <div className={styles.food_divs}>
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
          <div className={styles.homee}>Food</div>
        </div>
      </div>
      {/* <SearchInput/> */}
      <FoodMenu/>
      
    </div>
    </div>
  );
};
export default page;
