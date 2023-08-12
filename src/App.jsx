import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";
import Text from "./components/input/text/Text";
import CardDetail from "./components/card/CardDetail";
import { useState } from "react";
import Modal from "./components/modal/Modal";
function App() {
  const [modal, setModal] = useState(false)
  
  const close = () =>{
    setModal(false)
}
  return (
    <>
      <div className="flexColumn">
        <Header />
        <div className="flexRow">
          <Navbar />
          <div className="flexColumn">
            <Card />
            <CardDetail />
            <Text />
            <Button />
            <button onClick={()=>setModal(true)}>Check modal</button>
            {modal && <Modal close={close} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
