import styled from "styled-components";
import { LoadingIndicator } from "../components/LoadingIndicator";

export const LoadingLayout = (props) => {
  const { isShow, children } = props;
  return (
    <Wrapper>
      <WrapperItem>{children}</WrapperItem>
      {isShow && (
        <LoadingWrapper>
          <LoadingIndicator />
        </LoadingWrapper>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;

const WrapperItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  background-color: #cc808080;
  align-items: center;
  justify-content: center;
`;
