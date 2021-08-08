export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
              <div className=" specialisation">
              <h3>ABOUT OUR PROGRAM</h3> 
<p>1. 20 hours course structure.</p> 

<p>2. Career essential soft skills program. </p>

  <p>3. 3 unique specializations.</p>  

<p>4. 60+ case studies and capstone projects. </p>

<p>5. Career counselling and access to job  opportunities. </p>
              </div> 
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3> Why Choose Us ?</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3: "loading..."}</p>
              <p>{props.data ? props.data.paragraph4 : "loading..."}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
