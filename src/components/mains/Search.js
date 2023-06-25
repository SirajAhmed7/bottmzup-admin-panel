function Search({ value, onChange }) {
  return (
    <div
      className="w-100 px-4 py-3"
      style={{ background: "#f8fafc", textAlign: "center" }}
    >
      {/* <label className="fs-6" style={{ marginRight: "8px" }}>
        Search
      </label> */}
      <input
        type="text"
        className="px-2 py-2"
        style={{
          border: "none",
          width: "70%",
          outline: "rgb(200,200,200)",
          borderRadius: "4px",
        }}
        placeholder="Search event name"
        value={value}
        onChange={onChange}
      />
      <i
        class="fa-solid fa-magnifying-glass"
        style={{ transform: "translateX(-32px)" }}
      ></i>
    </div>
  );
}

export default Search;
