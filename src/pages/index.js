import { useEffect } from "react";
import { auth, onAuthStateChanged } from "../../firebase";
import HomeScreen from "../components/Home/HomeScreen";
import LoginScreen from "../components/LoginScreen";

export default function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
      } else {
        // Logged out
      }
    });
    return unsubscribe;
  }, []);

  return <div>{!user ? <LoginScreen /> : <HomeScreen />}</div>;
}
