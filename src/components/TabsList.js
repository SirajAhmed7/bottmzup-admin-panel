import Tab from "../common/Tab";

function TabsList() {
  return (
    <div className="d-flex flex-column px-lg-5 align-items-stretch">
      <Tab name="Dashboard" icon="house" routeTo="/admin-dashboard" />
      <Tab name="All Events" icon="calendar-days" routeTo="/admin-all-events" />
      <Tab
        name="All Promoters"
        icon="chart-line"
        routeTo="/admin-all-promoters"
      />
      <Tab name="Payments" icon="money-bill" routeTo="/admin-payments" />
    </div>
  );
}

export default TabsList;
