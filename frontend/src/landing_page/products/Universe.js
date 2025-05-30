import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The InvestEcho Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/images/streakLogo.png"  style={{width:"40%"}} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/images/sensibullLogo.svg" style={{width:"50%"}} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png"  style={{width:"60%"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"50%"}} />
          <p className="text-small text-muted">Algo & strategy platform </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/dittoLogo.png"  style={{width:"40%"}} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>SignUp Now</button>
      </div>
    </div>
  );
}

export default Universe;
