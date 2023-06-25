import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Table } from "rsuite";
import startCase from "lodash/startCase";
import Search from "./Search";

function EventsTableContainer() {
  const [allEvents, setAllEvents] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const accessToken = sessionStorage.getItem("admin_token");

  const events = async () => {
    return await axios.get(
      `https://nightlife-2710.herokuapp.com/admin-events?admin_access_token=${accessToken}`
    );
  };

  useEffect(() => {
    events()
      .then((response) => {
        // console.log(response?.data);
        setAllEvents(response?.data);
        const keys = Object.keys(response?.data[0]);
        // setData(response?.data);
        setColumns(keys.map((key) => key));
        setTimeout(() => {
          setLoading(false);
        }, 600);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getSortData = () => {
    if (sortColumn && sortType) {
      return allEvents.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (sortColumn === "date") {
          if (sortType === "asc") {
            return x > y ? 1 : x < y ? -1 : 0;
          } else {
            return x < y ? 1 : x > y ? -1 : 0;
          }
        }
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return allEvents;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

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

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function getData(func) {
    if (func === "search") {
      if (searchText) {
        return allEvents.filter((event) =>
          event.event_name.toLowerCase().startsWith(searchText.toLowerCase())
        );
      } else {
        return allEvents;
      }
    }

    return getSortData();
  }

  return (
    <div className="m-5 pb-0 table-div">
      <Search value={searchText} onChange={handleSearch} />
      <Table
        hover={false}
        height={350}
        data={getData(searchText ? "search" : "")}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
      >
        {columns.map((column) => {
          if (noColumns.includes(column)) return;
          return (
            <Table.Column
              // flexGrow={column === "event_name" ? 2 : 0}
              key={column}
              width={150}
              sortable={
                column === "day" ||
                column === "contact" ||
                column === "event_venue"
                  ? false
                  : true
              }
              fullText
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
