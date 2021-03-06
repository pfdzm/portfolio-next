const PortfolioCard = props => {
  const { title, description, img, repo, deploy } = props;
  return (
    <React.Fragment>
      <div className="card">
        <img src={img.url} alt={img.alt || "no alt description available"} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <a href={deploy}>Live demo!</a>
          </p>
          <p className="card-text">
            <a href={repo}>Source code</a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .card {
          max-width: 18rem;
          display: inline-block;
          border: 1px solid #eee;
          box-shadow: 0px 0px 5px #eee;
          border-radius: 5px;
          padding: 1.4rem 1.8rem;
          margin-bottom: 2rem;
        }

        .card img {
          max-width: 100%;
          height: auto;
          border: 1px solid #eee;
          border-radius: 5px;
          margin-bottom: 0;
        }

        .card img:hover {
          box-shadow: 4px 4px 0px palevioletred;
        }

        .card-title {
          font-size: inherit;
          margin-top: 0.1rem;
          margin-bottom: 0.2rem;
        }

        .card-text {
          margin: 0;
          padding: 0;
        }

        .card-body a {
          color: palevioletred;
          text-decoration: none;
          font-weight: 900;
          position: relative;
        }

        card-body a:hover {
          color: ;
        }

        .card-body a::before {
          width: 0%;
          transition: all 0.2s ease-in-out;
          position: absolute;
          z-index: 1;
          content: "";
          height: 2px;
          background-color: palevioletred;
          transform: translateY(100%);
          bottom: 0;
        }

        .card-body a:hover::before {
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PortfolioCard;
