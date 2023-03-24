import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50vw;
  align-items: center;
  padding: 10px 100px;
  font-size: 20px;
`;

export const PageButton = styled.button`
  background: transparent;
  border: transparent;
  color: #a4a4a4;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

export const PageNumber = styled.button`
  background: transparent;
  border: transparent;
  color: ${(props) => (props.currentPage ? "pink" : "gray")};

  &:hover {
    cursor: pointer;
  }
`;
export const MyColumn = styled.div`
  /* width: 25%; */
`;

// export const DoubleLeft = styled(DoubleLeftOutlined)`
//   color: ${(props) => `${props.color}`};
// `;
// export const DoubleRight = styled(DoubleRightOutlined)`
//   width: 15px;
// `;
