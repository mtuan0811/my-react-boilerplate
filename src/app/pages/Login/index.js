import styled from "styled-components";
import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/Checkbox";
import { FormLabel } from "../../components/FormLabel";
import { Input } from "../../components/Input";
import { A } from "../../components/A";
import LoadingLayout from "../../layout/loadingLayout";
import { AUTH_LOGIN_REQUEST } from "./action";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginPage = (props) => {
  const { t } = useTranslation();
  const { loginAction } = props;
  const navigate = useNavigate();

  const login = () => {
    loginAction({
      data: { email: "tuandm1@gmail.com", password: "tuandm" },
      navigate,
    });
  };

  return (
    <LoadingLayout>
      <Wrapper>
        <WrapperImg></WrapperImg>
        <WrapperInput>
          <H2>Login with your account</H2>
          <WrapperInput>
            <FormLabel>{t("global.email")}</FormLabel>
            <Input type="text" placeholder={t("global.email")} />
          </WrapperInput>
          <WrapperInput>
            <FormLabel>{t("global.password")}</FormLabel>
            <Input type="password" placeholder={t("global.password")} />
          </WrapperInput>
          <WrapperForgotPassword>
            <WrapperRemember>
              <CheckBox type="checkbox" />{" "}
              <label>{t("login.remember_me")}</label>
            </WrapperRemember>
            <ALink href="#">{t("login.forgot_password")}</ALink>
          </WrapperForgotPassword>
          <ButtonLogin primary onClick={login}>
            {t("global.login")}
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
