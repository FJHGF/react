import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
const Regiter = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRefObj = useRef(0);
  const inputRef = useRef();

  let count = 0;
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // name 속성값을 key로 사용
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };
  return (
    <div>
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
