import { useContext } from "react";
import styles from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { AddContext } from "@/context/AddContextProvider";
const SearchInput = () => {
  const {handleChange} = useContext(AddContext)
  return (
    <div className={styles.input}>
      <SearchIcon className={styles.search} />
      <input
        placeholder="search product name"
        type="text"
        className={styles.inp}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
