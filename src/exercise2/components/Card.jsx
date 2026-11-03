import {
  card,
  cardTitle,
  cardContent,
} from "../styles/card.css.js";

function Card({ title, children }) {
  return (
    <div className={card}>
      {title && <h2 className={cardTitle}>{title}</h2>}

      <div className={cardContent}>
        {children}
      </div>
    </div>
  );
}

export default Card;
