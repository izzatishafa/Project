import classNames from "classnames";

export default function BackBtn({ onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={classNames(`text-red border border-red font-poppins bg-white w-full 
            rounded-md mb-3 p-1 hover:bg-red hover:text-white`, props.className)}
    >
      Back
    </button>
  );
}
