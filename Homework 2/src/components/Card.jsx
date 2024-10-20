import "../App.css";

const Card = ({ name, url, logo, alt }) => {
  return (
    <div className="card">
      <a href={url} target="_blank">
        <img src={logo} className={`${name} logo`} alt={alt} />
      </a>
    </div>
  );
};

export default Card;
