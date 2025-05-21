const UserFormInput = ({
  labelText,
  value,
  onChange,
  inputId,
  inputType,
  autoComplete,
  placeholder,
}) => {
  return (
    <div className="py-1">
      <label htmlFor={inputId} className="text-sm font-bold">
        {labelText}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        id={inputId}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="${hasError ? 'focus:outline-red-600' : 'focus:outline-blue-800'} border-gray-500 border-1 rounded-sm w-full h-7 focus:outline-2 focus:outline-blue-800 focus:outline-offset-2 text-sm pl-2"
      />
    </div>
  );
};

export default UserFormInput;
