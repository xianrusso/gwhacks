import React from "react"
import { Img } from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import "./ProfileImg.css"

const ProfileImg = ({ childImageSharp, id }) => {
  // const data = useStaticQuery(graphql`
  //   query ImgQuery {
  //     file(sourceInstanceName: { eq: "lamar" }) {
  //       id
  //       childImageSharp {
  //         fixed(width: 200, height: 200) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  // const { childImageSharp, id } = data.file
  // return <Img  key={id} />
}

export default ProfileImg
