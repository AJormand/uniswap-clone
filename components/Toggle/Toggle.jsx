import React from "react";

//internal imports
import style from "./Toggle.module.css";

const Toggle = ({ label }) => {
  return (
    <div className={style.Toggle}>
      <div className={style.Toggle_switch_box}>
        <input
          type="checkbox"
          className={style.Toggle_checkbox}
          name={label}
          id={label}
        />
        <label htmlFor={label} className={style.Toggle_label}>
          <span className={style.Toggle_inner} />
          <span className={style.Toggle_switch} />
        </label>
      </div>
    </div>
  );
};

export default Toggle;
