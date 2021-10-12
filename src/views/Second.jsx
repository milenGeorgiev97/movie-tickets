import React, { useContext, useEffect, useState } from "react";
import { Card, Form, Container, Row, Col } from "reactstrap";
import { AppContext } from "../utilities/Context";
import { ContactForm } from "../components/contactForm/ContactForm";
import { BtnRound } from "../components/common/Buttons";
import { ErrorMessage } from "../components/error/ErorrMessage";
import { secondPageValidation } from "../utilities/validation";

function Second(props) {
  const [state, dispatch] = useContext(AppContext);
  const [contactArr, setContactArr] = useState(state.contactArr);

  useEffect(() => {
    setContactArr(state.contacts);
    // eslint-disable-next-line
  }, []);

  const handleInput = (contact, index) => {
    let tempArr = [...contactArr];
    tempArr.splice(index, 1, contact);
    setContactArr(tempArr);
    dispatch({ type: "contacts", payload: tempArr });
  };

  const handleSubmit = () => {
    let errMsg = "";
    errMsg = secondPageValidation(contactArr);

    dispatch({ type: "error", payload: errMsg });
    if (errMsg) return;

    props.pushHistory("/third");
  };

  return (
    <>
      {!contactArr ? (
        <div>Loading</div>
      ) : (
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <Form className="register-form">
                  {contactArr.map((contact, index) => {
                    return (
                      <div key={index}>
                        <ContactForm
                          index={index}
                          handleInput={handleInput}
                          contact={contact}
                        />
                        <hr />
                      </div>
                    );
                  })}
                  <ErrorMessage message={state.error} />

                  <BtnRound onClick={handleSubmit}>Next</BtnRound>
                  <BtnRound onClick={() => props.pushHistory("/first")}>
                    Prev
                  </BtnRound>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export { Second };
