import React, { useState } from "react";

const FormsWithCombineState: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display the form values
    console.log("First Name:", formData.firstName);
    console.log("Last Name:", formData.lastName);
    console.log("Mobile:", formData.mobile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({
    //   ...formData,
    //   [e.target.id]: e.target.value,
    // });

    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Form Values:</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Mobile: {formData.mobile}</p>
      </div>
    </div>
  );
};

export default FormsWithCombineState;
