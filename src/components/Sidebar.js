import TabsList from "./TabsList";

function Sidebar() {
  return (
    <div className="col-3 min-vh-100" style={{ background: "#161239" }}>
      <h2 className="primary-header mb-0 px-lg-5 px-3 py-2 text-white mb-3 pt-4">
        BottmzUP
      </h2>
      <TabsList />
    </div>
  );
}

export default Sidebar;
