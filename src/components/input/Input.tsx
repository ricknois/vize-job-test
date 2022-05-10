import { Eye, EyeClosed } from "phosphor-react";
import { useState } from "react";

interface Props {
  label: string;
  setInput: (value: string) => void;
  hidden?: boolean;
}

export default function Input({ label, setInput, hidden }: Props) {
  const [inputHidden, setInputHidden] = useState(true);
  return (
    <div className="mt-10 relative">
      <input
        type={inputHidden ? "password" : "text"}
        name={label}
        id={label}
        placeholder={label}
        onChange={(e) => setInput(e.target.value)}
        className="
          peer h-10 w-full
          border-b-2 border-font
          text-black placeholder-transparent
          focus:outline-none
          focus:border-white bg-transparent
        "
      />
      <label
        htmlFor={label}
        className="
            absolute left-0 -top-3.5 
            text-font text-sm
            transition-all
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-input
            peer-placeholder-shown:top-2
            peer-focus:-top-3.5 peer-focus:text-input
            peer-focus:text-sm
          "
      >
        {label}
      </label>
      {hidden && (
        <button
          className="absolute inset-y-0 right-0 flex items-center"
          onClick={() => setInputHidden(!inputHidden)}
        >
          {inputHidden ? <EyeClosed /> : <Eye />}
        </button>
      )}
    </div>
  );
}
