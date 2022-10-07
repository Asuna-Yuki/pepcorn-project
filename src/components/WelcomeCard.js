import React from "react";

export const WelcomeCard = () => {
  return (
    <div id='welcome' className='card welcome-card hidden'>
      <p>Welcome !</p>
      <hr />
      <p>
        <i class='fa-solid fa-person' /> {"  "}
        <a href='#!'>Logout</a>
      </p>
    </div>
  );
};
