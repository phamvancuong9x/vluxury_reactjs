import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";
function App() {
  const params = useLocation();
  return (
    <>
      {params.pathname !== "/admin" && <Header />}
      <Router />
      {params.pathname !== "/admin" && <Footer />}
    </>
  );
}
export default App;
