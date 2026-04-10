import { styles } from "../styles";
import { icons } from "../constants";
import ukFlag from "../assets/united-kingdom.png";
import Icon from "./Icon";

function Topbar() {
  return (
    <header style={styles.topbar}>
      <div style={styles.searchBox}>
        <Icon d={icons.search} size={14} />
        <input placeholder="Search" style={styles.searchInput} />
      </div>

      <div style={styles.topbarRight}>
        <div style={styles.bellWrap}>
          <Icon d={icons.bell} size={18} />
          <span style={styles.notifBadge}>9</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src={ukFlag}
            alt="English"
            style={{ width: 40, height: 27, borderRadius: 8, objectFit: "cover" }}
          />
        </div>

        <div>
          <p style ={{ fontSize:13, fontWeight: 500, color: "#646464"}}>English</p>
        </div>

        <Icon d={icons.chevron} size={14} />

        <div style={styles.avatar}>BG</div>

        <div>
          <p style={{ fontSize: 13, fontWeight: 500 ,color:"#404040"}}>Buğra Gülmez</p>
          <p style={{ fontSize: 11, color: "#565656" }}>Admin</p>
        </div>

        <Icon d={icons.chevron} size={14} />
      </div>
    </header>
  );
}

export default Topbar;