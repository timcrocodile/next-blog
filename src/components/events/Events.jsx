import styles from "./index.module.scss";
import Link from "next/link";
const Events = () => {
  return (
    <div className={styles.Events}>
      <p>ecco l'evento dell'anno !!!!</p>
      <Link href={"https://store.asroma.com/en/"}>
        <p>roma</p>
      </Link>
      <Link href={"https://www.fcbarcelona.com/en/"}>
        <p>barcellona</p>
      </Link>
    </div>
  );
};

export default Events;
