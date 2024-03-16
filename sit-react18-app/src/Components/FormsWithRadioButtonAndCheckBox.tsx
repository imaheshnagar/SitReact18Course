import React, { useState } from "react";

const FormsWithRadioButtonAndCheckBox: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    gender: "",
    habits: {
      reading: false,
      writing: false,
      coding: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display the form values
    console.log("First Name:", formData.firstName);
    console.log("Last Name:", formData.lastName);
    console.log("Mobile:", formData.mobile);
    console.log("Gender:", formData.gender);
    console.log("Habits:", formData.habits);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox") {
      setFormData((prevState) => {
        return {
          ...prevState,
          habits: {
            ...prevState.habits,
            [e.target.id]: e.target.checked,
          },
        };
      });
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [e.target.id]: e.target.value,
        };
      });
    }
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
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="reading">Reading:</label>
          <input
            type="checkbox"
            id="reading"
            checked={formData.habits.reading}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="writing">Writing:</label>
          <input
            type="checkbox"
            id="writing"
            checked={formData.habits.writing}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="coding">Coding:</label>
          <input
            type="checkbox"
            id="coding"
            checked={formData.habits.coding}
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
        <p>Gender: {formData.gender}</p>
        <p>Habits:</p>
        <ul>
          <li>Reading: {formData.habits.reading ? "Yes" : "No"}</li>
          <li>Writing: {formData.habits.writing ? "Yes" : "No"}</li>
          <li>Coding: {formData.habits.coding ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  );
};
export default FormsWithRadioButtonAndCheckBox;
