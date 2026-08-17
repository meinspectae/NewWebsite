interface FieldWrapperProps {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
}

function FieldWrapper({ label, required, htmlFor, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[13px] font-semibold text-dark/80">
        {label}
        {required && <span className="text-primary-blue"> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-dark/12 bg-white px-4 py-3 text-[14px] text-dark placeholder:text-dark/35 outline-none transition-colors focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15";

interface TextFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextField({ id, label, type = "text", required, placeholder, value, onChange }: TextFieldProps) {
  return (
    <FieldWrapper label={label} required={required} htmlFor={id}>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      />
    </FieldWrapper>
  );
}

interface TextAreaFieldProps {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
}

export function TextAreaField({ id, label, required, placeholder, rows = 4, value, onChange }: TextAreaFieldProps) {
  return (
    <FieldWrapper label={label} required={required} htmlFor={id}>
      <textarea
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClasses} resize-none`}
      />
    </FieldWrapper>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  required?: boolean;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function SelectField({ id, label, required, options, value, onChange }: SelectFieldProps) {
  return (
    <FieldWrapper label={label} required={required} htmlFor={id}>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%236B7075%22><path d=%22M5.5 7.5l4.5 5 4.5-5z%22/></svg>')] bg-[length:16px] bg-[right_14px_center] bg-no-repeat pr-10`}
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
