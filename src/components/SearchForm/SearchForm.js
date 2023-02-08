import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_SEARCHSTRING", payload: searchString });
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
