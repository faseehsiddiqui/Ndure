import React, { useState, useEffect } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import { Link } from "react-router-dom";
import Footer from "../../component/footer";
import H_nav from "../../component/h_nav";
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper";
import sliderapi from "../../component/sliderapi";
import Img1 from "../../Assets/images/Home/one.jpg";
import Img2 from "../../Assets/images/Home/slidertwo.jpg";
import Img3 from "../../Assets/images/Home/sliderthree.jpg";
import Img4 from "../../Assets/images/Home/sliderfour.jpg";
import Img5 from "../../Assets/images/Home/sliderfive.jpg";
import Img6 from "../../Assets/images/Home/slidersix.jpg";
import Img7 from "../../Assets/images/Home/sliderseven.jpg";
import Img8 from "../../Assets/images/Home/slidereight.jpg";
import Loading from "../../component/loading";
export default function Home() {
  // console.log(props.newdata, "test");
  const [isLoading, setisLoading] = useState(true);
  const [sliderApi, setsliderApi] = useState([]);

  useEffect(() => {
    setsliderApi(sliderapi);

    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);
  // console.log(sliderApi, "sliderApi");
  return (
    <div>
      {isLoading == true ? (
        <Loading align="center" />
      ) : (
        <>
          <H_nav />

          {/*  ------------slider--------------- */}
          <div className="container-fluid  p-0 m-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[EffectFade, Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {sliderApi.map((obj, i) => {
                // console.log(obj, "obj");
                return (
                  <div key={i}>
                    <SwiperSlide key={i}>
                      <div className="container-fluid   p-0 m-0">
                        <div className="row one-two">
                          <div className="col-lg-12 extra_class">
                            <img
                              src={obj.pic1}
                              alt=""
                              height="100%"
                              width="100%"
                              className=""
                              style={{ backgroundSize: "100% 100%" }}
                            />
                          </div>
                          <div className="col-lg-12 extra_one ">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-12">
                                  <Link to="/next/Men">
                                    <button className="bbtn py-lg-2 px-lg-5 mx-lg-2 py-md-2 px-md-5 mx-md-2 py-sm-2 px-sm-5 mx-sm-2 py-1 px-4 mx-2 ">
                                      MEN
                                    </button>
                                  </Link>
                                  <Link to="/next/Women">
                                    <button className="bbtn py-lg-2 px-lg-5 mx-lg-2 py-md-2 px-md-4 mx-md-2 py-sm-2 px-sm-4 mx-sm-2 py-1 px-3 mx-2">
                                      WOMEN
                                    </button>
                                  </Link>

                                  <Link to="/next/Kid">
                                    <button className="bbtn py-lg-2 px-lg-5 mx-lg-2 py-md-2 px-md-5 mx-md-2 py-sm-2 px-sm-5 mx-sm-2 py-1 px-4 mx-2">
                                      KID
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    ;
                  </div>
                );
              })}
            </Swiper>
          </div>

          {/* __________________________________ */}
          <div className="container-fluid  new_slide mt-lg-0 mt-md-4 mt-sm-0 mt-0">
            <Swiper
              navigation={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                800: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="card main-div " style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img1} className="card-img-top " alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text"> Girls Slip On Sneakers</small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1679</b> <del className="own_price_del">2399 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img2} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text">
                      {" "}
                      Girls Velcro Strap Joggers
                    </small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1259</b> <del className="own_price_del">1799 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img3} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text"> Girls Running Shoes</small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1119</b> <del className="own_price_del">1599 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img4} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text">BEADED CHAPPALS</small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>489</b> <del className="own_price_del">6699 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img5} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text"> Funky Sneakers </small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1049</b> <del className="own_price_del">1499 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img6} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text">GIRLS BALLERINA</small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1399</b> <del className="own_price_del">1999 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img7} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text">INFANT SOFT SHOES</small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1189</b> <del className="own_price_del">1699 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card main-div" style={{ width: "30rem" }}>
                  <div className="inner rounded text-light py-1">
                    {" "}
                    <p> - 30%</p>
                  </div>
                  <img src={Img8} className="card-img-top" alt="..." />
                  <div className="card-body text-start  p-0 m-0 ms-2 mt-2">
                    <small className="card-text"> Girls Slip On Sneakers</small>
                    <div className="own-rs">
                      <p className="py-2 px-1">PKR </p>
                    </div>
                    <p className="text-danger own-price">
                      {" "}
                      <b>1169</b> <del className="own_price_del">1699 PKR</del>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/*  ************************shop Men*********************** */}
          <div className="container-fluid  d-flex justify-content-center ">
            <div className="row wid">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center py-5 text-center ">
                <h2 className="py-3">
                  {" "}
                  <b>SHOP MEN</b>{" "}
                </h2>
                <Link to="/next/Men" className=" link_btn1 ">
                  <button
                    className=""
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    <h3
                      className=" mt-2 extra_h3"
                      style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      VIEW ALL CATEGORIES
                    </h3>
                  </button>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                <Link
                  to="/next/MenShoes"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div className="over">
                    <div className="container img2 "></div>
                  </div>
                  <h4 className="py-2 same">SHOES</h4>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                <Link
                  to="/next/MenApparel"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div className="over">
                    <div className="container img3"></div>
                  </div>
                  <h4 className="py-2 same">APPAREL</h4>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                <Link
                  to="/next/Accessories"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div className="over">
                    <div className="container img4 "></div>
                  </div>
                  <h4 className="py-2 same">ACCESSORIES</h4>
                </Link>
              </div>
            </div>
          </div>
          {/*  ************************shop women*********************** */}

          <div className="container-fluid d-flex justify-content-center ">
            <div className="row wid">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center  py-5 text-center ">
                <h2 className="py-3">
                  {" "}
                  <b>SHOP WOMEN</b>{" "}
                </h2>
                <Link to="/next/Women" className=" link_btn1 ">
                  <button
                    className=""
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    <h3
                      className=" mt-2 extra_h3"
                      style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      VIEW ALL CATEGORIES
                    </h3>
                  </button>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                <Link
                  to="/next/WomenShoes"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="over">
                    <div className="container img5"></div>
                  </div>
                  <h4 className="py-2 same">SHOES</h4>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                <Link
                  to="/next/WomenApparel"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="over">
                    <div className="container img6"></div>
                  </div>
                  <h4 className="py-2 same">APPAREL</h4>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center">
                <Link
                  to="/next/Accessories"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="over">
                    <div className="container img7"></div>
                  </div>
                  <h4 className="py-2 same">ACCESSORIES</h4>
                </Link>
              </div>
            </div>
          </div>

          {/*  ************************shop kids*********************** */}
          <div className="container-fluid  d-flex justify-content-center ">
            <div className="row wid">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center  py-5 text-center ">
                <h2 className="py-3">
                  <b>SHOP KIDS</b>
                </h2>
                <Link to="/next/Kid" className=" link_btn1 ">
                  <button
                    className=""
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    <h3
                      className=" mt-2 extra_h3"
                      style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      VIEW ALL CATEGORIES
                    </h3>
                  </button>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                <Link
                  to="/next/KidShoes"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="over">
                    <div className="container img8"></div>
                  </div>
                  <h4 className="py-2 same">SHOES</h4>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                <Link
                  to="/next/KidApparel"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="over">
                    <div className="container img9"></div>
                  </div>
                  <h4 className="py-2 same">APPAREL</h4>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 text-center ">
                <Link
                  to="/next/Accessories"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className="over">
                    <div className="container img10"></div>
                  </div>
                  <h4 className="py-2 same">ACCESSORIES</h4>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
