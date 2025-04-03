import { useState } from "react";
import FeaturesFlagProvider from "./components/FeaturesFlagProvider";
import Feature from "./components/Feature";
import "./App.css";

function App() {
  const [userType, setUserType] = useState("free");
  return (
    <>
      <h1>Feature Flag Demo</h1>
      <p>Current Plan: {userType.toUpperCase()}</p>
      <button
        onClick={() => setUserType(userType === "free" ? "premium" : "free")}
      >
        Switch to {userType === "free" ? "Premium" : "Free"} Plan
      </button>

      <br />
      <br />
      <FeaturesFlagProvider userType={userType}>
        <div>
          <h3>Dark Mode Features</h3>
          <Feature name="darkMode">
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </Feature>

          <h3>Chat Features</h3>
          <Feature name="chatEnabled">
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </Feature>

          <h3>Audio Chat Features</h3>
          <Feature name="audioChat">
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </Feature>

          <h3>Video Chat Features</h3>
          <Feature name="videoChat">
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </Feature>
        </div>
      </FeaturesFlagProvider>
    </>
  );
}

export default App;
