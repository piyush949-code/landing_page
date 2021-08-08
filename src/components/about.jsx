export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <div className=" specialisation">
              6 Unique Specializations to choose from <br />
              - Data Science Generalist <br />
              - Deep Learning <br />
              - Natural Learning Processing <br />
              - Business Intelligence/ Data Analytics <br />
              - Business Analytics <br />
              - Data Engineering <br />


            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2> About Program </h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Key highlights</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
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
