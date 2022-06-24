import { useLocation } from "react-router-dom";
import ShowAlertSuccess from "./components/Alert/component/ShowAlert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";
function App() {
  const params = useLocation();

  return (
    <>
      {params.pathname !== "/admin" && <Header />}
      <Router />
      <ShowAlertSuccess />
      {params.pathname !== "/admin" && <Footer />}
    </>
  );
}
export default App;
