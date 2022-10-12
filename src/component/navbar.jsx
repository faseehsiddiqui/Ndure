import React, { useEffect } from "react";
import img1 from "../Assets/images/Home/Ndure_130x30_80ad96b2-a180-4493-921e-078d0aa786d5.png";
import { BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import Men from "../Men/men";
export default function Navbar() {
  const handleClick = (obj) => {
    if (obj == "Men") {
      window.location.reload();
      window.location.href = "/next/Men";
    }
    if (obj == "Women") {
      window.location.reload();
      window.location.href = "/next/Women";
    }
    if (obj == "kid") {
      window.location.reload();
      window.location.href = "/next/Kid";
    }
  };

  return (
    <div>
      <div className="container-fluid  text-center text-white dan">
        <p className="para1 py-1 p-0 m-0">
          Free Shipping on all orders above Rs.2000. Nationwide delivery within
          3-5 working days.
        </p>
      </div>
      <div className="container-fluid  border ">
        <div className="row">
          <div className="col-lg-4 d-flex  align-items-center ">
            <Link
              to="/next/Men"
              style={{ textDecoration: "none", color: "silver" }}
              onClick={() => {
                handleClick("Men");
              }}
            >
              {" "}
              <p className="p1 mx-1 fw-bold cursor-pointer">
                MEN <span className="fw-lighter"> |</span>
              </p>
            </Link>
            <Link
              to="/next/Women"
              style={{ textDecoration: "none", color: "silver" }}
              onClick={() => {
                handleClick("Women");
              }}
            >
              {" "}
              <p className="p1 mx-1 fw-bold">
                WOMEN <span className="fw-lighter"> |</span>
              </p>
            </Link>{" "}
            <span></span>
            <Link
              to="/next/kid"
              style={{ textDecoration: "none", color: "silver" }}
              onClick={() => {
                handleClick("kid");
              }}
            >
              {" "}
              <p className="p1 mx-2 fw-bold">KIDS</p>
            </Link>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Link to="/">
              {" "}
              <img src={img1} alt="" className="py-3" />
            </Link>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="input-group mb-3 w-75">
              <input
                type="text"
                className="form-control mt-3"
                style={{
                  borderRight: "none",
                  boxShadow: "none",
                  borderBottom: "1px solid silver",
                  borderTop: "1px solid silver",
                  borderLeft: "1px solid silver",
                }}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary mt-3"
                style={{
                  borderLeft: "1px solid white",
                  borderTop: "1px solid silver",
                  borderBottom: "1px solid silver",
                  borderRight: "1px solid silver",
                }}
                type="button"
                id="button-addon2"
              >
                <BsSearch />
              </button>
            </div>
            <FiUser style={{ fontSize: "1.5rem" }} />
            <AiOutlineHeart style={{ fontSize: "1.5rem" }} />
            <AiOutlineShoppingCart style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
      <div className="container-fluid stick  p-0 m-0">
        <div className="row">
          <div className="col-lg-4  "></div>
          <div className=" col-lg-4 col-md-5 col-sm-8 col-12 mx-auto d-flex justify-content-center">
            <ul
              style={{ listStyle: "none", fontSize: ".7rem", height: "100%" }}
              className="d-flex justify-content-around align-items-center  w-100"
            >
              <Link
                to="/notfound/404"
                style={{
                  listStyle: "none",
                  fontSize: ".7rem",
                  height: "100%",
                  textDecoration: "none",
                  color: "black",
                }}
                className="d-flex justify-content-around align-items-center  w-100 "
              >
                <li className="li">SUMMER'22</li>
                <li className="li">SHOES</li>
                <li className="li">CLOTHING</li>
                <li className="li">ACCESSORIES</li>
                <li className="li">SALE</li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-4  "></div>
        </div>
      </div>
    </div>
  );
}
