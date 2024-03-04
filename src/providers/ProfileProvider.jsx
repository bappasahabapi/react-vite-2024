import React, { useReducer, useState } from "react";
import { ProfileContext } from "../context";
import { profileReducer, initialState } from "../reducers.js/ProfileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
