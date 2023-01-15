import styles from "./ColumnForm.module.scss";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle("");
    setIcon("");
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Icon:</span>
      <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
