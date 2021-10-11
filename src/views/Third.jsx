import React, { useContext } from "react";
import { Button, Card, Form, Container, Row, Col } from "reactstrap";

// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { AppContext } from "../utilities/Context";
import { gotoPage } from "../utilities/gotoPage";

function Third(props) {
  const [state] = useContext(AppContext);

  return (
    <>
      {!state.contacts ? (
        gotoPage("/first")
      ) : (
        <div>
          {/* <ExamplesNavbar /> */}

          <div className="filter" />

          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Booking Summary</h3>

                  <Form className="register-form">
                    <label>
                      Movie <strong>{state.movie}</strong>
                    </label>
                    <br />
                    <label>
                      Ticket Count <strong>{state.ticketAmount}</strong>
                    </label>

                    <label>
                      Date <strong>{state.date.toString()}</strong>
                    </label>
                    {state.contacts.map((contact, index) => {
                      return (
                        <Card className="card-register ml-auto mr-auto">
                          <div key={index}>
                            <label>Ticket {index + 1} </label>
                            <br />
                            <label>
                              Name <strong>{contact.name}</strong>
                            </label>
                            <br />

                            <label>
                              Phone <strong>{contact.phone}</strong>
                            </label>
                            <br />

                            <label>
                              E-mail <strong>{contact.email}</strong>
                            </label>
                          </div>
                        </Card>
                      );
                    })}
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      onClick={() => props.pushHistory("/second")}
                    >
                      Prev
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}

export { Third };
