import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Loading from "../../../common/Loading";

function DashboardStats() {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);

  const accessToken = sessionStorage.getItem("admin_token");

  const events = async () => {
    return await axios.get(
      `https://nightlife-2710.herokuapp.com/admin-users?admin_access_token=${accessToken}`
    );
  };

  useEffect(() => {
    events()
      .then((response) => {
        console.log(response?.data);
        setStats(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="relative flex  gap-3 w-full">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Stat
            title={"Users Registered"}
            num={stats.num_users}
            color={"green"}
          />
          <Stat
            title={"Total Income"}
            num={stats.total_amount}
            color={"blue"}
          />
          <Stat
            title={"Total Unpaid"}
            num={stats.total_amount_unpaid}
            color={"red"}
          />
        </>
      )}
    </div>
  );
}

export default DashboardStats;

function Stat({ title, num, color }) {
  const colorClass =
    // color === "green"
    //   ? "from-green-200 to-green-300"
    //   : color === "blue"
    //   ? "from-sky-200 to-sky-300"
    //   : "from-rose-300 to-rose-400";
    color === "green"
      ? "bg-green-300"
      : color === "blue"
      ? "bg-sky-300"
      : "bg-rose-400";

  let icon;

  switch (title) {
    case "Users Registered":
      icon = "fa-users";
      break;
    case "Total Income":
      icon = "fa-money-bill-wave";
      break;
    case "Total Unpaid":
      icon = "fa-money-bill-transfer";
      break;

    default:
      break;
  }

  return (
    <div
      className={`relative p-4 md:px-7 md:py-9 bg-gradient-to-br ${colorClass} grow shrink rounded-2xl text-gray-800}`}
    >
      <p className="text-base lg:text-xl font-medium mb-2 lg:mb-5">{title}</p>
      <p className="text-2xl lg:text-5xl font-bold">{num}</p>
      <i
        class={`fa-solid ${icon} absolute right-4 md:right-7 top-2/4 text-3xl md:text-5xl lg:text-8xl -translate-y-1/2 text-gray-50 opacity-25`}
      ></i>
    </div>
  );
}
