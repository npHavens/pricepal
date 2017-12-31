import React from 'react';

const QtyInput = ({ handleChange }) => (
     <div>
        <label
          htmlFor="qty-input"
          className="control-label col-sm-4"
        >Quantity Purchased</label>
        <div>
          <input
            name="qty"
            id="qty-input"
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
);

export default QtyInput;