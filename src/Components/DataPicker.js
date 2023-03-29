import React, {useState} from 'react'

const DatePick = () => {
    const [date, setDate] = useState();

    console.log("Date", date);

    return (
        <div className={`flex items-center border border-t border-black rounded-md text-black text-md font-poppins w-44 pl-6 pr-2 py-1`}>
            <input type="date" onChange={e => setDate(e.target.value)} placeholder="Pilih Tanggal" />
        </div>
    )
}

export default DatePick;

