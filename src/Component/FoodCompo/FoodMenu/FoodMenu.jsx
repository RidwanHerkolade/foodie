"use client";
import Image from "next/image";
import styles from "./foodmenu.module.css";
import { menuDatas } from "@/Component/Menu/MenuData";
import CustomMarks from "./Slider";
import SearchInput from "../SearchCompo/SearchInput";
const foodMenus = [
  { id: 1, name: "rice and pluses" },
  { id: 2, name: "Beverages" },
  { id: 3, name: "snaqs & munchies" },
  { id: 4, name: "bakery" },
  { id: 5, name: "dairy" },
  { id: 6, name: "vegetables" },
  { id: 7, name: "fruits" },
];
const FoodMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.range}>
        <div className={styles.slider}>
          <p>Range</p>
          <div>
            <CustomMarks />
          </div>
        </div>
        <div className={styles.category}>
          <p>categories</p>
          {foodMenus.map((data) => {
            return (
              <div className={styles.cat_divs} key={data.id}>
                <input type="checkbox" />
                <div className={styles.names}>{data.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.contents}>
        <SearchInput/>
      <div className={styles.content}>
        {menuDatas.map((data) => {
          return (
            <div className={styles.foodie} key={data.id}>
              <div className={styles.imgs}>
                <Image
                  src={data.img}
                  fill
                  alt="food_display"
                  className={styles.img}
                />
              </div>
              <div className={styles.name}>
                <p>{data.name}</p>
                <p>{data.price}</p>
                <div className={styles.btn}>Add to cart</div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};
export default FoodMenu;
