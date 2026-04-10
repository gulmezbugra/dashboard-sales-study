import { styles } from "../styles";
import { DEALS } from "../constants";
import Badge from "./Badge";

function DealsTable() {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {["Product Name", "Location", "Date – Time", "Piece", "Amount", "Status"].map((h) => (
            <th key={h} style={styles.th}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {DEALS.map((deal) => (
          <tr key={deal.name} style={styles.tr}>
            <td style={styles.td}>
              <div style={styles.productCell}>
                <div style={styles.prodImg}>{deal.emoji}</div>
                {deal.name}
              </div>
            </td>
            <td style={styles.td}>{deal.location}</td>
            <td style={styles.td}>{deal.datetime}</td>
            <td style={styles.td}>{deal.piece}</td>
            <td style={styles.td}>{deal.amount}</td>
            <td style={styles.td}>
              <Badge status={deal.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DealsTable;
