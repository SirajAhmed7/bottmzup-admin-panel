function MailInput({ value, onChange, label }) {
  return (
    <div className="flex w-full border rounded-lg">
      <label className="h-full px-4 p-2 bg-gray-100 rounded-lg text-base">
        {label}
      </label>
      <input
        type={label === "Email to:" ? "email" : "text"}
        className="grow px-4 py-2 text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}

export default MailInput;
