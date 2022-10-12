import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Nextpage from "./Pages/Next page/Nextpage";
import Product from "./Pages/product/product";
import { Routes, Route } from "react-router-dom";
import SelectProduct from "./Pages/SelectProduct/selectProduct";
import NotFound from "./component/NotFound";
export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/next/:id" element={<Nextpage />}></Route>
        <Route path="/product/:pro/:cls/:cat" element={<Product />}></Route>
        <Route path="/lastproduct/:show" element={<SelectProduct />}></Route>
        <Route path="/notfound/404" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
