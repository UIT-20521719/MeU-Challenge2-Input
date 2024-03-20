import React from "react";

export default function Input({
  hover = false,
  focus = false,
  label = "Label",
  disabled = false,
  helperText = "",
  startIcon,
  endIcon,
  error = false,
  value,
  placeholder = "Placeholder",
  size = "md",
  fullWidth = false,
  multiline,
  row = "1",
}) {
  return (
    <div
      className={`
        container
        ${error && "error"}  
        ${focus && "focus"} 
        ${hover && "hover"} 
        ${disabled && "disabled"}
        ${fullWidth && "fullWidth"}
       `}
    >
      <label>{label}</label>
      <div className={`container__input  ${size}`}>
        {startIcon && <span className="startIcon">{startIcon}</span>}
        {multiline ? (
          <textarea
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            className={`input `}
            rows={row}
          ></textarea>
        ) : (
          <input
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            className={`input`}
          ></input>
        )}
        {endIcon && <span className="endIcon">{endIcon}</span>}
      </div>
      <p>{helperText}</p>
    </div>
  );
}
