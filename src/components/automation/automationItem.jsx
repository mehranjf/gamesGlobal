import styles from "./automation.module.css";
const AutomationItem = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemDetail}>
        <div className={styles.imgWrapper}>
          <img alt={data.sites[0].title} src={data.sites[0].logoSmall2x} />
        </div>
        <h2>{data.title}</h2>
        <p>{data.shortDescription}</p>
      </div>
    </div>
  );
};
export default AutomationItem;
