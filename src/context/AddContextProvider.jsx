import { createContext, useEffect, useState, useRef } from "react"
export const AddContext = createContext(null);
const AddContextProvider = (props) => {
  const [initials, setInitials] = useState('')
  const [restaurantDatas, setRestaurantDatas] = useState([])
  const [isMobile, setIsMobile] = useState(false)
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

 

  const contextValue = {
    initials,
    isMobile,
    setIsMobile,
    handleMobile,
    setInitials,
    fetchUsers,
    restaurantDatas,
    setRestaurantDatas,
    asideRef
  }
  return (
      <AddContext.Provider value={contextValue}>
          {props.children}
      </AddContext.Provider>
  )
}

export default AddContextProvider