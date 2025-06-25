import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    postalCode: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Have questions? We can help
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our video security experts can help you implement the right security system for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-md shadow-sm p-10 border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-3">
                    First name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-3">
                    Last name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-3">
                    Work email*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="workEmail"
                    name="workEmail"
                    placeholder="Work email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-3">
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-3">
                    Company name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="companyName"
                    name="companyName"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-3">
                    Postal code*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="postalCode"
                    name="postalCode"
                    placeholder="Postal code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Message Field - Full Width */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  What can we help with?*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="What can we help with?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-md transition-colors duration-200 text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
