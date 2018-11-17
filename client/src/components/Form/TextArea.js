import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control container-fluid" rows="30" {...props} />
  </div>;

  export default TextArea;
