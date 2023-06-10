import { Link } from "react-router-dom";

function Tab(props) {
  return (
    <Link to={props.routeTo} className="d-flex align-items-center px-4 py-2 text-decoration-none rounded-3" style={{color: window.location.pathname === props.routeTo ? "white" : "white", backgroundColor: window.location.pathname === props.routeTo && "#354054"}}>
      <span className="me-3">
        <i className={"fa-solid fa-" + props.icon}></i>
      </span>
      <div className="fs-6">{props.name}</div>
    </Link>
  );
}

export default Tab;
