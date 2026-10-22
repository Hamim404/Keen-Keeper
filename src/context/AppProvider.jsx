"use client";

import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [contactHistory, setContactHistory] = useState([]);
  const AppData = { contactHistory, setContactHistory };

  return <AppContext value={AppData}>{children}</AppContext>;
};

export default AppProvider;
