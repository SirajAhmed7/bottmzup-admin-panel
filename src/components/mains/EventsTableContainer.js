import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Table } from "rsuite";
import startCase from "lodash/startCase";

// const allEventsArr = [
//   {
//     timings: "08:00 PM - 01:30 AM",
//     created_by: 10,
//     id: 34,
//     genre: "Bollywood, Commercial",
//     updated_by: null,
//     event_name: "GLITZ AND GAMOUR LADIES NIGHT",
//     price_range: "Free - Rs.2000",
//     updated_at: null,
//     event_venue: "Veleno, Andheri West, Mumbai",
//     description:
//       "Greetings from Club Veleno. You all are invited to GLITZ AND GAMOUR LADIES NIGHT. Connect with fellow music enthusiasts, and experience the vibrant spirit of the subcontinent in the most exhilarating way possible.",
//     status: "Approved",
//     images_url:
//       "https://storage.googleapis.com/nightlife---22.appspot.com/events/WhatsApp%20Image%202023-06-12%20at%2020.24.15.jpeg",
//     featuring: "DJ REE X DJ DIPESH",
//     contact: 9321226695,
//     curated_by: "Veleno",
//     carousel: null,
//     day: "Wednesday",
//     terms: "{}",
//     date: "2023-06-14",
//     created_at: "2023-06-13T03:11:57.076652",
//   },
// ];

function EventsTableContainer() {
  const [allEvents, setAllEvents] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  const accessToken = sessionStorage.getItem("admin_token");

  const events = async () => {
    return await axios.get(
      `https://nightlife-2710.herokuapp.com/admin-events?admin_access_token=${accessToken}`
    );
  };

  useEffect(() => {
    events()
      .then((response) => {
        console.log(response?.data);
        setAllEvents(response?.data);
        const keys = Object.keys(response?.data[0]);
        setColumns(keys.map((key) => key));
        setTimeout(() => {
          setLoading(false);
        }, 600);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Add column name here and it will be added in the table
  // const columns = [
  //   "Sr no.",
  //   "Event Name",
  //   "Event venue",
  //   "Day",
  //   "Date",
  //   "Timings",
  //   "Price range",
  //   "Action",
  // ];

  // return (
  //   <div className="m-5 pb-0 table-div table-responsive">
  //     <table class="table">
  //       <thead class="table-dark rounded-3">
  //         <tr>
  //           {columns.map((col, i) => (
  //             <th scope="col" key={i}>
  //               {col}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {allEvents.map((evnt, i) => (
  //           <EventsRow evnt={evnt} i={i} key={evnt.id} columns={columns} />
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  const noColumns = [
    "id",
    "description",
    "timings",
    "genre",
    "price_range",
    "featuring",
    "carousel",
    "terms",
    "images_url",
    "created_at",
    "created_by",
    "updated_at",
    "updated_by",
    "status",
  ];

  return (
    <div className="m-5 pb-0 table-div table-responsive">
      <Table height={300} data={allEvents} loading={loading}>
        {columns.map((column) => {
          if (noColumns.includes(column)) return;
          return (
            <Table.Column
              flexGrow={1}
              key={column}
              // sortable={true}
              width={100}
            >
              <Table.HeaderCell
                style={{
                  background: "#f8fafc",
                  color: "#334155",
                }}
              >
                {startCase(column)}
              </Table.HeaderCell>
              <Table.Cell
                style={{
                  color: "#1e293b",
                }}
                dataKey={column}
              />
            </Table.Column>
          );
        })}
      </Table>
    </div>
  );
}

export default EventsTableContainer;
