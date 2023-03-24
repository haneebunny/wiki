import { useState } from "react";
import * as S from "./Pagination.styles";

export default function PaginationUI(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    props.setCurrentPage(Number(event.target.id));
    console.log(event.target.id);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.setCurrentPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (!(startPage + 10 <= props.lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.setCurrentPage(startPage - 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <S.Wrapper>
        <S.DoubleLeft
          onClick={onClickPrevPage}
          color={startPage === 1 ? "gray" : "pink"}
        />
        {Array(10)
          .fill(1)
          .map(
            (_, index) =>
              index + startPage <= props.lastPage && (
                <S.PageNumber
                  key={index + startPage}
                  onClick={onClickPage}
                  id={String(index + startPage)}
                  currentPage={props.currentPage === index + startPage}
                >
                  {index + startPage}
                </S.PageNumber>
              )
          )}
        <S.DoubleRight
          style={{ color: startPage + 10 <= props.lastPage ? "pink" : "gray" }}
          onClick={onClickNextPage}
        />
      </S.Wrapper>
    </div>
  );
}
