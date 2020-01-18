import styled from 'styled-components';
import { Link } from 'gatsby';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const MenuGroup = styled.ul`
  margin-top: 15px;
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style: none;

  border-top: 1px solid #fff;

`;

export const MenuLink = styled(Link)`
  color: var(--inactive);
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  border-bottom: 2px solid var(--inactive);
  transition: color 0.2s, border-bottom 0.2s;

 

  &:hover {
    color: var(--active);
    border-bottom: 2px solid var(--active);
  }

  svg {
    display: block;
  }
`;

export const IconWrapper = styled.svg`
  flex: none;
  width: 48px;
  height: 48px;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  display: block;
  position: relative;

  width: 100%;

  margin: 0 auto;

  .active {
    color: var(--active);
    border-bottom: 2px solid var(--active);
  }
`;

export const MenuItemText = styled.span`
  font-weight: bold;
  font-size: 24px;
`;