import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} vslue={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames(
          'form-control form-control-lg',
          {'is-invalid': error }
        )}
        value={value}
        name={name} 
        onChange={onChange}>
          {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

SelectListGroup.proptypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default SelectListGroup;