import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Name is required";
      } else if (!/^[A-Za-z]+(?:\.?[A-Za-z]+){0,2}$/.test(value)) {
        newErrors.name = "Name is invalid. Use only letters and up to 2 dots.";
      } else if (value.length > 20) {
        newErrors.name = "Name must be 20 characters or less.";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "address") {
      if (!value.trim()) {
        newErrors.address = "Address is required";
      } else {
        delete newErrors.address;
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Email is invalid";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "phone") {
      if (!value.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^[0-9]{10}$/.test(value)) {
        newErrors.phone = "Enter a valid 10-digit phone number";
      } else {
        delete newErrors.phone;
      }
    }

    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z]+(?:\.?[A-Za-z]+){0,2}$/.test(formData.name)) {
      newErrors.name = "Name is invalid. Use only letters and up to 2 dots.";
    } else if (formData.name.length > 20) {
      newErrors.name = "Name must be 20 characters or less.";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Input Form</h2>

        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type Name..."
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          label="Address"
          name="address"
          fullWidth
          value={formData.address}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type Address..."
          error={!!errors.address}
          helperText={errors.address}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type Email..."
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Type Phone No..."
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <Button variant="contained" type="submit" >
          Submit
        </Button>
      </form>

      <div className="result-container">
        <h3>Display Form</h3>
        <p>Typed Name: <strong>{formData.name}</strong></p>
        <p>Typed Address: <strong>{formData.address}</strong></p>
        <p>Typed Email: <strong>{formData.email}</strong></p>
        <p>Typed Phone No: <strong>{formData.phone}</strong></p>
      </div>
    </div>
  );
}

export default Form;
