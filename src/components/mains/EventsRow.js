import { useState } from "react";

function EventsRow({ evnt, i, columns }) {
  const [action, setAction] = useState(null);

  const objString = (str) => str.toLowerCase().split(" ").join("_");

  function handleAction(e) {
    setAction(e.target.value);
  }

  return (
    <tr>
      <th scope="row">{i + 1}</th>
      {columns.map((col, i) => {
        if (i === 0) return null;

        if (i === 1) {
          return (
            <select
              value={action}
              onChange={handleAction}
              className="rounded-3"
            >
              <option value={null}>Action</option>
              <option value={"accept"}>
                <span>✅</span> Accept
              </option>
              <option value={"reject"}>
                <span>❌</span> Reject
              </option>
              <option value={"delete"}>
                <span>🗑️</span> Delete
              </option>
            </select>
          );
        }

        return (
          <td className="text-truncate">
            {(col === "Date" && new Date(evnt.date).toDateString().slice(4)) ||
              evnt[objString(col)]}
          </td>
        );
      })}
    </tr>
  );
}

export default EventsRow;
