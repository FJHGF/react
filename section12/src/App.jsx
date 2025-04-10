import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";

// 1. "/" : 모든 일를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// -> * : 모든 페이지 > 마지막에 작성하면 위의 페이지 외에 모든 페이지
// -> Link :  a 태그와 같음 > 단, 새로고침이 안생김
function App() {
  return (
    <>
      <Button />
      {/* <div>
        <img src={"./emotion1.png"} />
      </div> */}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}> Home</Link>
        <Link to={"/new"}> New</Link>
        <Link to={"/diary"}> Diary</Link>
      </div>
      <button>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <button>New 페이지로 이동</button>
    </>
  );
}

export default App;
