import moment from "moment";
export const dateFormater = (date, format) => {
  return moment(date).format(format);
};
