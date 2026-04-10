export const styles = {
  // Layout
  root: { 
    display: "flex", 
    minHeight: "100vh", 
    background: "#f3f4f6", 
    fontFamily: "'Segoe UI', sans-serif" },
  mainWrap: { 
    flex: 1, 
    display: "flex"  , 
    flexDirection: "column", 
    overflow: "hidden" },
  main: { 
    flex: 1, 
    padding: "24px 28px", 
    overflowY: "auto" },
  pageTitle: { 
    fontSize: 22, 
    fontWeight: 600, 
    color: "#202020", 
    marginBottom: 20 },

  // Sidebar
  sidebar: { 
    width: 190, 
    flexShrink: 0, 
    background: "#FFFFFF", 
    borderRight: "1px solid #e5e7eb", 
    display: "flex", 
    flexDirection: "column", 
    padding: "0 0 12px" },
  logo: { 
    padding: "18px 16px 14px", 
    fontSize: 18, 
    fontWeight: 600, 
    color: "#111827" } ,
  navItem: { 
    display: "flex", 
    alignItems: "center", 
    gap: 9, 
    width: "100%", 
    padding: "9px 14px", 
    fontSize: 13.5, 
    color: "#202224", 
    background: "none", 
    border: "none", 
    borderLeft: "3px solid transparent", 
    cursor: "pointer", 
    textAlign: "left" },
  navItemActive: { 
    background: "#4880FF", 
    color: "#E8E8E8", 
    borderLeft: "3px solid #4880FF",
    borderRadius: "0 8px 8px 0", 
    fontWeight: 500 },
  navSection: { 
    fontSize: 10.5, 
    color: "#9ca3af", 
    letterSpacing: "0.07em", 
    textTransform: "uppercase", 
    padding: "14px 14px 4px" },

  // Topbar
  topbar: { 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between", 
    padding: "12px 24px", 
    background: "#fff", 
    borderBottom: "1px solid #e5e7eb" },
  searchBox: { 
    display: "flex", 
    alignItems: "center", 
    gap: 8, 
    background: "#F5F6FA", 
    border: "1px solid #D5D5D5", 
    borderRadius: 19, 
    padding: "7px 14px", 
    color: "#D5D5D5", 
    width: 260 },
  searchInput: { 
    border: "none", 
    background: "none", 
    outline: "none", 
    fontSize: 13.5, 
    color: "#202020", 
    width: "100%" },
  topbarRight: { 
    display: "flex", 
    alignItems: "center", 
    gap: 14 },
  bellWrap: { 
    position: "relative", 
    color: "#000000" },
  notifBadge: { 
    position: "absolute", 
    top: -5, 
    right: -6, 
    background: "#ef4444", 
    color: "#fff", 
    fontSize: 9, 
    fontWeight: 700, 
    borderRadius: 10, 
    padding: "1px 4px" },
  avatar: { 
    width: 36, 
    height: 36, 
    borderRadius: "50%", 
    background: "#ede9fe", 
    color: "#4f46e5", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    fontSize: 13, 
    fontWeight: 600 },

  // Stat Cards
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16, marginBottom: 20 },
  statCard: { background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 },
  statRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  statLabel: { fontSize: 13, color: "#6b7280" },
  statIcon: { width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  statValue: { fontSize: 24, fontWeight: 600, color: "#111827" },

  // Card
  card: { background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "18px 20px", marginBottom: 20 },
  cardHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  cardTitle: { fontSize: 15, fontWeight: 600, color: "#111827" },
  select: { fontSize: 12.5, border: "1px solid #e5e7eb", borderRadius: 8, padding: "4px 10px", background: "#fff", color: "#6b7280", cursor: "pointer" },

  // Table
  table: { width: "100%", borderCollapse: "collapse" },
  th: { textAlign: "left", padding: "8px 10px", fontSize: 12.5, fontWeight: 600, color: "#6b7280", borderBottom: "1px solid #e5e7eb" },
  tr: { borderBottom: "1px solid #f3f4f6" },
  td: { padding: "11px 10px", fontSize: 13.5, color: "#374151" },
  productCell: { display: "flex", alignItems: "center", gap: 10 },
  prodImg: { width: 34, height: 34, borderRadius: 8, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 },
  badge: { display: "inline-flex", padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 500 },
};
