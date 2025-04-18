import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setcurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDairyItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDairyItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setcurDiaryItem(currentDairyItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
