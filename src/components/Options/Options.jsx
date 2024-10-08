import styles from "./Options.module.css";
import Button from "../Button/Button";

const Options = ({ updateFeedback, isVisible }) => {
  return (
    <div className={styles.wrapper}>
      <Button handleClick={() => updateFeedback("good")}>Good</Button>
      <Button handleClick={() => updateFeedback("neutral")}>Neutral</Button>
      <Button handleClick={() => updateFeedback("bad")}>Bad</Button>
      {isVisible !== 0 && <Button handleClick={updateFeedback}>Reset</Button>}
    </div>
  );
};
export default Options;
