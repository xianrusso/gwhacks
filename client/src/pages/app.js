import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout/Layout"
import PrivateRoute from "../components/PrivateRoute"
import Profile from "../components/Profile/Profile"
import Login from "../components/Login"
import Status from "../components/Status/Status"
import Details from "../components/Details"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
