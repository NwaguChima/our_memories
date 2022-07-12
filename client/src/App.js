import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import useStyles from "./styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
