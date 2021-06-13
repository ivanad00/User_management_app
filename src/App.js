import { useSelector } from "react-redux";
import Search from "./components/Search/Search";
import LoginPage from "./pages/Login/LoginPage";
import UsersList from "./pages/Users/UsersList";
import "./components/Search/search.css";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const usersList = useSelector((state) => state.usersList);
  const search = useSelector((state) => state.search);

  return (
    <>
      <div className="App">
        {!isLoggedIn ? (
          <LoginPage />
        ) : (
          <>
            <Search handleChange={(e) => e.target.value} />
            <UsersList />
          </>
        )}
      </div>
    </>
  );
}

export default App;
