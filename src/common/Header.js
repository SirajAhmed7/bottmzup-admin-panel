function Header({ heading }) {
  return (
    <div className="px-5 py-3 header bg-gray-100">
      <h1 className="fs-1 fw-bolder">{heading}</h1>
    </div>
  );
}

export default Header;
