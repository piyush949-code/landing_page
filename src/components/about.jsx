import { TiTick} from "react-icons/ti";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <div className=" specialisation">
              <h2>ABOUT PROGRAM</h2>
              <p><span><TiTick></TiTick></span>20 hours course structure.</p>

              <p><span><TiTick></TiTick></span>Career essential soft skills program.</p>

              <p><span><TiTick></TiTick></span>3 unique specializations.</p>

              <p><span><TiTick></TiTick></span>60+ case studies and capstone projects.</p>

              <p><span><TiTick></TiTick></span>Career counselling and access to job opportunities.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2> WHY CHOOSE US ?</h2>
              <p className="my-3"><span><TiTick></TiTick></span>{props.data ? props.data.paragraph : "loading..."}</p>
              <p className="my-3"><span><TiTick></TiTick></span>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p className="my-3"><span><TiTick></TiTick></span>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p className="my-3"><span><TiTick></TiTick></span>{props.data ? props.data.paragraph3 : "loading..."}</p>
              <p className="my-3"><span><TiTick></TiTick></span>{props.data ? props.data.paragraph4 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
