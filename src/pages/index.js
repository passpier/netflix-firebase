import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, onAuthStateChanged } from "../../firebase";
import HomeScreen from "../components/Home/HomeScreen";
import LoginScreen from "../components/Home/LoginScreen";
import { login, logout, selectUser } from "../store/slices/userSlice";

export default function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return <div>{!user ? <LoginScreen /> : <HomeScreen />}</div>;
}
