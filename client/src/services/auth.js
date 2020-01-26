const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === `llama` && password === `umbc`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Lamar`,
      legalName: `Lamar Jackson`,
      email: `mvpllama@example.org`,
      gender: `Male`,
      age: `22`,
      location: `Baltimore, MD`,
      img: `src/images/lamar.jpeg`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  setUser({})
  callback()
}
