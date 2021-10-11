export const contactInfo = { name: "", phone: "", email: "" };

export const initialState = {
  ticketAmount: 0,
  date: "",
  movie: "",
  error: ""
};
export function reducer(state, action) {
  switch (action.type) {
    case "ticketAmount":
      return { ...state, ticketAmount: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "movie":
      return { ...state, movie: action.payload };
    case "createTicketArr":
      return {
        ...state,
        contacts: new Array(parseInt(state.ticketAmount) || 0).fill(contactInfo)
      };
    case "contacts":
      return {
        ...state,
        contacts: action.payload
      };
    case "error":
      return {
        ...state,
        error: action.payload
      };
    case "clear":
      return { initialState };
    default:
      throw new Error();
  }
}
