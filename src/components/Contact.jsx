import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contactnumber: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    contactnumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateName = (name) => {
    return name.length >= 3;
  };

  const validateEmail = (email) => {
    const emailRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (contactnumber) => {
    const contactNumberRegex = /^\d{10}$/;
    return contactNumberRegex.test(contactnumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(formData.fullname);
    const isEmailValid = validateEmail(formData.email);
    const isContactNumberValid = validateContactNumber(formData.contactnumber);

    if (!isNameValid || !isEmailValid || !isContactNumberValid) {
      setErrors({
        fullname: isNameValid ? '' : 'Name must contain at least 3 letters.',
        email: isEmailValid ? '' : 'Email must contain at least one special character and one number.',
        contactnumber: isContactNumberValid ? '' : 'Contact number must be exactly 10 digits and contain only numbers.'
      });
      return;
    }

    console.log(formData);

    setFormData({
      fullname: '',
      email: '',
      contactnumber: '',
      message: ''
    });
    setErrors({
      fullname: '',
      email: '',
      contactnumber: ''
    });
  };

  return (
    <div className="container-fluid pt-2">
      <div className="row justify-content-center bg-secondary">
        <div className="col-md-6 pt-5 pb-5">
          <h2 className="text-center pb-5">Contact</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group pb-3">
              <label htmlFor="fullname">Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                placeholder="Enter your name"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <div className="text-warning">{errors.fullname}</div>}
            </div>
            <div className="form-group pb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-warning">{errors.email}</div>}
            </div>
            <div className="form-group pb-4">
              <label htmlFor="contactnumber">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="contactnumber"
                name="contactnumber"
                placeholder="Enter your contact number"
                required
                value={formData.contactnumber}
                onChange={handleChange}
              />
              {errors.contactnumber && <div className="text-warning">{errors.contactnumber}</div>}
            </div>
            <div className="form-group pb-4">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2 pb-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
