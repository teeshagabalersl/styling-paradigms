import {
  badge,
  badgeVariants,
} from "../styles/badge.css.js";

function Badge({ variant = "success", children }) {
  return (
    <span className={`${badge} ${badgeVariants[variant]}`}>
      {children}
    </span>
  );
}

export default Badge;
