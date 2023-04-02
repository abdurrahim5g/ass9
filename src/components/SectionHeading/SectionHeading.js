import React from "react";

const SectionHeading = ({ title, subtitle, color }) => {
  return (
    <div className="section-heading text-center mb-12">
      <h3 className={`fancy-font text-2xl mb-2  ${color}`}>{subtitle}</h3>
      <h3 className={`text-3xl font-semibold  ${color}`}>{title}</h3>
    </div>
  );
};

export default SectionHeading;
