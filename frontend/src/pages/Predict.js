import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  LinearProgress,
  Chip,
  Alert
} from "@mui/material";

function Predict() {
  const [formData, setFormData] = useState({ age: "", glucose: "", bmi: "" });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePredict = () => {
    const age = Number(formData.age);
    const glucose = Number(formData.glucose);
    const bmi = Number(formData.bmi);

    if (formData.age === "" || formData.glucose === "" || formData.bmi === "") {
      setError("Please fill all fields correctly.");
      setResult(null);
      return;
    }

    setError("");

    let score = 0;
    if (age > 60) score += 30;
    if (glucose > 140) score += 40;
    if (bmi > 30) score += 30;

    let riskLevel = "";
    let riskColor = "";

    if (score >= 0 && score <= 29) {
      riskLevel = "Low";
      riskColor = "success";
    } else if (score >= 30 && score <= 59) {
      riskLevel = "Moderate";
      riskColor = "warning";
    } else {
      riskLevel = "High";
      riskColor = "error";
    }

    setResult({ score, riskLevel, riskColor });

    // Save history to localStorage
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push({ date: new Date().toLocaleDateString(), age, glucose, bmi, risk: riskLevel });
    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Stroke Risk Prediction
      </Typography>

      <Card sx={{ maxWidth: 600, mt: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Age"
                name="age"
                type="number"
                fullWidth
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Glucose Level"
                name="glucose"
                type="number"
                fullWidth
                value={formData.glucose}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="BMI"
                name="bmi"
                type="number"
                fullWidth
                value={formData.bmi}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" fullWidth size="large" onClick={handlePredict}>
                Predict Risk
              </Button>
            </Grid>
          </Grid>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {result && (
            <Box sx={{ mt: 3 }}>
              <Typography gutterBottom>Risk Probability</Typography>
              <LinearProgress
                variant="determinate"
                value={result.score}
                sx={{ height: 10, borderRadius: 5 }}
              />
              <Box sx={{ mt: 2 }}>
                <Chip label={`${result.riskLevel} Risk`} color={result.riskColor} />
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>

      <Box sx={{ mt: 4 }}>
        <Alert severity="info">
          ⚠️ This prediction is AI-assisted and not a medical diagnosis.
        </Alert>
      </Box>
    </Box>
  );
}

export default Predict;