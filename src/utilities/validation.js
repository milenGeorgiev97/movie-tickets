import { emailRegex, numsRegex } from "../constants";

export const firstPageValidation = (state) => {
  const ticketAmountNum = parseInt(state.ticketAmount) || 0;
  if (state.movie === "" || ticketAmountNum <= 0 || state.email === "")
    return false;
  return true;
};

export const secondPageValidation = (contacts) => {
  let errMsg = "";
  contacts.forEach((contact, index) => {
    if (contact.name === "" || contact.phone === "") {
      return (errMsg = "All fields required!");
    }
    if (numsRegex.test(String(contact.phone).toLowerCase()) === false)
      return (errMsg = `Phone ${index + 1} must contain nums only!`);
    if (emailRegex.test(String(contact.email).toLowerCase()) === false)
      return (errMsg = `Enter valid email on Ticket ${index + 1}!`);
  });
  return errMsg;
};
