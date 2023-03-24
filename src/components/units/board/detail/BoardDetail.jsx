import { db } from "@/api/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function BoardDetail() {
  const router = useRouter();
  const [board, setBoard] = useState();

  //   const boardsCollectionRef = collection(db, "board");

  useEffect(() => {
    const docRef = collection(db, "board");
    const id = Number(router.query._id);
    const q = query(docRef, where("createdAt", "==", id));
    const getSnap = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setBoard(doc.data());
      });
    };
    getSnap();
  }, []);

  const onClickToList = () => {
    router.push("/board");
  };

  return (
    <section className="flex flex-col  min-h-[300px] justify-between">
      <div>
        <div className="flex">
          <p className="text-xl w-[60px]">제목</p>
          <div className="text-2xl items-center">{board?.title}</div>
        </div>

        <div className="flex">
          <p className="text-xl w-[50px]">내용</p>
          <div className="text-lg flex">{board?.desc}</div>
        </div>
      </div>

      <button
        onClick={onClickToList}
        className=" bg-gray-200 px-3 py-2 rounded-xl"
      >
        목록으로
      </button>
    </section>
  );
}
