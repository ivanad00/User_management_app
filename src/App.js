import { useSelector } from "react-redux";
import Search from "./components/Search/Search";
import SeeMoreButton from "./components/SeeMoreButton/SeeMoreButton";
import LoginPage from "./pages/Login/LoginPage";
import UsersList from "./pages/Users/UsersList";
import "./components/Search/search.css";
import { useState } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const usersList = useSelector((state) => state.usersList);
  const [searchText, setSearchText] = useState("");
  console.log(searchText, usersList);

  return (
    <>
      <div className="App">{!isLoggedIn ? <LoginPage /> : <UsersList />}</div>
    </>
  );
}

export default App;
