import { Grid, Input, Typography, Button } from "@mui/material";
import { useState } from "react";

const UserForm = () => {
  const [form, setForm] = useState({ id: "", name: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", form);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
        padding: "20px",
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="h1"
          sx={{ color: "#000000", fontSize: "24px", marginBottom: "20px" }}
        >
          User Form
        </Typography>
      </Grid>

      {/* ID */}
      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component="label"
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={form.id}
          onChange={handleChange}
        />
      </Grid>

      {/* Name */}
      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={form.name}
          onChange={handleChange}
        />
      </Grid>

      {/* Submit */}
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            marginTop: "20px",
            backgroundColor: "#00c6e6",
            "&:hover": {
              opacity: 0.7,
              backgroundColor: "#00c6e6",
            },
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;
