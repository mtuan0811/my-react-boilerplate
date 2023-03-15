import styled from "styled-components";
import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/Checkbox";
import { FormLabel } from "../../components/FormLabel";
import { Input } from "../../components/Input";
import { A } from "../../components/A";
import { LoadingLayout } from "../../layout/loadingLayout";
import { useState } from "react";
import { AUTH_LOGIN_REQUEST } from "./action";

const LoginPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { loginAction } = props;

  const login = () => {
    // setIsLoading(true)
    loginAction({ email: "tuandm1@gmail.com", password: "tuandm" });
  };

  return (
    <LoadingLayout isShow={isLoading}>
      <Wrapper>
        <WrapperImg></WrapperImg>
        <WrapperInput>
          <H2>Login with your account</H2>
          <WrapperInput>
            <FormLabel>Email</FormLabel>
            <Input type="text" placeholder="Email" />
          </WrapperInput>
          <WrapperInput>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </WrapperInput>
          <WrapperForgotPassword>
            <WrapperRemember>
              <CheckBox type="checkbox" /> <label>Remember me</label>
            </WrapperRemember>
            <ALink href="#">Forgot password</ALink>
          </WrapperForgotPassword>
          <ButtonLogin primary onClick={login}>
            Login
          </ButtonLogin>
        </WrapperInput>
      </Wrapper>
    </LoadingLayout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (payload) => dispatch({ type: AUTH_LOGIN_REQUEST, payload }),
  };
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(LoginPage);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperForgotPassword = styled(Wrapper)`
  justify-content: space-between;
  padding: 16px 16px;
`;
const ALink = styled(A)`
  font-size: 14px;
`;
const WrapperImg = styled(Wrapper)`
  flex: 2;
  background-image: url("/images/bg_login.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const WrapperInput = styled.div`
  display: flex;
  flex: 1;
  padding: 0px 16px;
  text-align: left;
  flex-direction: column;
`;

const WrapperRemember = styled.div`
  display: flex;
  align-items: center;

  & label {
    font-size: 14px;
    color: grey;
    margin-left: 8px;
  }
`;

const H2 = styled.h2`
  color: grey;
  font-size: 28px;
  margin-left: 16px;
`;
const ButtonLogin = styled(Button)`
  margin-top: 16px;
  height: 45px;
`;
