import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/Layout/Layout"
import View from "../components/View/View"
import Status from "../components/Status/Status"

const Index = () => (
  <Layout>
    {/* <Status /> */}
    <View title="Log In">
      <p>
        <Link to="/app/profile">Log In</Link>.
      </p>
    </View>
  </Layout>
)

export default Index
