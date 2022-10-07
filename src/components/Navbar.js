import React from "react";
import { WelcomeCard } from "./WelcomeCard";

export const Navbar = () => {
  const onClick = () => {
    let element = document.getElementById("welcome");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  };
  return (
    <header>
      <nav>
        <div id='logo'>-Dashboard</div>
        <ul>
          <li className='image-container' onClick={onClick}>
            <img src='image/dealer_reg.svg' alt='logo' />
          </li>
        </ul>
      </nav>
      <WelcomeCard />
    </header>
  );
};
