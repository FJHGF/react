//JSX
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// -> if / for문은 불가능함 > 한줄로 표현이 안됌

// 2. 숫자, 문자열, 배열 값만 랜더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.

import "./Main.css";
const Main = () => {
  const number = 9;
  const obj = { a: 1 };
  const user = {
    name: "박지성",
    isLogin: false,
  };
  // return (
  // <div></div>
  // 최상위 태그가 없다면 빈태그로 감싸야 한다.  <></>
  // <main>
  //   <h1>Main</h1>
  //   <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //   {[1, 2, 3]}
  //   {undefined}
  //   {true}
  //   {null}
  //   {/* {obj} */}
  //   {obj.a}
  //   <img></img>
  //   <img />
  // </main>

  // <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>

  // );

  if (user.isLogin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div className="login">로그인</div>;
  }
};

export default Main;
