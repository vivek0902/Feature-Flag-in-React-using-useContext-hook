import React, { useContext } from "react";
import FeatureFlagContext from "../context/FeatureFlagContext";
const useFeatureFlag = (name) => {
  const features = useContext(FeatureFlagContext);
  return features[name] ?? false; // Return `false` if feature is not found
};

export default useFeatureFlag;
