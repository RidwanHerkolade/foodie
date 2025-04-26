"use client"
import { useState, useRef } from "react";
import styles from "./menu.module.css";
import { menuDatas } from "./MenuData";
import Image from "next/image";
const Menu = () => {
//   const [isIndex, setIsIndex] = useState(0);
  const [isActive, setIsActive] = useState(menuDatas[0].id);
  // const scrollRef = useRef(null);
  // const handleScroll = () => {
  //   const scrollX = scrollRef.current.scrollLeft;
  //   const itemWidth = 160;
  //   const index = Math.round(scrollX / itemWidth);
  //   setIsIndex(index);
  // };
  const handleClick = (id) => {
    setIsActive(id);
  };
  return (
    <div className={styles.menu}>
      <div className={styles.menu_header}>
        <p>menu category</p>
        <p>view all</p>
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.img_grid}
            // ref={scrollRef}
            // onScroll={handleScroll}
        >
          {menuDatas.map((data) => {
            return [
              <div
                className={`${styles.grids} ${
                isActive === data.id ? styles.active : ""}`}
                key={data.id}
                onClick={() => handleClick(data.id)}
              >
                <div className={styles.img}>
                  <Image
                    fill
                    src={data.img}
                    alt="menu image"
                    className={styles.imgg}
                  />
                </div>
                <div className={styles.title}>{data.name}</div>
              </div>,
            ];
          })}
        </div>
      </div>
    </div>
  );
};
export default Menu;
