export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
              <div className=" specialisation">
              <h3>Key highlights</h3> <br />
              1 Future Proof your career by learning different tools. <br />
              2 Enhancement of theoretical knowledge. <br />
              3 Revamp your business through a digital transformation. <br />
              4 Building an efficient workforce. <br />
              5 Grab exciting job opportunities in emerging fields. <br />
              6 Aids to recognize market opportunity and take better decisions. <br />
              </div> 
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2> About Program </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                   
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
