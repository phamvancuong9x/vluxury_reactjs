import ShowAlertSuccess from "./components/Alert/component/ShowAlert";
import ShowAlertError from "./components/Alert/component/ShowAlertError";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";
function App() {
  return (
    <>
      <Header />
      <Router />
      <ShowAlertSuccess />
      <ShowAlertError />
      <Footer />
    </>
  );
}
export default App;
