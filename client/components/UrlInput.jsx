import React from 'react';

const UrlInput = ({ handleChange }) => (
  <div className="form-group row">
    <label
      htmlFor="url-input"
      className="control-label col-sm-2"
    >Url</label>
    <div className="col-sm-8">
      <input
        name="url"
        id="url-input"
        type="text"
        onChange={handleChange}
      />
    </div>
  </div>
);

export default UrlInput;