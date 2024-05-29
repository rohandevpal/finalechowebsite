import React, { createContext, useState } from "react";

export const AlertBannerContext = createContext();

export const AlertBannerProvider = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  const toggleBanner = () => {
    setShowBanner((prev) => !prev);
  };

  /**
   * TODO:
   * * Add excluded pages to config and make banner disappear on them
   */

  return (
    <AlertBannerContext.Provider value={{ showBanner, toggleBanner }}>
      {children}
    </AlertBannerContext.Provider>
  );
};
