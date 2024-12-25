import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { emaiJsCredentials } from "../constants/emailJs";

// Initialize EmailJS
const initializeEmailJS = () => {
  emailjs.init(emaiJsCredentials.EMAILJS_PUBLIC_KEY); // EmailJS public key
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const { name, email, subject, message } = formData;

    emailjs
      .send(
        emaiJsCredentials.EMAILJS_SERVICE_ID,
        emaiJsCredentials.EMAILJS_TEMPLATE_ID,
        { name, email, subject, message },
        emaiJsCredentials.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setError("Failed to send message!");
        }
      );
  };

  return (
    <div>
      <div className="text-center py-4 mt-16">
        <h1 className="font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif text-blue-950 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
          GET IN TOUCH
        </h1>

        <p
          className="text-gray-800 text-center text-lg mt-4"
          style={{
            fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          }}>
          Thank you for reaching out to Sparkware. We are here to assist you with any inquiries or issues you
          may have.
          <br />
          Please fill out the form below, and we will respond to your query via email within 24 hours.
        </p>
      </div>

      <div className="text-center mt-5 mb-5">
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="max-w-xl mx-auto p-4 bg-white border border-gray-300 rounded-md">
          <label htmlFor="name" className="block text-left text-gray-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label htmlFor="email" className="block text-left text-gray-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label htmlFor="subject" className="block text-left text-gray-700 mb-1">
            Subject:
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={handleChange}
            id="subject"
            name="subject"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />

          <label htmlFor="message" className="block text-left text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            name="message"
            rows="4"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-y"></textarea>

          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-950 rounded-md cursor-pointer hover:bg-blue-400">
            Send Message
          </button>
          {message && (
            <div className="text-center bg-blue-500 text-white p-2 mt-2">
              <p>{message}</p>
            </div>
          )}
          {error && (
            <div className="text-center bg-red-600 text-black p-2 mt-2">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
