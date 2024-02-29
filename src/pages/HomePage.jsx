import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const {auth}=useAuth()
  console.log(auth)
  return (
    <>
        <h1> HomePage</h1>
        <Link to={"/profile"}> Go to Profile Page</Link>
    </>
  )
}

export default HomePage