import React from "react";
import { useState } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { firebaseApp } from "../../../../api/firebase";

export default function BoardWrite() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
  });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  async function onClickSubmit() {
    event.preventDefault();

    if (!inputs.title) {
      alert("제목을 입력해주세요.");
      return;
    } else if (!inputs.desc) {
      alert("내용을 입력해주세요.");
      return;
    }
    // 예외처리
    const board = collection(getFirestore(firebaseApp), "board");

    const createdAt = Date.now();

    await addDoc(board, {
      ...inputs,
      createdAt,
    });
    alert("게시물 등록에 성공하였습니다!");

    // 게시글로 이동
  }
  return (
    <form>
      <div className="flex flex-col">
        <label htmlFor="title" className="w-full text-xl text-gray-500">
          제목
        </label>
        <input
          className="p-2 rounded-md w-full h-10 focus:outline-none "
          id="title"
          type="text"
          onChange={onChangeInputs}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="desc" className="w-full text-xl text-gray-500">
          내용
        </label>
        <input
          className="p-2 rounded-md w-full h-fit focus:outline-none"
          id="desc"
          type="text"
          onChange={onChangeInputs}
        />
      </div>

      <div className="flex justify-end py-4">
        <button
          className="bg-gray-200 px-3 py-2 rounded-xl"
          onClick={onClickSubmit}
        >
          등록하기
        </button>
      </div>
    </form>
  );
}
