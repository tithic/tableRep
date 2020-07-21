import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
    root: {
        width: '100%',
        margin: 0
    },
    disabled: {
        background: '#eeeeee',
    },
    InputProps: {
        height: '40px'
    },
    inputProps: {
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '12px'
    }
})

const CustomTextField = ({ classes, label, name, value, disabled, handleChange }) =>
    <TextField 
        disabled={disabled} 
        className={`${classes.root} ${disabled ? classes.disabled : ''}`} 
        name={name} 
        variant='filled' 
        margin='dense' 
        InputProps={{
            placeholder: label,
            className: classes.InputProps
        }} 
        inputProps={{ className: classes.inputProps}} 
        value={value} 
        onChange={handleChange} 
    />

CustomTextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.node,
    disabled: PropTypes.oneOf([true, false]),
    handleChange: PropTypes.func
}

CustomTextField.defaultProps = {
    disabled: false
}

export default withStyles(styles)(CustomTextField)
