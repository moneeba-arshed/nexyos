import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FiPhoneCall } from "react-icons/fi";
import { PiEnvelopeFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { HiClock } from "react-icons/hi2";
const Contact = () => {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    email: "",
    company: "",
    product: "",
    country: "",
    website: "",
    message: "",
    phone: "",
    business_type: "",
    verification_code: "",
  });

  const validateForm = () => {
    const error = {};
    if (!formData.email) {
      error.email = "Email is required";
    }
    if (!formData.company) {
      error.company = "Company is required";
    }
    if (!formData.product) {
      error.product = "Product is required";
    }
    if (!formData.country) {
      error.country = "Country is required";
    }
    if (!formData.website) {
      error.website = "Website is required";
    }
    if (!formData.message) {
      error.message = "Message is required";
    }
    if (!formData.phone) {
      error.phone = "Phone is required";
    }
    if (!formData.business_type) {
      error.business_type = "Business Type is required";
    }
    if (!formData.verification_code) {
      error.verification_code = "Verification Code is required";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      console.log("Form validation errors", errors);
      return;
    }

    try {
      const response = await fetch("https://portal.nexyos.com/save_contact_form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error submitting form", {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });
        return;
      }

      const result = await response.json();
      toast.success(result.message);
      setFormData({
        email: "",
        company: "",
        product: "",
        country: "",
        website: "",
        message: "",
        phone: "",
        business_type: "",
        verification_code: "",
      });

    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error("Unexpected error while submitting the form", error);
    }
  };

  return (
    <section className="contact py-80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-5">
          {/* Left Column (8/12) */}
          <div className="col-span-8 ">
            <div className="contact-box shadow-lg rounded-xl  px-9 py-14 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-12 grid-cols-2 gap-4 ">
                  {/* Row 1 */}
                  <div className="md:col-span-4 col-span-6">
                    <label htmlFor="email" className="form-label text-start block mb-2">*Your Email</label>
                    <input
                      type="email"
                      className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="company" className="form-label text-start block mb-2">*Company</label>
                    <input
                      type="text"
                      className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                      id="company"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="product" className="form-label text-start block mb-2">*Product Interested In</label>
                    <select
                      id="product"
                      className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                    >
                      <option>Select Product</option>
                      <option value="Product A">Product A</option>
                      <option value="Product B">Product B</option>
                    </select>
                  </div>
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="country" className="form-label text-start block mb-2">*Country</label>
                    <input
                      type="text"
                      className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                      id="country"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="website" className="form-label text-start block mb-2">*Your Website</label>
                    <input
                      type="text"
                      className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                      id="website"
                      name="website"
                      placeholder="Your Website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="message" className="form-label text-start block mb-2">*Message</label>
                    <textarea
                      className="common-input w-full px-7 content-center border border-gray-300 rounded-md resize-none"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="phone" className="form-label text-start block mb-2">*Your Phone</label>
                    <div className="flex gap-2">
                      <select
                        className="common-input  px-2 py-3 border border-gray-300 rounded-md"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                     style={{width:'30%'}} >
                        <option>+92</option>
                        <option>+91</option>
                        <option>+1</option>
                      </select>
                      <input
                        type="number"
                        className="common-input w-3/4 px-7 py-3 border border-gray-300 rounded-md"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-4   col-span-6">
                    <label htmlFor="business_type" className="form-label text-start block mb-2">*Business Type</label>
                    <select
                      id="business_type"
                      className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                      name="business_type"
                      value={formData.business_type}
                      onChange={handleChange}
                    >
                      <option>Select Type</option>
                      <option value="Retail">Retail</option>
                      <option value="Wholesale">Wholesale</option>
                    </select>
                  </div>

                  {/* Row 3 */}
                  <div className="md:col-span-4   col-span-6 flex items-end">
                    <div className="flex flex-col w-full">
                      <label className="form-label text-start block mb-2">*Verification Code</label>
                      <div className="flex gap-2">
                        <div className="text-gray-500 font-bold text-xl">8 7 H K</div>
                        <input
                          type="text"
                          className="common-input w-full px-7 py-3 border border-gray-300 rounded-md"
                          placeholder="Enter Code"
                          name="verification_code"
                          value={formData.verification_code}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                 <div className="col-span-12 text-center pt-6 flex justify-center items-center">
  <button
    type="submit"
    className="btn btn-main py-3 px-8 rounded-md bg-[#00667c] hover:bg-[#3C8A9B] cursor-pointer text-white"
  >
    Let’s Talk
  </button>
</div>

                </div>
              </form>
            </div>
          </div>

          {/* Right Column (4/12) */}
          <div className="md:col-span-4">
            <div className="contact-box border border-gray-100 rounded-xl px-5 py-5">
              <h6 className="text-xl font-semibold mb-12 text-start">Get In Touch</h6>
              <div className="flex gap-4 mb-4">
                <span className="w-10 h-10 justify-items-center content-center rounded-full border border-gray-300 text-xl" style={{ color: "#3c8a9b" }}>
                  <FiPhoneCall />
                </span>
                <Link to="tel:+918008008841" className="text-md text-gray-800 hover:text-orange-500">
                  +918008008841
                </Link>
                <Link to="tel:8008008841" className="text-md text-gray-800 hover:text-orange-500">
                  , 8008008841
                </Link>
              </div>
              <div className="flex gap-4 mb-4">
                <span className="w-10 h-10 justify-items-center content-center rounded-full border border-gray-300 text-xl" style={{ color: "#3c8a9b" }}>
                  <PiEnvelopeFill />
                </span>
                <Link to="mailto:info@nexyos.com" className="text-md text-gray-800 hover:text-orange-500">
                  info@nexyos.com
                </Link>
              </div>
              <div className="flex gap-4 mb-4">
                <span className="w-10 h-10 px-4 justify-items-center content-center rounded-full border border-gray-300 text-xl" style={{ color: "#3c8a9b" }}>
                  <FaLocationDot />
                </span>
                <span className="text-md text-gray-800">
                  <strong>Address(Qatar): </strong> 4TH Floor, office num 4, Building number 20 Muntazah, zone 24, Doha Qatar
                </span>
              </div>
               <div className="flex gap-4 mb-4">
                <span className="w-10 h-10 px-4 justify-items-center content-center rounded-full border border-gray-300 text-xl" style={{ color: "#3c8a9b" }}>
                  <FaLocationDot />
                </span>
                <span className="text-md text-gray-800">
                  <strong>Address(India):</strong> Near, police station road,
                  Koyilandy, Kerala 673305, India
                </span>
              </div>
                   <div className="flex gap-4 mb-4">
                <span
                  className="w-10 h-10 justify-items-center content-center rounded-full border border-gray-300   text-2xl"
                  style={{
                    color: "#3c8a9b",
                  }}
                >
                  <HiClock />
                </span>
                <span className="text-md text-gray-900 ">
                  <strong>Hours:</strong>
                  10:00 - 18:00, Mon - Sat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
