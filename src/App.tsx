import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const darkMode = localStorage.getItem("theme");
  document
    .getElementsByTagName("html")[0]
    .setAttribute("data-bs-theme", darkMode!);
  return (
    <>
      <Header />
      <div className="p-4 p-lg-5">
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
