import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchString,
  updateSearchString,
} from "../../redux/searchStringRedux";

const SearchForm = () => {
  const dispatch = useDispatch();
  const newSearchString = useSelector(getSearchString);
  const [searchString, setSearchString] = useState(newSearchString);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button>
        <span className="fa fa-search"></span>
      </Button>
    </form>
  );
};

export default SearchForm;
