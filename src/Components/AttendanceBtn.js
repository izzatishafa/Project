export default function AttendanceBtn() {
  return (
    <div className="flex flex-row gap-2">
       <button
        className={`p-1 my-2 w-60 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}
      >
        Present
      </button>
      {/* <button
        className={`px-3 py-1.5 my-2 w-30 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}
      >
        Record attendance
      </button>
      <button className={`px-3 py-1.5 my-2 w-30 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}>
        Record Departure
      </button> */}
    </div>
  );
}
