import React from "react";

export default function BoardWrite() {
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <label htmlFor="title" className="w-full text-xl text-gray-400">
            제목
          </label>
          <input
            className="bg-gray-500 rounded-md w-3 h-10 focus:outline-none "
            id="title"
            type="text"
            //   onChange={onChangeInputs}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="desc" className="w-full text-xl text-gray-300">
            내용
          </label>
          <input
            className="rounded-md w-full h-10"
            id="desc"
            type="text"
            //   onChange={onChangeInputs}
          />
        </div>

        <div>
          {/* 내용: <input id="desc" type="text" onChange={onChangeInputs} /> */}
        </div>
        <div>{/* <button onClick={onClickSubmit}>등록하기</button> */}</div>
      </form>
    </div>
  );
}
