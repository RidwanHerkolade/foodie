"use client"
import styles from "./page.module.css";
import Aside from "@/Component/Aside/Aside";
import Hero from "@/Component/Hero/Hero";
import { useSearchParams } from "next/navigation";
const page = () => {
  // const search = useSearchParams();
  // const initials = search.get("initials") || "users"
  return (
    <section className={styles.dash}>
      {/* <div className={styles.aside}><Aside initials={initials}/></div>
      <div className={styles.hero}><Hero initials={initials}/></div> */}
      <Hero/>
    </section>
  );
};

export default page;
