import { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import calendar from '../Assets/calendar.png'




const ReactDatePicker = ({ placeholder }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    const customPlaceholderText = placeholder ? placeholder : 'Select Date';

    return (
        <div className={`border border-black rounded-lg text-black placeholder:font-poppins w-48 text-center`}>
            <div className="relative">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText={customPlaceholderText}
                className={`hover:bg-hv-gray px-3 py-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-poppins placeholder:text-black`}
                style={{ color: 'black' }}
            />

            <div className="absolute top-1.5 right-4 h-full w-5 h-5 flex-iems-center justify-center">
                <img src={calendar} alt="" />
            </div>

            <span className="absolute top-2 right-3 hidden">
                {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}
            </span>
            </div>
        </div>


        // <div className={`border border-black rounded-lg text-black placeholder:font-poppins w-48 text-center`}>
        // <div className="relative">
        //     <DatePicker
        //     selected={selectedDate}
        //     onChange={handleDateChange}
        //     dateFormat="dd/MM/yyyy"
        //     placeholderText={customPlaceholderText}
        //     className={`px-4 py-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-poppins placeholder:text-black`}
        //     style={{ color: 'black' }}
        //     />

        //     <div className="absolute bottom-0 right-3 h-full w-5 h-5 flex items-center justify-center">
        //     {/* <FontAwesomeIcon icon={faCalendar} /> */}
        //     <img src={calendar} alt="" />
        //     </div>
        // </div>
        // <span className="absolute top-2 right-3 hidden">
        //     {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}
        // </span>
        // </div>
    )
}

export default ReactDatePicker;


