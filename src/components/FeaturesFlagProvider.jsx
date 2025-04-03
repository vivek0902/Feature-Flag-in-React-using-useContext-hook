import React, { useEffect, useState } from "react";
import freeUserData from "../backendData/freeUserData";
import PremiumUserData from "../backendData/PremiumUserData";
import FeatureFlagContext from "../context/FeatureFlagContext";
// FeatureFlagProvider now accepts a `userType` prop (either "free" or "premium")
const FeaturesFlagProvider = ({ userType, children }) => {
  const [enableFeatureData, setEnableFeatureData] = useState({});
  useEffect(() => {
    //getting data from local object
    setEnableFeatureData(
      userType === "premium" ? PremiumUserData : freeUserData
    );

    //fetching from API

    // const featureFile =
    //   userType === "premium" ? "/api/premium.json" : "/api/free.json";

    // fetch(featureFile)
    //   .then((res) => res.json())
    //   .then((data) => setFeatures(data)) //putting api values to setFeatures
    //   .catch(() => console.error("Failed to load features"));
  }, [userType]);

  return (
    <FeatureFlagContext.Provider value={enableFeatureData}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export default FeaturesFlagProvider;
