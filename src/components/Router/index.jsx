import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../pages/Admin";
import Auth from "../../pages/Auth";
import Cart from "../../pages/Cart";
import CategoryProduct from "../../pages/CategoryProduct";
import Checkout from "../../pages/Checkout";
import DetailProduct from "../../pages/DetailProduct";
import HomePage from "../../pages/Home";
import InfoUser from "../../pages/InfoUser";
import Map from "../../pages/Map";
import News from "../../pages/News";
import NotFound from "../../pages/NotFound";
import Search from "../../pages/Search";

import ScrollToTop from "../ScrollToTop";
function Routers() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category-product" element={<CategoryProduct />} />
        <Route path="/detail-product/:idProduct" element={<DetailProduct />} />
        <Route path="/map" element={<Map />} />
        <Route path="/info-user" element={<InfoUser />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
}

export default Routers;
