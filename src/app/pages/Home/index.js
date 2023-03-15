import React, { memo } from "react";
import { ContentWrapper } from "../../components/ContentWrapper";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { makeSelectCurrentUser } from "../../../selector/user";
import { incremented } from "../../../store/user";
import { Button } from "../../components/Button";

const HomePage = ({ value, changeValue }) => {
  return (
    <ContentWrapper>
      <h2>Home Page</h2>
      <h2>This is : {value}</h2>
      <Button onClick={changeValue}>Change</Button>
    </ContentWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
    value: makeSelectCurrentUser(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeValue: (evt) => dispatch(incremented()),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
