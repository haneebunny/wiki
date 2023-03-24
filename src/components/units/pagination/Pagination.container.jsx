import PaginationUI from "./Pagination.presenter";

export default function Pagination(props) {
  return (
    <div>
      <PaginationUI
        router={props.router}
        data={props.data}
        lastPage={props.lastPage}
        refetch={props.refetch}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </div>
  );
}
