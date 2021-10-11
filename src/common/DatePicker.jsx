import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function MyDatePicker({ selected, handleDateSelect, handleDateChange }) {
  return (
    <DatePicker
      selected={selected}
      onSelect={handleDateSelect}
      onChange={handleDateChange}
    />
  );
}
