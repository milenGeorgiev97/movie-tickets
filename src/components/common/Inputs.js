import { Input } from "reactstrap";

export const Select = (props) => {
  return (
    <Input
      type="select"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </Input>
  );
};

export const NumInput = (props) => {
  return (
    <Input
      type="number"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
