import React from 'react'
import img1 from "../Assets/images/Home/Ndure_130x30_80ad96b2-a180-4493-921e-078d0aa786d5.png"
import { BsSearch } from 'react-icons/bs';
import "./navbar.css"
export default function H_nav() {
  return (
    <div>
        <div className="container-fluid  text-center text-white dan">
    <p className='para1 py-1 p-0 m-0'>Free Shipping on all orders above Rs.2000. Nationwide delivery within 3-5 working days.</p>
</div>
<div className="container-fluid ">
    <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <img src={img1} alt="" className='py-3' />
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
        <div className="input-group mb-3 w-75">
  <input type="text" className="form-control mt-3" style={{borderRight:"none",boxShadow:"none",borderBottom:"1px solid silver",borderTop:"1px solid silver",borderLeft:"1px solid silver"}} placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary mt-3" style={{borderLeft:"1px solid white",borderTop:"1px solid silver",borderBottom:"1px solid silver",borderRight:"1px solid silver"}} type="button" id="button-addon2"><BsSearch/></button>
</div>
        </div>
    </div>
</div>
    </div>
  )
}
