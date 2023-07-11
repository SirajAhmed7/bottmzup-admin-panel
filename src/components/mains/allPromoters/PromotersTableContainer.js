import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Table } from "rsuite";
import startCase from "lodash/startCase";
import SearchBar from "../SearchBar";

function PromotersTableContainer({ handleOpenModal }) {
  const [allPromoters, setAllPromoters] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const accessToken = sessionStorage.getItem("admin_token");

  const events = async () => {
    return await axios.get(
      `https://nightlife-2710.herokuapp.com/admin_all_promoters?admin_access_token=${accessToken}`
    );
  };

  useEffect(() => {
    events()
      .then((response) => {
        // console.log(response?.data);
        setAllPromoters(response?.data);
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
      return allPromoters.sort((a, b) => {
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
    return allPromoters;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  const noColumns = ["promoter_name", "email_id", "num_event"];

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function getData(func) {
    if (func === "search") {
      if (searchText) {
        return allPromoters.filter((event) =>
          event.promoter_name.toLowerCase().startsWith(searchText.toLowerCase())
        );
      } else {
        return allPromoters;
      }
    }

    return getSortData();
  }

  return (
    <div className="table-div">
      <SearchBar
        value={searchText}
        placeholder={"Search promoter"}
        onChange={handleSearch}
      >
        <button
          className="btn"
          style={{ background: "#e5e7eb" }}
          onClick={handleOpenModal}
        >
          <i class="fa-solid fa-plus"></i> Add Promoter
        </button>
      </SearchBar>
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
          if (!noColumns.includes(column)) return;
          return (
            <Table.Column
              // flexGrow={column === "event_name" ? 2 : 0}
              key={column}
              // width={150}
              flexGrow={1}
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
                  background: "#f3f4f6",
                  color: "#374151",
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

export default PromotersTableContainer;
