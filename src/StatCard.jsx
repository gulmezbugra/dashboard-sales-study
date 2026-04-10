import { styles } from "../styles";
import { icons } from "../constants";
import Icon from "./Icon";

function StatCard({ label, value, change, direction, iconColor, iconBg, iconPath }) {
  const isUp = direction === "up";

  return (
    <div style={styles.statCard}>
      <div style={styles.statRow}>
        <p style={styles.statLabel}>{label}</p>
        <div style={{ ...styles.statIcon, background: iconBg }}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill={iconColor} stroke="none">
            <path d={iconPath} />
          </svg>
        </div>
      </div>

      <p style={styles.statValue}>{value}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 12,
          color: isUp ? "#16a34a" : "#dc2626",
        }}
      >
        <Icon d={isUp ? icons.trendUp : icons.trendDown} size={13} />
        <span>{change}</span>
      </div>
    </div>
  );
}


export default StatCard;