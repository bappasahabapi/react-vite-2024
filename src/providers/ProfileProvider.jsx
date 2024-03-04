import React, { useReducer, useState } from "react";
import { ProfileContext } from "../context";
import { ProfileReducer, initialState } from "../reducers.js/ProfileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
