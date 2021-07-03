import styles from "./Legend.module.css";
import LegendKey from "../../assets/images/mattapan-legend-temp.png";
import LegendItem from "./LegendItem";
const Legend = () => {
  return (
    <div className={styles.Legend}>
      <img className={styles.LegendKey} src={LegendKey} alt="legend key" />
      <LegendItem />
      <LegendItem />
      <LegendItem />
      <LegendItem />
    </div>
  );
};

export default Legend;
