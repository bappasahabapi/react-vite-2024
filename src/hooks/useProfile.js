import { useContext } from "react"
import { ProfileContext } from "../context"

export const useProfile = () => {
  return useContext(ProfileContext)
}

// useProfile return the state and dispatch fn for posts 