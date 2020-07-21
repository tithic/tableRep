import React from "react";
import CustomSelect from "./CustomSelect";
import CustomTextField from "./CustomTextField";

const InputCell = props => {
  const { field, cellData, handleDataCellChange, rowIndex } = props;
  if ((cellData && cellData.disabled) || false) {
    return (
      <CustomTextField
        label={field.label}
        disabled={true}
        name={field.name}
        value={(cellData && cellData.value) || ""}
      />
    );
  } else {
    switch (field.dataKey) {
      case "select":
        return (
          <CustomSelect
            label={field.label}
            name={field.name}
            options={(cellData && cellData.options) || []}
            value={(cellData && cellData.value) || null}
            handleChange={(event, value) =>
              handleDataCellChange(value, rowIndex, field.dataKey, field.type)
            }
          />
        );
      default:
        return (
          <CustomTextField
            label={field.label}
            name={field.name}
            value={(cellData && cellData.value) || ""}
            handleChange={event =>
              handleDataCellChange(event, rowIndex, field.dataKey, field.type)
            }
          />
        );
    }
  }
};

export default {
  TableCell: InputCell
};
