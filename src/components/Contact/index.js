import { useState } from "react";
import "./index.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    if (!formData.firstName || formData.firstName == "") {
      alert("first name required");
    } else if (!formData.lastName || formData.lastName == "") {
      alert("last name required");
    } else if (!formData.email || formData.email == "") {
      alert("email required");
    } else if (!formData.message || formData.message == "") {
      alert("message required");
    } else {
      console.log(formData);
    }
  };
  return (
    <div>
      <div className="contactPage">
        <p>First name</p>
        <input type="text" name="firstName" onChange={handleInputChange} />
        <hr></hr>
        <p>Last name</p>
        <input type="text" name="lastName" onChange={handleInputChange} />
        <hr></hr>
        <p>E-mail</p>
        <input type="email" name="email" onChange={handleInputChange} />
        <hr></hr>
        <p>Message</p>
        <input
          type="text"
          className="message"
          name="message"
          onChange={handleInputChange}
        />
        <hr></hr>
        <a href="mailto:mramazant@gmail.com">
          <button onClick={handleSubmit}>Submit</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
