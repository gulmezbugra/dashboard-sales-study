import { styles } from "../styles";

const badgeStyles = {
  Delivered: { background: "#d1fae5", color: "#065f46" },
  Pending:   { background: "#fef3c7", color: "#92400e" },
  Cancelled: { background: "#fee2e2", color: "#991b1b" },
};

function Badge({ status }) {
  return (
    <span style={{ ...styles.badge, ...badgeStyles[status] }}>
      {status}
    </span>
  );
}

export default Badge;