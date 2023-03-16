import React, { memo } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { makeSelectCurrentLoadingState } from "../../selector";

const LoadingLayout = (props) => {
  const { isLoading, children } = props;
  return (
    <Wrapper>
      <WrapperItem>{children}</WrapperItem>
      {isLoading && (
        <LoadingWrapper>
          <LoadingIndicator />
        </LoadingWrapper>
      )}
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectCurrentLoadingState(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, memo)(LoadingLayout);


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
