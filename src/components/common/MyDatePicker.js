import ReactDatetime from "react-datetime";

export const MyDatePicker = (props) => {
  return (
    <ReactDatetime
      value={props.value}
      dateFormat="DD-MM-YYYY"
      onChange={props.onChange}
      inputProps={{
        name: "date",
        placeholder: "Pick Date"
      }}
    />
  );
};
