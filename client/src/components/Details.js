import React from "react"
import View from "./View/View"
import { getCurrentUser } from "../services/auth"
import ProfileImg from "./ProfileImg/ProfileImg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBirthdayCake,
  faEnvelope,
  faVenusMars,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons"
import Heatmap from "../components/Heatmap/Heatmap"
import Streak from "../components/Streak/Streak"
import { graphql, useStaticQuery } from "gatsby"
import Timer from "./Timer/Timer"

import "./Details.css"

const Details = () => {
  const data = useStaticQuery(graphql`
    query ImgQuery {
      file(sourceInstanceName: { eq: "lamar" }) {
        id
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { legalName, email, age, gender, location } = getCurrentUser()
  const { childImageSharp, id } = data.file

  return (
    <View title={legalName} className="name">
      <dl>
        <img
          src="https://s.hdnux.com/photos/01/10/14/45/18925900/5/920x920.jpg"
          alt="Lamar"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        />
        <dt>{legalName}</dt>
        <dt>
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          {email}
        </dt>
        <dt>
          <FontAwesomeIcon className="icon" icon={faBirthdayCake} />
          {age}
        </dt>
        <dt>
          <FontAwesomeIcon className="icon" icon={faVenusMars} /> {gender}
        </dt>
        <dt>
          <FontAwesomeIcon className="icon" icon={faLocationArrow} /> {location}
        </dt>
        <dt>
          <Streak />
        </dt>
        <dt>
          <Timer />
        </dt>
      </dl>

      <Heatmap />
    </View>
  )
}

export default Details
