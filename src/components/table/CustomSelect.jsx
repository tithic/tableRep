import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
  formControl: {
    width: '100%'
  },
  InputProps: {
    height: '40px',
    marginBottom:'8px'
  },
  inputProps: {
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '12px'
  }
})

const CustomSelect = ({ classes, label, value, disabled, options, handleChange, noOptionsText }) => {
    return <FormControl
      className={classes.formControl}
    >
      <Autocomplete
        options={options}
        size="small"
        disabled={disabled}
        noOptionsText={noOptionsText}
        getOptionLabel={(option) => option.label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField   variant="filled" {...params}

                                              margin='normal'
                                              InputProps={{
                                                ...params.InputProps,
                                                placeholder: label,
                                                className: classes.InputProps

                                              }}
                                              inputProps=
                                                {{ ...params.inputProps,className: classes.inputProps}}
                                               />}
      >
      </Autocomplete>
    </FormControl>
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.shape({
    label:PropTypes.string,
    value:PropTypes.string
  }),
  disabled: PropTypes.oneOf([true, false]),
  options: PropTypes.array,
  handleChange: PropTypes.func,
}

CustomSelect.defaultProps = {
  options: [],
  disabled: false,
  noOptionsText: 'no options',
}

export default withStyles(styles)(CustomSelect)
