import styles from "./nav.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useContext} from "react";
import { AddContext } from "@/context/AddContextProvider";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { initials, handleMobile, handleIsTab } = useContext(AddContext);
  const router = useRouter()
  const handleSignOut = async () => {
    try{
      await signOut(auth);
       router.push("/")
    } catch(error) {
      console.error("error why signing out")
    }
  }
  return (
    <nav className={styles.navs}>
        <div className={styles.nav_menu}>
          <div className={styles.menu_icon}>
            <div className={styles.menuD}>
              <MenuIcon className={styles.menu} onClick={handleMobile}/>
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.outline}>
              <PersonOutlinedIcon className={styles.outline_icon}/>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <h1>Foody</h1>
          </div>
          <div className={styles.navgrid}>
            <div className={styles.grid}>
              <div className={styles.modes}>
                <MenuIcon className={styles.menu} onClick={handleIsTab}/>
              </div>
              <div className={styles.searchInput}>
                <SearchIcon className={styles.s_icon} />
                <input />
              </div>
            </div>
            <div className={styles.mode}>
              <div className={styles.modes}>
                <DarkModeOutlinedIcon className={styles.not} />
              </div>
              <div className={styles.modes}>
                <NotificationsNoneOutlinedIcon className={styles.not} />
              </div>
              <div className={styles.log}>
                  <LogoutIcon className={styles.not} onClick={handleSignOut}/>
              </div>
              <div className={styles.user}>
                <div className={styles.name}>{initials}</div>
              </div>
             
            </div>
          </div>
        </div>
      {/* )} */}
    </nav>
  );
};
export default Nav;
