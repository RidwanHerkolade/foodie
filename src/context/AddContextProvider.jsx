"use client"
import { useRouter } from "next/router";
import { createContext, useEffect, useState, useRef, use } from "react"
export const AddContext = createContext(null);
const AddContextProvider = (props) => {
  const [initials, setInitials] = useState('')
  const [restaurantDatas, setRestaurantDatas] = useState([])
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false)
  const [isSearch, setIsSearch] = useState("");
  const [addToCart, setAddToCart] = useState([])
  const asideRef = useRef(null);

  const fetchUsers = async () => {
     try {
      const response = await fetch('http://localhost:4000/restaurants');
      if(!response.ok) throw new Error("failed to fetch restaurant")
      const data = await response.json()
      setRestaurantDatas(data)
     }
     catch(error) {
      console.error("error fetching restaurant data")
     }
  }
  useEffect(() => {
        fetchUsers()
  },[])

  // media responsive drop down menu
  const handleMobile = () => {
     setIsMobile(!isMobile);
  }
  // tablet sidebar nav
  const handleTabNav = () => {
       setIsTab(!isTab)
  }

 useEffect(() => {
  const handleClickOut = (event) => {
    if(asideRef.current && !asideRef.current.contains(event.target)) {
      setIsMobile(false)
    }
 }
 if(isMobile) {
  document.addEventListener("mousedown", handleClickOut);
  document.body.style.overflow = "hidden";
 } else {
  document.body.style.overflow = "auto";
 }
 return () => {
  document.removeEventListener("mousedown", handleClickOut);
  document.body.style.overflow = "auto";
};
 },[[isMobile]]);
const handleChange = (e) => {
  setIsSearch(e.target.value)
}

const addFoodToCart = (item) => {
    setAddToCart((prevCart) => [...prevCart, item])
}
const router = useRouter();
const redirectToCheckOut = () => {
     router.push('/checkout');
}

  const contextValue = {
    initials,
    isMobile,
    setIsMobile,
    handleMobile,
    setInitials,
    fetchUsers,
    restaurantDatas,
    setRestaurantDatas,
    addToCart,
    setAddToCart,
    addFoodToCart,
    redirectToCheckOut,
    asideRef,
    isTab,
    setIsTab,
    handleTabNav,
    handleChange,
    isSearch,
    setIsSearch
  }
  return (
      <AddContext.Provider value={contextValue}>
          {props.children}
      </AddContext.Provider>
  )
}

export default AddContextProvider