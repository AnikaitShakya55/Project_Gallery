import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-[80%] py-10 px-4 flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg max-w-5xl w-full p-6 md:p-10 flex flex-col md:flex-row gap-10">
        {/* Recruiter Message */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Job Opportunities
          </h2>
          <p className="text-gray-200 mb-2">
            If you're a recruiter, we'd love to hear from you!
          </p>
          <p className="text-gray-300">
            For job opportunities and inquiries, please use the contact form.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-xl text-white font-semibold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
