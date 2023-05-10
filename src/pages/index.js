import HomeScreen from "../components/Home/HomeScreen";
import LoginScreen from "../components/LoginScreen";

export default function App() {
  const user = null;
  return <div>{!user ? <LoginScreen /> : <HomeScreen />}</div>;
}
