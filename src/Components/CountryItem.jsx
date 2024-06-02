import styles from "./CountryItem.module.css";
import EmojiFlags from "./EmojiFlags";
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <EmojiFlags flag={country.emoji} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
