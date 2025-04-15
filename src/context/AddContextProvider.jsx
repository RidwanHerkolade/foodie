import { createContext, useEffect, useState } from "react"
export const AddContext = createContext(null);
const AddContextProvider = (props) => {
  const [initials, setInitials] = useState('')
  const [restaurantDatas, setRestaurantDatas] = useState([])

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
  const contextValue = {
    initials,
    setInitials,
    fetchUsers,
    restaurantDatas,
    setRestaurantDatas,

  }
  return (
      <AddContext.Provider value={contextValue}>
          {props.children}
      </AddContext.Provider>
  )
}

export default AddContextProvider