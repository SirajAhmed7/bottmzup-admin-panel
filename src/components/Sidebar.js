import TabsList from "./TabsList";

function Sidebar() {
  return (
    <div className="col-lg-3 min-vh-100" style={{ background: "#141728" }}>
      <h3 className="primary-header mb-0 px-lg-4 px-3 py-2 text-white mb-3 pt-4">
        BottmzUP
      </h3>
      <TabsList />
    </div>
  );
}

export default Sidebar;
