import star from "../assets/star.png";
import fork from "../assets/fork.png";
const Repositories = ({ repos }) => {
  return (
    <>
      {repos.map((s, idx) => {
        return (
          <div key={idx} className="rep-card">
            <a
              href={s.html_url}
              target="_blank"
              className="repo-title"
              rel="noreferrer"
            >
              {s.name}
            </a>
            <div className="frok-sec">
              <h4> {s.language}</h4>

              <span>
                <img src={star} /> {s.stargazers_count}
              </span>
              <span>
                <img src={fork} /> {s.forks}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Repositories;
