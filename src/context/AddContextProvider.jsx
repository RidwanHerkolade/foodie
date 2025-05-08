"use client";
import { createContext, useEffect, useState, useRef, use } from "react";
export const AddContext = createContext(null);
const AddContextProvider = (props) => {
  const [initials, setInitials] = useState("");
  const [restaurantDatas, setRestaurantDatas] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isSearch, setIsSearch] = useState("");
  const [isCart, setIsCart] = useState([]);
  const asideRef = useRef(null);

  const fetchUsers = async () => {

    try {
      const response = await fetch("http://localhost:4000/restaurants");
      if (!response.ok) throw new Error("failed to fetch restaurant");
      const data = await response.json();
      setRestaurantDatas(data);
    } catch (error) {
      console.error("error fetching restaurant data");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  // media responsive drop down menu
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  // tablet sidebar nav
  const handleTabNav = () => {
    setIsTab(!isTab);
  };
  useEffect(() => {
    const handleClickOut = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setIsMobile(false);
      }
    };
    if (isMobile) {
      document.addEventListener("mousedown", handleClickOut);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
      document.body.style.overflow = "auto";
    };
  }, [[isMobile]]);

  const handleChange = (e) => {
    setIsSearch(e.target.value);
  };

  // cart handler
  const handleCart = (item) => {
    const numericPrice = parseFloat(item.price?.toString().replace(/[^0-9.]/g, "")) || 0;
    const cartItem = {
      ...item,
      price: numericPrice,
      quantity: 1,
    };
    setIsCart((prevCart) => [...prevCart, cartItem]);
  };

  // increase item
  const increaseItem = (index) => {
    setIsCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity += 1;
      return newCart;
    })
  }
 
  // decrease item
  const decreaseItem = (index) => {
    setIsCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }
      return newCart;
    })
  }
  // delete items
  const deleteItem = (index) => {
     setIsCart((prevCart) => prevCart.filter((_, i) => i !== index))
  }
  
  const contextValue = {
    initials,
    isMobile,
    setIsMobile,
    handleMobile,
    deleteItem,
    decreaseItem,
    increaseItem,
    setInitials,
    fetchUsers,
    restaurantDatas,
    setRestaurantDatas,
    isCart,
    setIsCart,
    handleCart,
    asideRef,
    isTab,
    setIsTab,
    handleTabNav,
    handleChange,
    isSearch,
    setIsSearch,
  };
  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;
