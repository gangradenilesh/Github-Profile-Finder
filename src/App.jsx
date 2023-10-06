import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Users from "./pages/Users";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:name" element={<UserInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
