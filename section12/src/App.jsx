import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
// import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"right"} />}
      />
      <Button
        text={123}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Button
        text={123}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Button
        text={123}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
