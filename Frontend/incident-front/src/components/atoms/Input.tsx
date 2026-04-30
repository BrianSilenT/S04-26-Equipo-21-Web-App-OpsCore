type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  label?: string;
};

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  label,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="
          px-3 py-2
          border border-gray-300
          rounded-md
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          transition-all
        "
      />
    </div>
  );
};