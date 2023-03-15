import styled from "styled-components";
import { GlobalStyle } from "../../styles/global-style";
import { NavBar } from "../../app/components/NavBar";
import { useOutlet } from "react-router-dom";

export const AppLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="App">
      <NavBar />
      <Spacer />
      {outlet}
      <GlobalStyle />
    </div>
  );
};

const Spacer = styled.div`
  width: 100%;
  height: 4rem;
`;
