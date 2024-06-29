import React from "react";

export default function CustomInput({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error ">{error && <p>{error}</p>}</div>
    </div>
  );
}

{
  /* <div className="control no-margin">
<label htmlFor="confirm-password">Confirm Password</label>
<input
  id="confirm-password"
  type="password"
  name="confirm-password"
  required
  placeholder="give the password again"
/>
</div> */
}
