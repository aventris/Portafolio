import React from "react";
import reactDOM from "react-dom";
import { AiOutlineLoading } from "react-icons/ai";

import "@styles/EmailConfirmation.scss";

const EmailConfirmation = ({ type, closeConfirmation }) => {
  //closeConfirmation -> function that will trigger the popup

  // type true -> confimation
  // type false -> error

  reactDOM.createPortal(EmailConfirmation, document.getElementById("modal"));
  const handleCloseConfirmation = () => {
    closeConfirmation();
  };

  return (
    <div className="modal">
      <div className="email-confirmation">
        {type === null ? (
          <AiOutlineLoading />
        ) : (
          <>
            <div className="email-confimation--text">
              {type ? (
                <>
                  <h2>Email Sended!</h2>
                  <span>I'll contact you as soon as possible</span>
                </>
              ) : (
                <>
                  <h2>Something went wrong</h2>
                  <span>
                    I'm working on it to fix it, please try again later
                  </span>
                </>
              )}
            </div>
            <button
              className="email-confirmation--button"
              onClick={handleCloseConfirmation}
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailConfirmation;
