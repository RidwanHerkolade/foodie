// import { useState, useEffect } from "react"
import { useContext } from "react";
import { AddContext } from "@/context/AddContextProvider";
import styles from "./restaurant.module.css"
import Image from "next/image";
const Restaurant = () => {
const {fetchUsers, restaurantDatas, setRestaurantDatas} = useContext(AddContext)
  return (
    <div className={styles.div}>
        <p className={styles.name}>Restaurant Nearby</p>
        <div className={styles.grid}>
        {restaurantDatas.map((data) => {
          return[
            <div className={styles.resD} key={data.id}>
               <div className={styles.divs}>
                <div className={styles.img}>
                <Image fill src={data.logo} alt="logo img" className="logo_img"/>
                </div>
                <div className={styles.content}>
                    <p className={styles.name}>{data.name}</p>
                    <div className={styles.rating}>
                         <div className={styles.buy}>
                             <div className={styles.buys}>{data.delivery}</div>
                         </div>
                    </div>
                  <div className={styles.distance}>{data.distance}</div>
                </div>
                
               </div>
            </div>
          ]
        })}
        </div>
    </div>
  );
};
export default Restaurant