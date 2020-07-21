import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import BaseTable, { AutoResizer, Column } from "react-base-table";
import "react-base-table/styles.css";
import components from "./components";
import SelectionCell from "./SelectionCell.js";

const _handleSelectChange = (
  { selected, rowData, rowIndex, rowKey },
  selectedRowKeys,
  setSelectedRowKeys,
  data,
  onChangeCellCheckbox,
  onChangeHeaderCheckbox
) => {
  console.log("data", data, selectedRowKeys);
  let selectedKeys = [].concat(selectedRowKeys);
  if (rowData) {
    selectedKeys = [].concat(selectedRowKeys);
    const key = rowData[rowKey];
    if (selected) {
      if (!selectedKeys.includes(key)) {
        selectedKeys.push(key);
      }
    } else {
      const index = selectedKeys.indexOf(key);
      if (index > -1) {
        selectedKeys.splice(index, 1);
      }
    }
  } else {
    if (selected) {
      console.log("here", data);
      selectedKeys = data.map(it => it[rowKey]);
    } else {
      console.log("here2");
      selectedKeys = [];
    }
  }
  console.log(selectedKeys);
  setSelectedRowKeys(selectedKeys);
  if (rowData) {
    onChangeCellCheckbox &&
      onChangeCellCheckbox(selected, rowData, rowIndex, rowKey);
  } else {
    onChangeHeaderCheckbox && onChangeHeaderCheckbox(selected, data);
  }
};

const Table = ({
  data,
  columns,
  children,
  rowKey,
  sortBy,
  headerHeight,
  rowHeight,
  onColumnSort,
  onClickRow,
  onDoubleClickRow,
  rowClassName,
  selectable,
  onChangeCellCheckbox,
  onChangeHeaderCheckbox
}) => {
  console.log("render", data);
  let updatedChildren = null;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  if (selectable) {
    const selectColumn = (
      <Column
        width={50}
        key="__selection__"
        resizable={false}
        cellRenderer={SelectionCell}
        headerRenderer={SelectionCell}
        selectedRowKeys={selectedRowKeys}
        rowKey={rowKey}
        onChange={selectionObject =>
          _handleSelectChange(
            selectionObject,
            selectedRowKeys,
            setSelectedRowKeys,
            [...data],
            onChangeCellCheckbox,
            onChangeHeaderCheckbox
          )
        }
      />
    );
    updatedChildren = [selectColumn, ...children];
  }

  return (
    <AutoResizer>
      {({ width, height }) => (
        <BaseTable
          fixed
          data={data}
          width={width}
          height={height}
          headerHeight={headerHeight}
          rowHeight={rowHeight}
          rowClassName={rowClassName}
          rowKey={rowKey}
          components={components}
          sortBy={sortBy}
          onColumnSort={onColumnSort}
          rowEventHandlers={{
            onClick: onClickRow,
            onDoubleClick: onDoubleClickRow
          }}
          columns={columns}
        >
          {updatedChildren}
        </BaseTable>
      )}
    </AutoResizer>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  rowKey: PropTypes.string,
  sortBy: PropTypes.object,
  headerHeight: PropTypes.number,
  rowHeight: PropTypes.number,
  onColumnSort: PropTypes.func,
  onClickRow: PropTypes.func,
  onDoubleClickRow: PropTypes.func,
  rowClassName: PropTypes.func,
  onChangeCellCheckbox: PropTypes.func,
  onChangeHeaderCheckbox: PropTypes.func
};

Table.defaultProps = {
  sortBy: {}
};

export default memo(Table);
