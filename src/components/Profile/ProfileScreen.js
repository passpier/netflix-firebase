import React from "react";
import { useSelector } from "react-redux";
import { auth, signOut } from "../../../firebase";
import { selectUser } from "../../store/slices/userSlice";
import styles from "./ProfileScreen.module.css";
import Nav from "../Nav";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className={styles.profileScreen}>
      <Nav />
      <div className={styles.profileScreen__body}>
        <h1>Edit Profile</h1>
        <div className={styles.profileScreen__info}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className={styles.profileScreen__details}>
            <h2>{user.email}</h2>
            <div className={styles.profileScreen__plans}>
              <h3>Plans</h3>
              <button
                onClick={() => signOut(auth)}
                className={styles.profileScreen__signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
