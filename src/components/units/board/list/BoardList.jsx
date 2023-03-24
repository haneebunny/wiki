import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  getFirestore,
  getDocs,
  DocumentData,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/api/firebase";
import Router, { useRouter } from "next/router";
import Pagination from "../../pagination/Pagination.container";
import { query } from "firebase/database";

export default function BoardList() {
  const [boards, setBoards] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const boardsCollectionRef = collection(db, "board");

  const q = query(
    boardsCollectionRef,
    where("author", "==", "patrick rothfuss"),
    orderBy("createdAt")
  );

  useEffect(() => {
    const getBoards = async () => {
      const data = await getDocs(boardsCollectionRef);
      const boards = data.docs.map((el) => el.data());
      setBoards(boards);
    };

    getBoards();
  }, []);

  const onClickWriting = (event) => {
    Router.push(`/board/detail/${event?.currentTarget.id}`);
  };

  const onClickToWrite = () => {
    router.push("/board/write");
  };
  const lastPage = Math.ceil(boards?.length / 10);

  console.log(boards);
  return (
    <div>
      <table className="w-full bg-gray-300">
        <tbody className="">
          {boards?.map((board) => (
            <tr
              className="w-10 hover:bg-gray-200 hover:cursor-pointer"
              onClick={onClickWriting}
              id={board.createdAt}
              key={board.title}
            >
              <td className="border px-4 py-2 w-full h-8">{board.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end py-4">
        <button
          onClick={onClickToWrite}
          className="bg-gray-200 px-3 py-2 rounded-xl"
        >
          글쓰기
        </button>
      </div>

      {/* <Pagination
        router={router}
        data={boards}
        lastPage={lastPage}
        refetch={refetch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}
