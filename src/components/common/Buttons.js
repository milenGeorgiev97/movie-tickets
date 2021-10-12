import { Button } from "reactstrap";

export const BtnRound = ({ onClick, children }) => {
  return (
    <Button block className="btn-round " color="danger" onClick={onClick}>
      {children}
    </Button>
  );
};
