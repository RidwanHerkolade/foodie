// import { useState, useEffect } from "react"
import { useContext } from "react";
import { AddContext } from "@/context/AddContextProvider";
import styles from "./restaurant.module.css"
const Restaurant = () => {
//  const [fakeResApi, setFakeResApi] = useState("")
//  const fetchUser = async () => {
//     try {
//         const response = await fetch('http://localhost:4000/restaurant');
//         if(!response.ok) throw new Error("failed to fetch restaurant");
//         const data = await response.json()
//         setFakeResApi(data);
//     }
//     catch(error) {
//         console.error("Error fetching restaurant data:", error.message);
//     }
//  }
// useEffect(() => {
//    fetchUser()
// },[])
const {fetchUsers, restaurantDatas, setRestaurantDatas} = useContext(AddContext)
  return (
    <div className={styles.div}>
        <p className={styles.name}>Restaurant Nearby</p>
        {restaurantDatas.map((data) => {
          return[
            <div className={styles.resD} key={data.id}>
               <div className={styles.divs}>
                <div className={styles.img}>
                <Image fill src={data.restaurants.logo} alt="logo img" className="logo_img"/>
                </div>
                <div className={styles.content}>
                    <p>{data.restaurants.name}</p>
                </div>
                
               </div>
          
            </div>
          ]
        })}
        
    </div>
  );
};

export default Restaurant