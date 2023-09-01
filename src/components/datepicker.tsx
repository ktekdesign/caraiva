"use client";
import '@taak/react-modern-calendar-datepicker/lib/DatePicker.css';
import { utils } from "@taak/react-modern-calendar-datepicker";
import DatePicker from "@taak/react-modern-calendar-datepicker";

const DatePickerElement = ({selectedDayRange, setSelectedDayRange}) => {
    const formatInputValue = () => {
        const {from, to} = selectedDayRange
        if (!from || !to) return '';
        
        const checkin = new Date(Date.UTC(from.year, from.month - 1, from.day, 3, 0, 0, 0))
        const checkout = new Date(Date.UTC(to.year, to.month - 1, to.day, 3, 0, 0, 0))
        return `Checkin: ${new Intl.DateTimeFormat('pt-BR').format(checkin)} - Checkout: ${new Intl.DateTimeFormat('pt-BR').format(checkout)}`;
    };
    return (
        <DatePicker
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            inputPlaceholder="Escolha as datas de checkin e checkout"
            minimumDate={utils("en").getToday()}
            formatInputText={formatInputValue} // format value
            inputClassName="datepickerInput" // custom class
            shouldHighlightWeekends
        />
    )
}

export default DatePickerElement