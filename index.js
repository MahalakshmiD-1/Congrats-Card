const element = (
  // Write your code here.
  <div className="card-background">
    <div className="congrats-card">
      <h1 className="heading">Congratulations</h1>
      <div>
        <div className="sub-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className="profile"
          />
          <h1 className="name">Kiran V</h1>
          <p className="desc">
            Vishnu Institute of Computer Education and Technology,
            <br />
            Bhimavaram
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="watch"
          />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
