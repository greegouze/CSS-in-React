import styles from "./Card.module.css";

export function Card() {
  return (
    <div className={styles.container}>
      <figure className={styles.card}>
        <img
          className={styles.cardImg}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        ></img>
        <figcaption className={styles.title}>Carapuce</figcaption>
      </figure>
    </div>
  );
}
