import React from "react"

import View from "../View/View"
import { getCurrentUser } from "../../services/auth"

import ProfileImg from "../ProfileImg/ProfileImg"
import Graph from "../Profile/Graph/Graph"

const Profile = ({ data }) => {
  let { name } = getCurrentUser()
  return (
    <>
      <View title="Profile">
        {/* <ProfileImg />
        <Info />
        <Graph /> */}
      </View>
    </>
  )
}

export default Profile
