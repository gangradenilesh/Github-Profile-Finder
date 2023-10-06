import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../component/Tabs";
import Repositories from "../component/Repositories";
import UserProfile from "../component/UserProfile";

const UserInfo = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [type, setType] = useState("repos");
  const [info, setInfo] = useState([]);
  const [loading, setLoaing] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let BaseURL = "https://api.github.com/users";
  const getUserInfo = async () => {
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setUserDetails(() => [data]);
  };

  const getUrl = async () => {
    setInfo([]);
    setLoaing(true);
    const res = await fetch(BaseURL + pathname + `/${type}`);
    const data = await res.json();
    setInfo(data);

    setLoaing(null);
  };
  useEffect(() => {
    getUserInfo();
    getUrl();
    console.log(info);
  }, [pathname, type]);
  return (
    <div className="user-detail-section">
      <div className="container">
        <button className="main-btn" onClick={() => navigate("/")}>
          Back
        </button>
        <div className="user-main-section">
          <div className="user-profile">
            {userDetails.map((item, idx) => (
              <div key={idx}>
                <div className="user-avatar">
                  <img src={item.avatar_url} />
                </div>

                <h2>{item.name}</h2>
                <h4>{item.login}</h4>
                <div className="profile-stats">
                  <img
                    className="icon-stats"
                    src="src/assets/users.png"
                    alt=""
                  />
                  <div className="follow-count">
                    {item.followers} <span> followers </span> {item.following}
                    <span> following </span>
                  </div>
                </div>
                <p>{item.bio}</p>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="see-git main-btn"
                >
                  See on Github
                </a>
              </div>
            ))}
          </div>
          <div className="user-tab-section">
            <Tabs type={type} setType={setType} />
            <div className="user-tab-detail-sec">
              {type === "repos" && (
                <div className="repo-grid">{<Repositories repos={info} />}</div>
              )}
              {type === "following" && (
                <div className="repo-grid">{<UserProfile users={info} />}</div>
              )}
              {type === "followers" && (
                <div className="repo-grid">{<UserProfile users={info} />}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
