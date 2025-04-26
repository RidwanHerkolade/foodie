"use client"
import styles from "./page.module.css";
import Hero from "@/Component/Hero/Hero";
const page = () => {
  return (
    <section className={styles.dash}>
            <div className={styles.hero}><Hero/></div> 
    </section>
  );
};
export default page;
