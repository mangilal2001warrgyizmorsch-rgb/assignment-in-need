import React, { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, helperText, error, id, type = "text", ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={className}
          style={error ? { borderColor: "hsl(0, 84%, 60%)" } : undefined}
          {...props}
        />
        {error && <span className="form-error">{error}</span>}
        {!error && helperText && <span className="form-helper">{helperText}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", label, helperText, error, id, rows = 4, ...props }, ref) => {
    const inputId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={className}
          style={error ? { borderColor: "hsl(0, 84%, 60%)" } : undefined}
          {...props}
        />
        {error && <span className="form-error">{error}</span>}
        {!error && helperText && <span className="form-helper">{helperText}</span>}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: { label: string; value: string | number }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, helperText, error, id, options, ...props }, ref) => {
    const inputId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={inputId} className="form-label">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={inputId}
          className={className}
          style={error ? { borderColor: "hsl(0, 84%, 60%)" } : undefined}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <span className="form-error">{error}</span>}
        {!error && helperText && <span className="form-helper">{helperText}</span>}
      </div>
    );
  }
);
Select.displayName = "Select";
