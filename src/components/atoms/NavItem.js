import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavText = styled.h3`
  font-family: monsterrat-semibold;
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  border-radius: 20%;
  padding: 1px;
`;

const NavItem = ({ text, to,onClick }) => {
  return (
    <NavLink exact onClick={onClick}  to={to} activeClassName="active">
      <StyledNavText>{text}</StyledNavText>
    </NavLink>
  );
};

export default NavItem;
