import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hoocks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hoocks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기`);

  if (!curDiaryItem) {
    return <div>데이터 로딩 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};
export default Diary;
