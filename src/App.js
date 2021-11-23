import Search from "./components/Search/Search";
import LoginPage from "./pages/Login/LoginPage";
import UsersList from "./components/UsersList/UsersList";
import NewUser from "./components/NewUser/NewUser";
import NewUserForm from "./components/NewUserForm/NewUserForm";

import { useSelector } from "react-redux";

import "./components/Search/search.css";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isButtonClicked = useSelector((state) => state.isButtonClicked);

  return (
    <>
      <div className="App">
        {!isLoggedIn ? (
          <LoginPage />
        ) : (
          <>
            <Search />
            <UsersList />
            {!isButtonClicked ? <NewUser /> : <NewUserForm />}
          </>
        )}
      </div>
    </>
  );
}

export default App;
