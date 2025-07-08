import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import './Dashboard.css';

// --- ProtectedRoute ---
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true" ? children : <Navigate to="/" />;
};

// --- Login Page with Validation ---
const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const trimmed = username.trim();
    if (!trimmed) return "Username is required";
    if (trimmed.length < 3) return "Username must be at least 3 characters";
    if (trimmed.length > 10) return "Username must be 10 characters or fewer";
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username.trim());
      navigate("/dashboard");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="paper">
        <Typography variant="h4" className="heading">Login</Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            error={!!error}
            helperText={error}
            className="input"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth className="button">
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

// --- Dashboard with NavBar ---
const DashboardContent = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">My Dashboard</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="subtitle1">Hello, {username}</Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Paper elevation={3} className="paper">
          <Typography variant="h4" className="heading">Welcome, {username || "User"}!</Typography>
          <Typography className="subtext">This is your protected dashboard content.</Typography>
        </Paper>
      </Container>
    </>
  );
};

// --- Main App ---
const Dashboard = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardContent />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
