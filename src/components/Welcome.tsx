import React from "react";
import backgroundWelcome from "../assets/images/Recurso 2.png";
export default function Welcome() {
  return (
    <div className="welcomeBackground">
      <img src={backgroundWelcome} alt="backgroundWelcome" />
    </div>
  );
}
