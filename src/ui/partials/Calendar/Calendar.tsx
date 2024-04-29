import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";

const Calendar = () => {
    const [value, setValue] = useState();

    return (
        <div aria-label="Controlled calendar" className="mt-5">
            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </div>
    )
}

export default Calendar;