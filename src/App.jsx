import "./App.css";
import Header from "./components/header/Header";
// import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="flexColumn">
        <Header />
        <Navbar />
      </div>
    </>
  );
}

export default App;
