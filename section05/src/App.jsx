import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// 루트 컴퍼넌트
function App() {
  const buttonProps = {
    text: "cafe",
    color: "blue",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button text={"mail"} color={"red"} a={1} b={2} />
      <Button {...buttonProps} />
      <Button text={"blog"}>
        <Header />
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
