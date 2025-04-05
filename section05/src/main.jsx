import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const Hello = () => {
//   return <div>Hello</div>;
// };
// createRoot(document.getElementById("root")).render(<Hello />);
createRoot(document.getElementById("root")).render(<App />);
// 주로 App을 루트 컴퍼넌트로 사용
