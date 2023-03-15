import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <Title>My BoilerPlate</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: black;
  font-weight: bold;
  margin-right: 1rem;
`;
