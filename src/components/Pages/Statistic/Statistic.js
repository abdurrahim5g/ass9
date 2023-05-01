import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import StatisticReport from "../../StatisticReport/StatisticReport";
import { useLoaderData } from "react-router-dom";

const Statistic = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="statistic-page-component  py-16 bg-slate-50">
      <SectionHeading
        title={"Statistic"}
        subtitle={"Explore Our"}
      ></SectionHeading>

      <div className="container">
        <div
          className="w-12/12 md:w-9/12 lg:w-6/12 mx-auto"
          style={{ height: "450px" }}
        >
          <StatisticReport data={data}></StatisticReport>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
