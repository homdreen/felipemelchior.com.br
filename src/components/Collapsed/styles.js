import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';
import Img from 'gatsby-image';

export const Container = styled.div`
  cursor: pointer;
  
  min-height: 100vh;
  height: 100%;
  width: 70px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: space-between;

  background: var(--sidebarBackground);
  transition: 0.2s background;

  &:hover {
    background: ${darken(0.02, '#5B2D89')}
  }

`;


export const LogoText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
`;


export const ProfileLink = styled(Link)`
  border-bottom: 1px solid var(--borders);
  color: var(--textColor);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${darken(0.1, '#fff')};
  }
`;

export const Avatar = styled(Img)`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 10px auto;
  border: 2px solid var(--borders);
`;

export const MenuGroup = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 50px;
  list-style: none;

`;

export const MenuLink = styled(Link)`
  color: var(--inactive);

  transition: color 0.2s;
  display: block;

  &:hover {
    color: var(--active);
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  display: block;
  position: relative;
 
  width: 2.5rem;
  height: 2.5rem;
  margin: 5px auto;

  .active { 
    color: var(--active);
  }
`;

export const CallToAction = styled.p`
  font-size: 10px;
  color: #fff;
  text-align: center;
  margin-top: auto;
`;

