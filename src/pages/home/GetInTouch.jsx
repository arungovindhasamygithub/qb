import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/your_form_id/viewform'; // Replace with your Google Form URL

    // Replace with actual Google Form entry IDs for name, email, and message fields
    const entryIds = {
      NAME_FIELD_ID: 'entry.your_name_id_here',
      EMAIL_FIELD_ID: 'entry.your_email_id_here',
      MESSAGE_FIELD_ID: 'entry.your_message_id_here'
    };

    // Construct query parameters
    const queryParams = `?${entryIds.NAME_FIELD_ID}=${encodeURIComponent(formData.name)}&${entryIds.EMAIL_FIELD_ID}=${encodeURIComponent(formData.email)}&${entryIds.MESSAGE_FIELD_ID}=${encodeURIComponent(formData.message)}`;
    
    // Redirect user to Google Form with query parameters
    window.location.href = googleFormUrl + queryParams;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <form className="w-full max-w-lg bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input 
            id="name" 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            rows="5" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
