import { useEffect, useState } from "react";
import { TextInput } from "../common/Inputs";

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
    <div>
      <h3 className="title mx-auto">Ticket {props.index + 1}</h3>

      <label>Name</label>
      <TextInput name="name" value={contact.name} onChange={handleInput} />
      <label>Phone</label>
      <TextInput name="phone" value={contact.phone} onChange={handleInput} />
      <label>E-mail</label>
      <TextInput name="email" value={contact.email} onChange={handleInput} />
    </div>
  );
}
