import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import img28 from "../../Assets/images/Home/foot.webp";
import { BsCurrencyBitcoin } from "react-icons/bs";
import Loading from "../../component/loading";
import { useSelector, useDispatch } from "react-redux";
import { storedata } from "../../Store/counterSlice";
export default function Nextpage(props) {
  const Men = useSelector((state) => state.Menapi.Men);
  const Women = useSelector((state) => state.Menapi.Women);
  const kid = useSelector((state) => state.Menapi.kid);
  const dispatch = useDispatch();
  const { id } = useParams();
  let Accessories = "Accessories";
  let apparel = "apparel";
  const [curent, setcurent] = useState(kid);
  const [shoecatagories, setshoecatagories] = useState([]);
  const [apprelcatagories, setapprelcatagories] = useState([]);
  const [justshow, setjustshow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let productdata = curent.pagedata.title3;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    switch (id) {
      case "Men":
        {
          setcurent(Men);
          setshoecatagories(Object.keys(Men.Shoes));
          setapprelcatagories(Object.keys(Men.Apparel));
        }
        break;
      case "Women":
        {
          setcurent(Women);
          setshoecatagories(Object.keys(Women.Shoes));
          setapprelcatagories(Object.keys(Women.Apparel));
        }
        break;
      case "Kid":
        {
          setcurent(kid);
          setshoecatagories(Object.keys(kid.Shoes));
          setapprelcatagories(Object.keys(kid.Apparel));
        }
        break;
      case "MenShoes":
        {
          setcurent(Men);
          setshoecatagories(Object.keys(Men.Shoes));
          setjustshow(true);
        }
        break;
      case "MenApparel":
        {
          setcurent(Men);
          setapprelcatagories(Object.keys(Men.Apparel));
          setjustshow(apparel, true);
        }
        break;
      case "WomenShoes":
        {
          setcurent(Women);
          setshoecatagories(Object.keys(Women.Shoes));
          setjustshow(true);
        }
        break;
      case "WomenApparel":
        {
          setcurent(Women);
          setapprelcatagories(Object.keys(Women.Apparel));
          setjustshow(apparel, true);
        }
        break;
      case "KidShoes":
        {
          setcurent(kid);
          setshoecatagories(Object.keys(kid.Shoes));
          setjustshow(true);
        }
        break;
      case "KidApparel":
        {
          setcurent(kid);
          setapprelcatagories(Object.keys(kid.Apparel));
          setjustshow(apparel, true);
        }
        break;
      case "Accessories":
        {
          setcurent(kid);
          setapprelcatagories(kid.Accessories);
          setjustshow(Accessories, true);
        }
        break;
    }
  }, []);

  if (justshow == true) {
    return (
      <div>
        {isLoading == true ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <div className="container-fluid ">
              <h1 className="mx-5 fw-lighter">{curent.pagedata.title}</h1>
            </div>
            <div className="container-fluid py-5">
              <div className="row  justify-content-evenly">
                {shoecatagories.map((obj, i) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12 py-2  d-flex justify-content-around"
                      key={i}
                    >
                      <Link
                        to={"/product/" + id + "/Shoes" + "/" + obj}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="container  p-0 m-0 ">
                          <div className="col-12 over">
                            <img
                              src={curent.Shoes[obj][0].Image.pic1}
                              alt=""
                              className="img-fluid  imgtohover"
                            />
                          </div>
                          <h6 className="text-center py-2">{obj}</h6>
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
  if (justshow == apparel) {
    return (
      <div>
        {isLoading == true ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <div className="container-fluid ">
              <h1 className="mx-5 fw-lighter">{curent.pagedata.title2}</h1>
            </div>
            <div className="container-fluid py-5">
              <div className="row  justify-content-evenly">
                {apprelcatagories.map((obj, i) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12 py-2  d-flex justify-content-evenly "
                      key={i}
                    >
                      <Link
                        to={"/product/" + id + "/Apparel" + "/" + obj}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="container p-0 m-0 ">
                          <div className="col-12 over">
                            <img
                              src={curent.Apparel[obj][0].Image.pic1}
                              alt=""
                              className="img-fluid  imgtohover"
                            />
                          </div>
                          <h6 className="text-center py-2">{obj}</h6>
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
  if (justshow == Accessories) {
    return (
      <div>
        {isLoading == true ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <div className="container-fluid ">
              <h1 className="mx-5 fw-lighter">{curent.pagedata.title4}</h1>
            </div>
            <div className="container-fluid py-5">
              <div className="row  justify-content-evenly">
                {apprelcatagories.map((obj, i) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12 py-2  d-flex justify-content-around"
                      key={i}
                    >
                      <Link
                        onClick={() => {
                          dispatch(storedata(obj));
                        }}
                        to={"/lastproduct/" + obj.Name}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="container p-0 m-0 ">
                          <div className="col-12 over">
                            <img
                              src={obj.Image.pic1}
                              alt=""
                              className="img-fluid  imgtohover"
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
  } else {
    return (
      <>
        {isLoading == true ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                {curent.Hero.map((obj, i) => {
                  return (
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-12 p-0 m-0 hero "
                      key={i}
                    >
                      <img src={obj.wall1} alt="" className="img-fluid" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-lg-6 py-lg-0 py-md-2  py-sm-2 py-2">
                  <div className="over">
                    <div className="container  img14"></div>
                  </div>
                </div>
                <div className="col-lg-6 py-lg-0 py-md-2 py-sm-2 py-2">
                  <div className="over">
                    <div className="container img15"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid py-1 ov nd ">
              <div className="row  py-2">
                <h2 className="p-0 m-0 fw-lighter">{productdata}</h2>
              </div>

              <div
                id="Shoes"
                className="row py-4  justify-content-around align-items-center"
              >
                {shoecatagories.map((ele, i) => {
                  // console.log(ele, "ele");
                  return (
                    <div
                      className=" col-lg-4 col-md-6  col-sm-6 col-12 "
                      key={i}
                    >
                      <Link
                        to={"/product/" + id + "/Shoes" + "/" + ele}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="over ">
                          <img
                            src={curent.Shoes[ele][0].Image.pic1}
                            alt=""
                            className="img-fluid imgtohover"
                          />
                        </div>

                        <h6 className="mt-3 text-center">{ele}</h6>
                      </Link>
                    </div>
                  );

                  {
                    /* <h1>{ele}</h1> */
                  }
                })}
              </div>
            </div>

            <div className="container-fluid py-1   ov nd">
              <h2 className="py-2 fw-lighter">{curent.pagedata.title2}</h2>
              <div
                id="Apparel"
                className="row py-4  justify-content-around align-items-center"
              >
                {apprelcatagories.map((ele, i) => {
                  return (
                    <div
                      className=" col-lg-4 col-md-6  col-sm-6 col-12"
                      key={i}
                    >
                      <Link
                        to={"/product/" + id + "/Apparel" + "/" + ele}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="over">
                          <img
                            src={curent.Apparel[ele][0].Image.pic1}
                            alt=""
                            className="img-fluid imgtohover"
                          />
                        </div>

                        <h6 className="mt-3 text-center">{ele}</h6>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container-fluid  mt-4 exit">
              <img className="img-fluid" src={img28} alt="" />
            </div>
            <Footer />
          </>
        )}
      </>
    );
  }
}
