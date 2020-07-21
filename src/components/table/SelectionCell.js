import React from "react";
import { Checkbox } from "@rmwc/checkbox";
class SelectionCell extends React.PureComponent {
  _handleChange = e => {
    const { rowData, rowIndex, column } = this.props;
    const { onChange, rowKey } = column;
    onChange({ selected: e.target.checked, rowData, rowIndex, rowKey });
  };

  render() {
    console.log("render");
    const { rowData, column } = this.props;
    const { selectedRowKeys, rowKey } = column;
    // const data = this.props.container.props.data;
    // const dataSize = (data && data.length) || 0;
    let checked = false;
    if (rowData) {
      checked =
        selectedRowKeys && selectedRowKeys.includes(rowData && rowData[rowKey]);
    } else {
      console.log(selectedRowKeys, rowData);
      if (selectedRowKeys.length === 0) {
        checked = false;
      } else {
        checked = true;
      }

      // if (dataSize > selectedRowKeys.length && selectedRowKeys.length > 0) {
      //   return <Checkbox indeterminate={true} onChange={this._handleChange} />;
      // }
      // console.log("selectedRowKeys.length", selectedRowKeys.length, dataSize);
      // if (selectedRowKeys.length === dataSize && dataSize.length > 0) {
      //   checked = true;
      // } else if (selectedRowKeys.length >= 0 && dataSize > 0) {
      //   checked = true;
      // }
    }

    return <Checkbox checked={checked} onChange={this._handleChange} />;
  }
}

export default SelectionCell;
