"use client";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import Link from "next/link";
import styles from "./aside.module.css";
import { usePathname } from "next/navigation";
// import { useContext } from "react";
// import { AddContext } from "@/context/AddContextProvider";

const menuDatas = [
  {
    section: "Client App",
    links: [
      { id: 1, name: "Home", href: "/Dashboard", icon: <HomeOutlinedIcon /> },
      { id: 2, name: "Foods", href: "/Food", icon: <FoodBankOutlinedIcon /> },
      { id: 3, name: "Cart", href: "/Cart", icon: <ShoppingCartOutlinedIcon /> },
      { id: 4, name: "Order", href: "/", icon: <ReorderOutlinedIcon /> },
      { id: 5, name: "Chat", href: "/", icon: <ForumOutlinedIcon /> },
    ],
  },
  {
    section: "Admin panel",
    links: [
      { id: 6, name: "Dashboard", href: "/", icon: <HomeOutlinedIcon /> },
      { id: 7, name: "Orders", href: "/", icon: <FoodBankOutlinedIcon /> },
      {
        id: 8,
        name: "Customer",
        href: "/",
        icon: <ShoppingCartOutlinedIcon />,
      },
      { id: 9, name: "Sellers", href: "/", icon: <ReorderOutlinedIcon /> },
      { id: 10, name: "Restaurant", href: "/", icon: <ForumOutlinedIcon /> },
      { id: 11, name: "Food", href: "/", icon: <ForumOutlinedIcon /> },
      { id: 12, name: "Wallet", href: "/", icon: <ForumOutlinedIcon /> },
      { id: 13, name: "Settings", href: "/", icon: <ForumOutlinedIcon /> },
    ],
  },
  // {
  //   section: "Ui",
  //   links: [
  //     { id: 14, name: "Home", href: "/", icon: <HomeOutlinedIcon /> },
  //     { id: 15, name: "Foods", href: "/", icon: <FoodBankOutlinedIcon /> },
  //     { id: 16, name: "Cart", href: "/", icon: <ShoppingCartOutlinedIcon /> },
  //     { id: 17, name: "Order", href: "/", icon: <ReorderOutlinedIcon /> },
  //     { id: 18, name: "Chat", href: "/", icon: <ForumOutlinedIcon /> },
  //   ],
  // },
];
// const {isTab} = useContext(AddContext);
const Aside = () => {
  const pathname = usePathname();
  return (
    <aside>
      <div className={styles.logo}>Foody</div>
      <div className={styles.aside}>
        <div className={styles.links}>
          {menuDatas.map((data, index) => {
            return (
              <div key={index} className={styles.links}>
                <p className={styles.top}>{data.section}</p>
                <div>
                  {data.links.map((link) => {
                    return (
                      <Link href={link.href} key={link.id} className={`${styles.link} ${pathname === link.href ? styles.active : ""} `}>
                        <div className={styles.img_logo}>
                          <div className={styles.side_icon}>{link.icon}</div>
                        </div>
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
