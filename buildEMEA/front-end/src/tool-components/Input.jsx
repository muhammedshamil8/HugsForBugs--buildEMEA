import React from 'react';

const Input = ({ type, placeholder, onChange, label }) => {
  return (
    <div className="relative">
      <input
        type={type}
        className="
          block
          pt-6
          px-6
          pb-1
          text-md
          text-white
          w-full
          bg-neutral-700
          rounded-md
          focus:outline-none
          focus:ring-0
          appearance-none
          peer
        "
        placeholder={placeholder}
        onChange={onChange}
      />
      <label
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-74
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
