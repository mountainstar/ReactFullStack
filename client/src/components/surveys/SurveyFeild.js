import React from "react";

export default ({ input, label, meta: { error, touched} }) => {
  return (
    <div>
      <label style={{ fontSize: 16, fontWeight: '800', color: '#000'}}>{label}</label>
      <input style={{ marginBottom: 5}}{...input} />
      <div className='red-text' style={{ marginBottom: 20 }}>{touched && error}</div>
    </div>
  );
};
