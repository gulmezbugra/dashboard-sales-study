import { styles } from "../styles";
import { icons, nav_main, nav_pages } from "../constants";
import Icon from "./Icon";

function Sidebar({ active, setActive }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <span style={{ color: "#4880FF" }}>Dash</span>Stack
      </div>

      <nav style={{ flex: 1 }}>
        {nav_main.map(({ label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            style={{
              ...styles.navItem,
              ...(active === label ? styles.navItemActive : {}),
            }}
          >
          
            {label}
          </button>
        ))}

        <hr/>  

        <p style={styles.navSection}>Pages</p>

        {nav_pages.map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            style={{
              ...styles.navItem,
              ...(active === label ? styles.navItemActive : {}),
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <hr/>

      <div>
        <button style={styles.navItem}>
          <Icon d={icons.settings} size={14} /> Settings
        </button>
        <button style={styles.navItem}>
          <Icon d={icons.logout} size={14} /> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;