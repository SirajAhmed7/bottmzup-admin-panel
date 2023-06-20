import { useState } from "react";

function EventsRow({ evnt, i, columns }) {
  const [action, setAction] = useState(null);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const objString = (str) => str.toLowerCase().split(" ").join("_");

  function handleOptionClick() {
    setOptionsOpen((open) => !open);
  }

  function handleAction(e) {
    setAction(e.target.value);
  }

  return (
    <tr>
      <th scope="row">{i + 1}</th>
      {columns.map((col, i) => {
        if (i === 0) return null;

        if (i === 7) {
          return (
            <td
              value={action}
              onClick={handleOptionClick}
              className="rounded-3 position-relative cursor-pointer table-options"
            >
              <span className="position-absolute top-50 start-50 translate-middle">
                <i class="fa-solid fa-ellipsis"></i>
              </span>
              <div
                className="position-absolute event-options border"
                style={{ display: optionsOpen ? "block" : "none" }}
              >
                <ul class="list-group">
                  <button className="border px-3 py-2 bg-light w-100 h-100">
                    Accept
                  </button>

                  <button className="border px-3 py-2 bg-light w-100 h-100">
                    Reject
                  </button>

                  <button className="border px-3 py-2 bg-light w-100 h-100">
                    Delete
                  </button>
                </ul>
              </div>
            </td>
          );
        }

        /* <td className="text-truncate"> */

        return (
          <td>
            {(col === "Date" && new Date(evnt.date).toDateString().slice(4)) ||
              evnt[objString(col)]}
          </td>
        );
      })}
    </tr>
  );
}

export default EventsRow;
