export const firstPageValidation = (state) => {
  console.log(state);
  const ticketAmountNum = parseInt(state.ticketAmount) || 0;
  if (state.movie === "" || ticketAmountNum <= 0 || state.email === "")
    return false;
  return true;
};

export const secondPageValidation = (state) => {};
