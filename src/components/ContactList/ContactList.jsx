import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilteredContacts);

  const handleRemove = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactList}>
      {filtered.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default ContactList;
