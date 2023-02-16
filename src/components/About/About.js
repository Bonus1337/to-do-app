import PageTitle from "../PageTitle/PageTitle";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum.</p>
    </div>
  );
};

export default About;
