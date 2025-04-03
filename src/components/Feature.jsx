import React from "react";
import useFeatureFlag from "../hooks/useFeatureFlagHook";

const Feature = ({ name, children }) => {
  return useFeatureFlag(name) ? (
    children
  ) : (
    <p>This Feature is Available on Premium Plan, Need to Updrade</p>
  );
};

export default Feature;
