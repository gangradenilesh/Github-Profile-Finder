import { useRef, useState } from "react";
import UserProfile from "../component/UserProfile";
import Loading from "../component/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");
  let BaseURL = "https://api.github.com/users";

  async function FindUser() {
    setLoading(true);
    if (user.current.value !== "") {
      setUsers("");
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = "";
    }
    setLoading(null);
  }

  return (
    <div className="main">
      <div className="inputSearch">
        <h2>hey there 👋</h2>
        <span>Enter your GitHub username:</span>
        <div className="searc-input-bx">
          <input placeholder="Search github profile" ref={user} />
          <button onClick={FindUser} className="main-btn">
            Find Profile
          </button>
        </div>
      </div>
      <div className="search-user-grid">
        {loading ? <Loading /> : <UserProfile users={users} />}
      </div>
    </div>
  );
};

export default Users;
