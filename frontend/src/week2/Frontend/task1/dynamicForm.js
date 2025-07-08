import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Paper,
  Box,
  Button,
  FormHelperText
} from "@mui/material";
import './dynamicForm.css';

const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateField = (field, value) => {
    if (field.required) {
      if (
        value === undefined ||
        value === "" ||
        (field.type === "checkbox" && value !== true)
      ) {
        return `${field.label} is required`;
      }
    }

    if (field.name === "name" && value.length > 15) {
      return "Name must be 15 characters or fewer";
    }

    if (field.name === "age") {
      const age = parseInt(value, 10);
      if (isNaN(age) || age > 100) {
        return "Age must be a number ≤ 100";
      }
    }

    if (field.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Enter a valid email address";
      }
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    schema.fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  const renderField = (field) => {
    const error = errors[field.name];

    switch (field.type) {
      case "select":
        return (
          <FormControl
            fullWidth
            key={field.name}
            margin="normal"
            required={field.required}
            error={!!error}
          >
            <InputLabel>{field.label}</InputLabel>
            <Select
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
            >
              {field.options.map((opt, idx) => (
                <MenuItem key={idx} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        );

      case "checkbox":
        return (
          <FormControlLabel
            key={field.name}
            control={
              <Checkbox
                name={field.name}
                checked={!!formData[field.name]}
                onChange={handleChange}
              />
            }
            label={field.label}
          />
        );

      default:
        return (
          <TextField
            key={field.name}
            fullWidth
            margin="normal"
            type={field.type}
            label={field.label}
            name={field.name}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
        );
    }
  };

  return (
  <>
    <h2>{schema.title}</h2>
    <Box className="form-wrapper">
    <Typography variant="h4" gutterBottom>
        
    </Typography>

    <form onSubmit={handleSubmit}>
        {schema.fields.map((field) => renderField(field))}

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Submit
        </Button>
    </form>

    <Typography variant="h6" mt={4}>
        Live Output:
    </Typography>

    <Paper elevation={3} className="output-box">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
    </Paper>
</Box>
</>
  );
};

export default DynamicForm;
