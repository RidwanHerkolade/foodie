import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Link from "next/link";
import styles from './aside.module.css'

const Aside = () => {
  return (
    <aside>
        <div className={styles.aside}>
          {/* <div className={styles.logo}>
            <div className={styles.img_logo}>
                <RestaurantMenuIcon/>
            </div>
            <h2 className={styles.h2}>Foody</h2>
          </div> */}
          <div className={styles.links}>
          <p className={styles.top}>Client App</p>
          <div>
            <Link href="/" className={styles.link} >
              <div className={styles.img_logo}>
                <HomeOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Home</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <FoodBankOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Foods</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ShoppingCartOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Cart</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ReorderOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Order</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ForumOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Chat</span>
            </Link>
          </div>
          </div>
          <div className={styles.links}>
          <p className={styles.top}>Admin panel</p>
          <ul>
            <Link href="/" className={styles.link} >
              <div className={styles.img_logo}>
                <HomeOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Dashboard</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <FoodBankOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Orders</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ShoppingCartOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Customer</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ReorderOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Sellers</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ForumOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Restaurant</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ForumOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Food</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ForumOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Wallet</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ForumOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Settings</span>
            </Link>
          </ul>
          </div>
          <div className={styles.links}>
          <p className={styles.top}>Ui</p>
          <ul>
            <Link href="/" className={styles.link} >
              <div className={styles.img_logo}>
                <HomeOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Home</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <FoodBankOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Foods</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ShoppingCartOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Cart</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ReorderOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Order</span>
            </Link>
            <Link href="/" className={styles.link}>
              <div className={styles.img_logo}>
                <ForumOutlinedIcon className={styles.side_icon}/>
              </div>
              <span>Chat</span>
            </Link>
          </ul>
          </div>
         
        </div>
      </aside>
  )
}

export default Aside