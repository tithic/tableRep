import React from "react";
import CustomSelect from "./CustomSelect";
import Types from "./types";

const Cell = ({ className, cellData, column }) => {
  const { dataKey } = column;
  switch (dataKey) {
    case "select":
      return (
        <CustomSelect
          label={"test"}
          name={"name"}
          options={(cellData && cellData.options) || []}
          value={(cellData && cellData.value) || null}
        />
      );
    case "type":
      return <Types types={cellData} />;
    default:
      return <div className={className}>{cellData}</div>;
  }
};

export default {
  TableCell: Cell
};
