import { GetHistory } from "../../utilities/history";

export const WithHistory =
  (Component) =>
  ({ ...props }) => {
    const history = GetHistory();

    const pushHistory = (url) => {
      history.push(url);
    };
    return <Component pushHistory={pushHistory} {...props} />;
  };
