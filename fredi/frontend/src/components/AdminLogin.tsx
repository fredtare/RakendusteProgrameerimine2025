import React, { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useAuth } from "./tasks/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        login(data.token);
         navigate("/tasks/admin");
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error");
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h4">Admin Login</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" variant="contained">Login</Button>
          {error && <Typography color="error">{error}</Typography>}
        </Stack>
      </form>
    </Box>
  );
};

export default AdminLogin;
