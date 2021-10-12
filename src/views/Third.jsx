import React, { useContext } from "react";
import { Card, Form, Container, Row, Col } from "reactstrap";
import { CameraImg, TicketImg } from "../common/Img";
import { AppContext } from "../utilities/Context";
import { gotoPage } from "../utilities/gotoPage";
import { dateFormater } from "../utilities/dateFormat";
import { BtnRound } from "../components/common/Buttons";

function Third(props) {
  const [state] = useContext(AppContext);

  return (
    <>
      {!state.contacts ? (
        gotoPage("/first")
      ) : (
        <div>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Booking Summary</h3>

                  <Form className="register-form">
                    <CameraImg />
                    <label>
                      Movie: <strong>{state.movie}</strong>
                    </label>
                    <br />
                    <label>
                      Ticket Count: <strong>{state.ticketAmount}</strong>
                    </label>
                    <br />

                    <label>
                      Date:{" "}
                      <strong>{dateFormater(state.date, "YYYY/MM/DD")}</strong>
                    </label>

                    <hr />

                    {state.contacts.map((contact, index) => {
                      return (
                        <div key={index}>
                          <TicketImg /> <label>Ticket {index + 1} </label>
                          <br />
                          <label>
                            Name: <strong>{contact.name}</strong>
                          </label>
                          <br />
                          <label>
                            Phone: <strong>{contact.phone}</strong>
                          </label>
                          <br />
                          <label>
                            E-mail: <strong>{contact.email}</strong>
                          </label>
                          <hr />
                        </div>
                      );
                    })}
                    <BtnRound onClick={() => props.pushHistory("/second")}>
                      Prev
                    </BtnRound>
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
