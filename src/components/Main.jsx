import { useRouter } from "next/router";
import React from "react";
import BoardList from "./units/board/list/BoardList";

export default function Main() {
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`/board/write`);
  };
  return (
    <div>
      <BoardList />
      {/* <button onClick={onClickWrite}></button> */}
    </div>
  );
}
