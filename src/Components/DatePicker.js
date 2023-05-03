import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import calendar from "../Assets/calendar.png";


const ReactDatePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const customPlaceholderText = props.placeholder
    ? props.placeholder
    : "Select Date";

  const shouldShowPlaceholder =
    !props.isMobile || (props.isMobile && !props.noMobilePlaceholder);

  return (
    <div
      className={`border border-black rounded-lg text-black placeholder:font-poppins lg:w-48 sm:w-10 text-center ${
        props.isMobile ? "sm:flex sm:justify-center" : ""
      }`}
    >
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText={shouldShowPlaceholder ? customPlaceholderText : ""}
          className={`hover:bg-hv-gray pl-4 py-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-poppins placeholder:text-black`}
          style={{ color: "black" }}
        />

        <div className={`absolute top-1.5 right-3 w-5 h-5 flex-items-center justify-center`}>
          <img src={calendar} alt="" />
        </div>
      </div>
    </div>
  );
};

ReactDatePicker.defaultProps = {
  noMobilePlaceholder: false,
};

export default ReactDatePicker;











// {format} menerima dua parameter, yaitu date dan formatString. Parameter date merupakan objek tanggal
// yang ingin diubah formatnya, sedangkan parameter formatString merupakan string yang digunakan untuk
// menentukan format yang diinginkan.
