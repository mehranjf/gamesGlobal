import AutomationItem from "./automationItem";
import styles from "./automation.module.css";

const Automation = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.length ? (
        <>
          {data.map((item) => {
            return <AutomationItem key={item.id} data={item} />;
          })}
        </>
      ) : (
        <h4>There is nothing to show.</h4>
      )}
    </div>
  );
};
export default Automation;
