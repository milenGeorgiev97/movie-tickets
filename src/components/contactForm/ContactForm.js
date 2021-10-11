import { useEffect, useState } from "react";
import { Input } from "reactstrap";

export function ContactForm(props) {
  const [contact, setContact] = useState(props.contact);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setContact({ ...contact, [name]: value });
  };
  useEffect(() => {
    props.handleInput(contact, props.index);
    // eslint-disable-next-line
  }, [contact]);
  return (
    <>
      <h3 className="title mx-auto">Ticket Number {props.index + 1}</h3>

      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleInput}
      />
      <label>Phone</label>
      <Input
        type="number"
        name="phone"
        value={contact.phone}
        onChange={handleInput}
      />
      <label>E-mail</label>
      <Input
        type="text"
        name="email"
        value={contact.email}
        onChange={handleInput}
      />
    </>
  );
}
