import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact({ islanguage }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsEmailSent(false); // Reset email sent status when toggling visibility
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS details
    const serviceId = "service_3yafxlv";
    const templateId = "template_0jq63ws";
    const userId = "d5gEanhYiwsepP83e"; // Replace this with your public API key

    // Send the form data using EmailJS
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        // Clear the form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        // Set the email sent status to true
        setIsEmailSent(true);
        // Close the contact form after a delay
        setTimeout(() => {
          toggleFormVisibility();
        }, 4000); // 3000 milliseconds (4 seconds) delay
      },
      (error) => {
        console.error("Email sending failed:", error.text);
      }
    );
  };

  return (
    <div className="contactBtn">
      <button id="contactButton" onClick={toggleFormVisibility}>
        {islanguage === "FR" ? "Me contacter" : "Contact me"}
      </button>

      {isFormVisible && (
        <div className="contact-overlay">
          <div className="contact-form">
            <button className="close-button" onClick={toggleFormVisibility}>
              &#x2716;
            </button>
            {isEmailSent ? (
              <div className="confirmation-message">
                {islanguage === "FR"
                  ? "Message envoyé avec succès!"
                  : "Message sent successfully!"}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    {islanguage === "FR" ? "Nom" : "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group last-form-group">
                  <label htmlFor="message">
                    {islanguage === "FR" ? "Message" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  {islanguage === "FR" ? "Envoyer" : "Submit"}
                </button>
              </form>
            )}
            <p>📧 burel-edouard@hotmail.fr</p>
            <p>📞 (+33) 07-77-34-38-89</p>
          </div>
        </div>
      )}
    </div>
  );
}
