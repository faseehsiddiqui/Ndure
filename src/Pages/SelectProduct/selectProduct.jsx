import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../component/footer";
import Loading from "../../component/loading";
import Navbar from "../../component/navbar";
import { useSelector, useDispatch } from "react-redux";

export default function SelectProduct(props) {
  const { show } = useParams();
  // let newdata = props.title
  // console.log(newdata, "newdtta taken");
  // console.log(show, "iddiidi");
  const latestproduct = useSelector((state) => state.Menapi.lastproductdata);
  // console.log(latestproduct, "mic tesing");
  // console.log(props.data, "select product testing");
  const [lastproductselect, setlastproductselect] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
    setlastproductselect([latestproduct]);
  }, []);
  // console.log(lastproductselect, "myapi last product");
  return (
    <div>
      {isLoading == true ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="container-fluid  py-2">
            <div className="row">
              {lastproductselect.map((obj, i) => {
                return (
                  <div className="col-lg-8 col-md-8 col-sm-6 col-12" key={i}>
                    <div className="container-fluid d-flex flex-lg-row flex-md-row flex-sm-row flex-column">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-2 py-1">
                        <img
                          src={obj.Image.pic1}
                          alt=""
                          height="100%"
                          width="100%"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mx-2 py-1">
                        <img
                          src={obj.Image.pic2}
                          alt=""
                          height="100%"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              {lastproductselect.map((ele, i) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12" key={i}>
                    <p className="mt-2">{ele.Name}</p>
                    <p className="p-0 m-0">{ele.Description}</p>
                    <h4 className="py-2">Rs {ele.Price}</h4>
                    <hr />
                    <h6>
                      Quantity : <span>{ele.Stock}</span>{" "}
                    </h6>
                    <hr />
                    <h4>Size chart</h4>
                    <hr />
                    <div className="d-flex w-lg-50 w-md-50 w-sm-25  justify-content-evenly">
                      <h4>15</h4>
                      <h4>18</h4>
                      <h4>25</h4>
                      <h4>36</h4>
                      <h4>20</h4>
                      <h4>22</h4>
                    </div>
                    <button className="btn border mt-3 px-5">
                      Add to cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
