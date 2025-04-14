import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Suspense } from "react";
import { Modal } from "react-bootstrap";

function App() {
  const darkMode = localStorage.getItem("theme");
  document
    .getElementsByTagName("html")[0]
    .setAttribute("data-bs-theme", darkMode!);
  return (
    <>
      <Header />
      <div className="p-4 p-lg-5">
        <Suspense
          fallback={
            <Modal show={true}>
              <div className="d-flex justify-content-center">
                <div className="spinner-border float" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </Modal>
          }
        >
          <Body />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
