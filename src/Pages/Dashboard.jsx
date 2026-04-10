import { styles } from "../styles";
import { STAT_CARDS } from "../constants";
import StatCard from "../Components/StatCard";
import SalesChart from "../Components/SalesChart";
import DealsTable from "../Components/DealsTable";
import Card from "../Components/Card";

function Dashboard() {
  return (
    <main style={styles.main}>
      <h1 style={styles.pageTitle}>Dashboard</h1>

      <div style={styles.statsGrid}>
        {STAT_CARDS.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      <Card title="Sales Details">
        <SalesChart />
      </Card>

      <Card title="Deals Details">
        <DealsTable />
      </Card>
    </main>
  );
}

export default Dashboard;