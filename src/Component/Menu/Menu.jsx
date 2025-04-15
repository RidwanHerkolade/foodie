import { useState, useRef } from "react";
import styles from "./menu.module.css";
import Image from "next/image";
export const menuData = [
  { id: 1, img: "/img/one.png", name: "hamburger" },
  { id: 2, img: "/img/salad.png", name: "salad" },
  { id: 3, img: "/img/pizza.png", name: "Pizza" },
  { id: 4, img: "/img/noodles.png", name: "Noodles" },
  { id: 5, img: "/img/coffee.png", name: "Coffee" },
  { id: 6, img: "/img/one.png", name: "hamburger" },
//   { id: 7, img: "/img/three.png", name: "yoghurt" },
//   { id: 8, img: "/img/one.png", name: "hamburger" },
//   { id: 9, img: "/img/salad.png", name: "salad" },
//   { id: 10, img: "/img/pizza.png", name: "Pizza" },
//   { id: 11, img: "/img/noodles.png", name: "Noodles" },
//   { id: 12, img: "/img/coffee.png", name: "Coffee" },
//   { id: 13, img: "/img/one.png", name: "hamburger" },
//   { id: 14, img: "/img/three.png", name: "yoghurt" },
];
const Menu = () => {
//   const [isIndex, setIsIndex] = useState(0);
  const [isActive, setIsActive] = useState(menuData[0].id);
  const scrollRef = useRef(null);
  const handleScroll = () => {
    const scrollX = scrollRef.current.scrollLeft;
    const itemWidth = 160;
    const index = Math.round(scrollX / itemWidth);
    setIsIndex(index);
  };
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
            ref={scrollRef}
            onScroll={handleScroll}
        >
          {menuData.map((data) => {
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
