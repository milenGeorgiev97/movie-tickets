import { GetHistory } from "../../utilities/history";

export const WithHistory =
  (Comment) =>
  ({ ...props }) => {
    const history = GetHistory();

    const pushHistory = (url) => {
      history.push(url);
    };
    return <Comment pushHistory={pushHistory} {...props} />;
  };
