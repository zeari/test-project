import React from "react";
import logo from "./../../logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button, Paper } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container maxWidth="sm" className="App">
      <Paper className="container-paper">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Axiom Sample App + Material-UI
        </Typography>

        <Paper>
          <Link
            component="button"
            to="layout"
            variant="contained"
            color="primary"
          >
            Layout
          </Link>
        </Paper>
        <Paper>
          <Link
            component="button"
            to="form"
            variant="contained"
            color="primary"
          >
            Form
          </Link>
        </Paper>
      </Paper>
    </Container>
  );
};

const AxiomLayout = () => {
  return (
    <>
      <Container maxWidth="sm" className="App">
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Layout page
          </Typography>
          <Button variant="contained" color="secondary">
            button 1
          </Button>
          <Button variant="contained" color="primary">
            button 2
          </Button>
        </Paper>
      </Container>
    </>

    //  enter code here
  );
};

const AxiomForm = () => {
  return (
    <>
      <Container maxWidth="sm" className="App">
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Form page
          </Typography>
          <Button variant="contained" color="secondary">
            button 1
          </Button>
          <Button variant="contained" color="primary">
            button 2
          </Button>
        </Paper>
      </Container>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="layout" element={<AxiomLayout />} />
          <Route path="form" element={<AxiomForm />} />
          <Route path="*" element={<div> 404 </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
