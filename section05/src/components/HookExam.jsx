import { useState } from "react";
import useInput from "./../hooks/useInput";
// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState(0);

//2. 조건부로 호출될 수 없다.
//-> 서로다른 훅의 순서가 엉킨다.

// 3. 나만의 훅(커스텀) 직접 만들 수 있다.
// use로 시작하는 함수를 훅으로 인식함

const HookExam = () => {
  // if(true){
  //   const state = useState(0);
  // }

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};
export default HookExam;
