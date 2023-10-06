import { Link } from "react-router-dom";

const UserProfile = ({ users }) => {
  return (
    <>
      {users &&
        users?.map((user, idx) =>
          user?.login ? (
            <div key={idx} className="search-user-card">
              <div className="card-img">
                <img src={user.avatar_url} />
              </div>
              <div className="profile-content">
                <h3>{user.login}</h3>
                <div className="profile-stats">
                  <img
                    className="icon-stats"
                    src="src/assets/users.png"
                    alt=""
                  />
                  <div className="follow-count">
                    {user.followers} <span> followers </span> {user.following}
                    <span> following </span>
                  </div>
                </div>
                <Link to={`/${user.login}`}>
                  <span className="main-btn">View Profile</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="not-found" key={idx}>
              Oops! User Not found
            </div>
          )
        )}
    </>
  );
};

export default UserProfile;
