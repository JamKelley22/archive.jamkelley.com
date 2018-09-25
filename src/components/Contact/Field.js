// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Stateless component / Functional component
const Field = (props) => (
  <div id='field'>
    <label id='fieldLabel' style={{color:"white"}}>{props.label}</label>
    {
      props.isTextArea
      &&
      <textarea
        id='fieldInput'
        cols="40"
        rows="5"
        onChange={props.onChange}
        type={props.textarea ? 'textarea' : 'text'}
        value={props.value}
      ></textarea>
    }
    {
      !props.isTextArea
      &&
      <input
        id='fieldInput'
        onChange={props.onChange}
        type={props.textarea ? 'textarea' : 'text'}
        value={props.value}
      />
    }
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};

export default Field;
