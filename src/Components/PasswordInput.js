import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative bg-gray-100 rounded-md p-1">
      <input
        type={showPassword ? "password" : "text"}
        placeholder="***********"
        className="w-[270px] pl-1 bg-gray-100 font-poppins text-xs rounded-md outline-none"
        {...props}
      />
      <button
        type="button"
        className="absolute outline-none right-3 top-1/2 transform -translate-y-1/2"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash className="w-5 h-5 text-gray-400" />
        ) : (
          <FaEye className="w-5 h-5 text-gray-400" />
        )}
      </button>
    </div>
  );
}

export default PasswordInput
