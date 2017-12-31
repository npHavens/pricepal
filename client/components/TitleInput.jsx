import React from 'react';
import { connect } from 'react-redux';

const TitleInput = ({ handleChange }) => (
  <div>
    <label htmlFor="title-input">Title</label>
    <div>
      <input
        name="name"
        onChange={handleChange}
      />
    </div>
  </div>
);

export default TitleInput;