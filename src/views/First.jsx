import React, { useContext } from "react";
import { Card, Form, Container, Row, Col } from "reactstrap";
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { AppContext } from "../utilities/Context";
import { firstPageValidation } from "../utilities/validation";
import { MyDatePicker } from "../components/common/MyDatePicker";
import { ErrorMessage } from "../components/error/ErorrMessage";
import { BtnRound } from "../components/common/Buttons";
import { Select, NumInput } from "../components/common/Inputs";
import { MOVIES } from "../constants";
function First(props) {
  const [state, dispatch] = useContext(AppContext);

  const handleInput = ({ target }) => {
    const { value, name } = target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = () => {
    if (firstPageValidation(state) === false) {
      return dispatch({ type: "error", payload: "All fields required!!!" });
    }
    dispatch({ type: "error", payload: "" });
    dispatch({ type: "createTicketArr" });
    props.pushHistory("/second");
  };
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="filter" />
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" lg="4">
            <Card className="card-register ml-auto mr-auto">
              <h3 className="title mx-auto">Welcome</h3>
              <Form className="register-form">
                <label>Movie</label>
                <Select
                  name="movie"
                  value={state.movie}
                  onChange={handleInput}
                  options={MOVIES}
                />

                <label>Ticket Count</label>
                <NumInput
                  name="ticketAmount"
                  value={state.ticketAmount}
                  onChange={handleInput}
                />

                <label>Date</label>
                <MyDatePicker
                  value={state.date}
                  onChange={(date) => dispatch({ type: "date", payload: date })}
                />
                <ErrorMessage message={state.error} />

                <BtnRound onClick={handleSubmit}>Next</BtnRound>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { First };
