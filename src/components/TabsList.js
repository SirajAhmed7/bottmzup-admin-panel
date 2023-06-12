import { useState } from "react";
import Tab from "../common/Tab";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";

const TabsList = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick() {
    setIsOpen((i) => !i);
  }

  useImperativeHandle(ref, () => {
    return {
      handleNavClick: handleNavClick,
    };
  });

  return (
    <div
      className="d-flex flex-column px-lg-3 align-items-stretch pt-2 pb-3 tab-list"
      style={
        isOpen
          ? { transform: "translateY(0)" }
          : { transform: "translateY(-100%)" }
      }
    >
      <Tab name="Dashboard" icon="house" routeTo="/admin-dashboard" />
      <Tab name="All Events" icon="calendar-days" routeTo="/admin-all-events" />
      <Tab
        name="All Promoters"
        icon="chart-line"
        routeTo="/admin-all-promoters"
      />
      <Tab name="Payments" icon="money-bill" routeTo="/admin-payments" />
    </div>
  );
});

export default TabsList;
