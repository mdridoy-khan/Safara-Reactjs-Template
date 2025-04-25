import React from "react";

const StepItem = ({ icon, title, description, bgColor }) => {
  return (
    <div className="flex gap-4 items-start mb-6">
      <div className={`text-white p-3 rounded ${bgColor}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-md mb-2">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default StepItem;
