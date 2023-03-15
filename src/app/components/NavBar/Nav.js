import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <Wrapper>
      <Menu>
        <Item><Link to="/">Home</Link></Item>
        <Item><Link to="/about">About</Link></Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline;
  list-style: none;
  padding: 1rem;
`;
