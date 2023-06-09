import TabsList from "../common/TabsList";
import { useRef } from "react";

function Sidebar() {
  const ref = useRef(null);

  return (
    <nav className="col-lg-2 col-md-2 sidebar-nav p-0 sticky-top bg-gray-200 z-20">
      <div className="d-flex align-items-center justify-content-between nav-header">
        <h3 className="primary-header mb-0 px-lg-4 px-3 py-2 mb-3 pt-4">
          BottmzUP
        </h3>
        <button
          className="menu px-lg-4 px-3 py-2 menu"
          style={{ background: "none", boxShadow: "none", border: "none" }}
          onClick={() => {
            ref.current.handleNavClick();
          }}
        >
          <i className="fa-solid fa-bars fs-5 text-gray-800"></i>
        </button>
      </div>
      <TabsList ref={ref} />
    </nav>
  );
}

export default Sidebar;
