import * as React from "react";
import styled from "styled-components";
import { PageWrapper } from "../PageWrapper";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const NavBar = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.95px 2.6px;
  height: 4rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 2;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
