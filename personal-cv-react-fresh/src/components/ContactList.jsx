import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        console.log("Fetched contacts:", data); 
        setContacts(data);
      })
      .catch(err => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div>
      <h2>Saved Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
