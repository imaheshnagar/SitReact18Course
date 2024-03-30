import React, { SyntheticEvent, useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    // initialize form data state
    username: "",
    password: "",
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Your custom logic for handling form submission
    console.log("Form submitted with data:", formData);

    // Here you can proceed with any further logic such as AJAX requests, form validation, etc.
  };

  const handleChange = (event: SyntheticEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
