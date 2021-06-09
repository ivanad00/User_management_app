import { useSelector } from "react-redux";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import UsersList from "./pages/Users/UsersList";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="App">{isLoggedIn ? <UsersList /> : <LoginPage />}</div>
  );
}

export default App;
