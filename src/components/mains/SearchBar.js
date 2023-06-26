function SearchBar({ value, placeholder, onChange, children }) {
  return (
    <div
      className="d-flex justify-content-between w-100 px-2 py-3"
      style={{ background: "#f3f4f6" }}
    >
      {/* <label className="fs-6" style={{ marginRight: "8px" }}>
        Search
      </label> */}
      <div className="flex-grow-1">
        <input
          type="text"
          className="px-2 py-2"
          style={{
            border: "none",
            width: "50%",
            // flexBasis: "100%",
            // flexGrow: "1",
            outline: "rgb(200,200,200)",
            borderRadius: "4px",
          }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ transform: "translateX(-32px)" }}
        ></i>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default SearchBar;
