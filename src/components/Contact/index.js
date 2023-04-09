import { useState } from "react";
import "./index.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let err = null;
    if (!formData.firstName || formData.firstName === "") {
      err = "first name required";
    }
    if (!formData.lastName || formData.lastName === "") {
      err = "last name required";
    }
    if (!formData.email || formData.email === "") {
      err = "email required";
    }
    if (!formData.message || formData.message === "") {
      err = "message required";
    }
    if (err){
      setError(err)
      e.preventDefault();
    }
    else{
      setError(null);
    }
    // console.log(formData);
  };
  return (
    <section className="contact-section">
      <h3>Contact</h3>
      <article className="contact-container">
        <div className="input-field half">
          <p>First name</p>
          <input type="text" name="firstName" onChange={handleInputChange} />
        </div>
        <div className="input-field half">
          <p>Last name</p>
          <input type="text" name="lastName" onChange={handleInputChange} />
        </div>
        <div className="input-field">
          <p>E-mail</p>
          <input type="email" name="email" onChange={handleInputChange} />
        </div>
        <div className="input-field">
          <p>Message</p>
          <textarea
            rows={4}
            className="message"
            name="message"
            onChange={handleInputChange}
          />
        </div>
        {error && <div class="err">{error}</div>}
        <a href={`mailto:mramazant@gmail.com?subject=${formData.firstName} ${formData.lastName} wants to connect.&body=${formData.message}`} class="btn" onClick={handleSubmit} disabled={error}>
          Submit
        </a>
      </article>
    </section>
  );
};

export default Contact;
