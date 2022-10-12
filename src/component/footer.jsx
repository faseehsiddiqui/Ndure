import React from 'react'
import "./footer.css"
import {FaFacebookF,FaInstagram} from "react-icons/fa"
import {ImYoutube2} from "react-icons/im"
const Footer=() => {
  return (
    <>
    {/*  ************************shop SUBSCRIBE*********************** */}
 <div className="container-fluid py-5 bg-light text-center d-flex mt-5  flex-column ">
     <h4 className='same'>SUBSCRIBE TO OUR NEWSLETTER</h4>
     <div className="row d-flex justify-content-center py-3">
     <div className="input-group  d-flex justify-content-center  ">
  <input type="text" placeholder='ENTER YOUR EMAIL ADDRESS' className="py-2 px-5 one_two " style={{border:"1px solid silver",boxShadow:"none",borderRadius:"10px",backgroundColor:"transparent"}} />
  <div className="input-group-append">
    <button className="py-2 px-2" style={{border:"1px solid silver",boxShadow:"none",borderRadius:"10px",backgroundColor:"transparent"}} type="button">SUBSCRIBE</button>
  </div>
</div>
</div>
 </div>

{/*  ************************footer************************/}

<div className="container-fluid py-5">
    <div className="container mt-3">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer d-flex flex-column align-items-center ">
                <h4 className='h4 '>About Ndure</h4>
                <ul className='list-unstyled '>
                <li>What is NDURE?</li>
                <li>Corporate News</li>
                <li>Customer Reviews</li>
                <li>Find a Store</li>
                <li>Careers</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer d-flex flex-column align-items-center py-lg-0 py-md-0 py-sm-3 py-3 ">
                <h4 className='h4  text-center'>Help</h4>
                <ul className='list-unstyled  text-center'>
                <li>Order Status</li>
                <li>Shipping & Delivery</li>
                <li>Return & Exchange Policy</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12  d-flex flex-column align-items-center py-lg-0 py-md-0 py-sm-3 py-3 ">
                <h4 className='h4 text-center'>Connect With Us</h4>
                <div className="icons  d-flex text-center justify-content-center">
                   <h6 className='mx-1'>< FaFacebookF/></h6> 
                   <h6 className='mx-1'>< FaInstagram/></h6>
                   <h6 className='mx-1'>< ImYoutube2/></h6>
                </div>
               
            </div>
        </div>
    </div>
</div>


<div className="container-fluid bg-danger text-white d-flex justify-content-between">
    <small className='p2' style={{fontSize:".7rem"}}>ALL RIGHTS RESERVED TO NDURE</small>
    <small className='p2' style={{fontSize:".7rem"}}></small>
</div>
    </>
  )
}

export default Footer