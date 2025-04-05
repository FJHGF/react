import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
const Regiter = () => {
  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  // console.log(input);
  const countRefObj = useRef(0);
  const inputRef = useRef();
  // console.log(countRefObj.current, "랜더링");

  let count = 0;
  const onChange = (e) => {
    // countRefObj.current++;
    count++; // 1로 고정되어있음 > Regiter 컴포넌트가 렌더링되면서 0으로 초기화 > 계속 1이 됌
    console.log(count, "랜더링");
    // console.log(countRefObj.current, "랜더링");
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // name 속성값을 key로 사용
    });
  };
  // const onChageName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };
  // const onChangeBirth = (e) => {
  //   // setBirth(e.target.value);
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   // setCountry(e.target.value);
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };
  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };
  return (
    <div>
      {/* <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        {" "}
        ref+1
      </button> */}
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          vlaue={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="us">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Regiter;
