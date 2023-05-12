import React, { useState } from "react";
import styles from "./LoginScreen.module.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={styles.loginScreen}>
      <div>
        <img
          className={styles.loginScreen__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)}
          className={styles.loginScreen__button}
        >
          Sign In
        </button>
        <div className={styles.loginScreen__gradient} />
      </div>
      <div className={styles.loginScreen__body}>
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={styles.loginScreen__input}>
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className={styles.loginScreen__getStarted}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
