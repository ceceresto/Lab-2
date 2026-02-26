function Contact() {
  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! Your message has been received.");
      }}>
        <input type="text" id="name" placeholder="Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" id="SubmitBtn">Send</button>
      </form>
    </section>
  );
}

export default Contact;