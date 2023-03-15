import styled from "styled-components";

export const NotFoundPage = (props) => {
  const { code } = props;
  return (
    <Wrapper>
      <Item>{code}</Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.h2`
  color: palevioletred;
  font-size: 4rem;
  font-weight: bold;
`;
