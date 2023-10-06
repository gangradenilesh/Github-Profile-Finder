const Tabs = ({ type, setType }) => {
  return (
    <>
      <div className="tab-btn">
        <button
          className={`${type === "repos" && "active-btn"}`}
          onClick={() => setType("repos")}
        >
          Repositories
        </button>
        <button
          className={`${type === "followers" && "active-btn"}`}
          onClick={() => setType("followers")}
        >
          Followers
        </button>
        <button
          className={`${type === "following" && "active-btn"}`}
          onClick={() => setType("following")}
        >
          Following
        </button>
      </div>
    </>
  );
};

export default Tabs;
