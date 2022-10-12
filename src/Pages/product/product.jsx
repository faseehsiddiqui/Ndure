import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import "./style.css";
import Loading from "../../component/loading";
import { useSelector, useDispatch } from "react-redux";
import { storedata } from "../../Store/counterSlice";
export default function Product(props) {
  const dispatch = useDispatch();
  const Men = useSelector((state) => state.Menapi.Men);
  const Women = useSelector((state) => state.Menapi.Women);
  const kid = useSelector((state) => state.Menapi.kid);
  // console.log(props.data, "testing part 2");
  // console.log(props.extradata,"my extra data");

  const { pro, cls, cat } = useParams();
  // console.log(pro, cls, cat, "my extra data");
  // const { api, cls, cat } = props.data;
  const [currentData, setcurrentData] = useState();
  const [another, setanother] = useState();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
    switch (pro) {
      case "Men":
        {
          setanother(Men);
          setcurrentData(Men[cls][cat]);
        }
        break;
      case "Women":
        {
          setanother(Women);
          setcurrentData(Women[cls][cat]);
        }
        break;
      case "Kid":
        {
          setanother(kid);
          setcurrentData(kid[cls][cat]);
        }
        break;

      case "MenShoes":
        {
          setanother(Men);
          setcurrentData(Men[cls][cat]);
        }
        break;
      case "WomenShoes":
        {
          setanother(Women);
          setcurrentData(Women[cls][cat]);
        }
        break;
      case "KidShoes":
        {
          setanother(kid);
          setcurrentData(kid[cls][cat]);
        }
        break;
      case "MenApparel":
        {
          setanother(Men);
          setcurrentData(Men[cls][cat]);
        }
        break;
      case "WomenApparel":
        {
          setanother(Women);
          setcurrentData(Women[cls][cat]);
        }
        break;
      case "KidApparel":
        {
          setanother(kid);
          setcurrentData(kid[cls][cat]);
        }
        break;
      case "Accessories":
        {
          setanother(kid);
          setcurrentData(kid[cls][cat]);
        }
        break;
    }
  }, []);
  // console.log(currentData, another, "checks");
  return (
    <div>
      {isLoading == true ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="container-fluid">
            <div className="container p-0 m-0 py-3">
              <div className="col-lg-12">
                <h2 className="px-3 pr_p1 fw-lighter">
                  {another.pagedata.title3} {cat}
                </h2>
              </div>
            </div>
          </div>
          <div className="container-fluid py-5">
            <div className="row">
              {currentData.map((obj, i) => {
                let objName = obj.Name;
                let firstpic = obj.Image.pic1;
                // console.log(newdata, "newdata");
                return (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 py-2  d-flex justify-content-around"
                    key={i}
                  >
                    <Link
                      to={"/lastproduct/" + obj.Name}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {/* {" "} */}
                      <div className="container p-0 m-0 ">
                        <div className="col-12 over_act">
                          <img
                            onClick={() => {
                              dispatch(storedata(obj));
                            }}
                            src={obj.Image.pic1}
                            alt=""
                            className="img-fluid product_hover "
                          />
                        </div>
                        <h6 className="text-center py-2">{obj.Name}</h6>
                      </div>
                    </Link>
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
