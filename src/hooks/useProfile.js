import { useContext } from "react"
import ProfileProvider from "../providers/ProfileProvider"

export const useProfile = () => {
  return useContext(ProfileProvider)
}

// useProfile return the state and dispatch fn for posts 