import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  info,
  type,
  onChange,
}) => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon} style={{width: '25px'}} />
          </span>
        </div>
        <input 
          className={classnames(
            'form-control form-control-lg',
            {'is-invalid': error }
          )}
          type={type}
          value={value}
          placeholder={placeholder} 
          name={name} 
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
};

InputGroup.proptypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  icon: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
