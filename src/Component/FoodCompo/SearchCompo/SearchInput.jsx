import styles from "./search.module.css"
import SearchIcon from '@mui/icons-material/Search';
const SearchInput = () => {
  return (
    <div className={styles.input}>
        <SearchIcon className={styles.search}/>
        <input placeholder="search product name" type="text" className={styles.inp}/>
    </div>
  )
}

export default SearchInput